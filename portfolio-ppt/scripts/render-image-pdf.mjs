import { mkdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { spawn } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const indexUrl = `file://${path.join(root, 'index.html')}`;
const outputDir = path.join(root, 'output');
const renderDir = path.join(outputDir, 'slide-renders');
const outputPdf = path.join(outputDir, '김택권_포트폴리오_16x9.pdf');
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const debugPort = 9331;
const captureScale = 2;
const keepRenders = process.env.KEEP_RENDERS === '1';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchJson(url) {
  for (let i = 0; i < 50; i += 1) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch {
      await wait(200);
    }
  }
  throw new Error(`Chrome did not become ready: ${url}`);
}

async function connectToPage() {
  const tabs = await fetchJson(`http://127.0.0.1:${debugPort}/json`);
  const tab = tabs.find((entry) => entry.type === 'page' && entry.url.includes('/portfolio-ppt/index.html'))
    ?? tabs.find((entry) => entry.type === 'page' && entry.url.startsWith('file://'))
    ?? tabs.find((entry) => entry.type === 'page')
    ?? tabs[0];
  const socket = new WebSocket(tab.webSocketDebuggerUrl);
  let commandId = 0;
  const pending = new Map();
  let loaded;
  const loadPromise = new Promise((resolve) => {
    loaded = resolve;
  });

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      pending.get(message.id)(message);
      pending.delete(message.id);
    }
    if (message.method === 'Page.loadEventFired') {
      loaded();
    }
  };

  await new Promise((resolve) => {
    socket.onopen = resolve;
  });

  const send = (method, params = {}) =>
    new Promise((resolve) => {
      const id = ++commandId;
      pending.set(id, resolve);
      socket.send(JSON.stringify({ id, method, params }));
    });

  return { socket, send, loadPromise };
}

async function runPython(args) {
  await new Promise((resolve, reject) => {
    const child = spawn('python3', args, { stdio: 'inherit' });
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`python3 exited with ${code}`));
    });
  });
}

async function main() {
  await mkdir(outputDir, { recursive: true });
  await rm(renderDir, { recursive: true, force: true });
  await mkdir(renderDir, { recursive: true });

  const chrome = spawn(chromePath, [
    '--headless=new',
    '--disable-gpu',
    '--disable-extensions',
    '--no-sandbox',
    `--remote-debugging-port=${debugPort}`,
    '--user-data-dir=/tmp/portfolio-ppt-image-pdf',
    indexUrl,
  ], { stdio: 'ignore' });

  try {
    await wait(1000);
    const { socket, send, loadPromise } = await connectToPage();
    await send('Page.enable');
    await send('Runtime.enable');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1600,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await send('Page.navigate', { url: indexUrl });
    await Promise.race([loadPromise, wait(5000)]);
    await wait(1000);
    await send('Runtime.evaluate', {
      expression: `
        document.querySelector('.deck-nav')?.remove();
        const force = (element, property, value) => element.style.setProperty(property, value, 'important');
        force(document.documentElement, 'scroll-snap-type', 'none');
        force(document.documentElement, 'overflow', 'hidden');
        force(document.documentElement, 'width', '1280px');
        force(document.documentElement, 'height', '720px');
        force(document.body, 'margin', '0');
        force(document.body, 'min-width', '0');
        force(document.body, 'width', '1280px');
        force(document.body, 'height', '720px');
        force(document.body, 'overflow', 'hidden');
        force(document.body, 'background', 'white');
        const deck = document.querySelector('.deck');
        force(deck, 'display', 'block');
        force(deck, 'width', '1280px');
        force(deck, 'min-width', '1280px');
        force(deck, 'max-width', 'none');
        force(deck, 'height', '720px');
        force(deck, 'margin', '0');
        force(deck, 'padding', '0');
        force(deck, 'transform', 'none');
        window.__portfolioSlideHtml = [...document.querySelectorAll('.slide')].map((slide) => ({
          id: slide.id,
          html: slide.outerHTML
        }));
      `,
    });

    const slideInfo = await send('Runtime.evaluate', {
      expression: `
        window.__portfolioSlideHtml.map((slide, index) => ({
          id: slide.id || String(index + 1),
          index
        }))
      `,
      returnByValue: true,
    });

    const slides = slideInfo.result.result.value;
    for (let i = 0; i < slides.length; i += 1) {
      const slide = slides[i];
      await send('Runtime.evaluate', {
        expression: `
          (async () => {
          const force = (element, property, value) => element.style.setProperty(property, value, 'important');
          const slideData = window.__portfolioSlideHtml[${slide.index}];
          document.body.innerHTML = '<main class="deck">' + slideData.html + '</main>';
          const deck = document.querySelector('.deck');
          force(deck, 'display', 'block');
          force(deck, 'width', '1280px');
          force(deck, 'min-width', '1280px');
          force(deck, 'max-width', 'none');
          force(deck, 'height', '720px');
          force(deck, 'margin', '0');
          force(deck, 'padding', '0');
          force(deck, 'transform', 'none');
          const slide = document.querySelector('.slide');
          force(slide, 'display', 'grid');
          force(slide, 'width', '1280px');
          force(slide, 'height', '720px');
          force(slide, 'min-width', '1280px');
          force(slide, 'min-height', '720px');
          force(slide, 'margin', '0');
          scrollTo(0, 0);
          await Promise.all([...document.images].map((image) => {
            if (image.complete) return Promise.resolve();
            return new Promise((resolve) => {
              image.onload = resolve;
              image.onerror = resolve;
            });
          }));
          })();
        `,
        awaitPromise: true,
      });
      await wait(100);
      const shot = await send('Page.captureScreenshot', {
        format: 'png',
        fromSurface: true,
        captureBeyondViewport: true,
        clip: {
          x: 0,
          y: 0,
          width: 1280,
          height: 720,
          scale: captureScale,
        },
      });
      const filename = path.join(renderDir, `${String(i + 1).padStart(2, '0')}-${slide.id}.png`);
      await writeFile(filename, Buffer.from(shot.result.data, 'base64'));
      console.log(`Rendered ${filename}`);
    }

    socket.close();

    await runPython(['-c', `
from pathlib import Path
from PIL import Image

render_dir = Path(${JSON.stringify(renderDir)})
output_pdf = Path(${JSON.stringify(outputPdf)})
images = []
for path in sorted(render_dir.glob("*.png")):
    image = Image.open(path).convert("RGB")
    page = Image.new("RGB", image.size, "white")
    safe_width = image.width - 64
    safe_height = round(safe_width * 9 / 16)
    if safe_height > image.height - 64:
        safe_height = image.height - 64
        safe_width = round(safe_height * 16 / 9)
    safe_image = image.resize((safe_width, safe_height), Image.Resampling.LANCZOS)
    page.paste(safe_image, ((image.width - safe_width) // 2, (image.height - safe_height) // 2))
    images.append(page)

if not images:
    raise SystemExit("No slide images rendered")

first, rest = images[0], images[1:]
first.save(output_pdf, "PDF", save_all=True, append_images=rest, resolution=96.0)
print(f"Wrote {output_pdf} ({len(images)} pages)")
`]);
    if (!keepRenders) {
      await rm(renderDir, { recursive: true, force: true });
    }
  } finally {
    chrome.kill('SIGTERM');
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
