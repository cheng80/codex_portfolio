# Codex Portfolio Screenshot Requests

Purpose: ask each project Codex session to produce screenshots that work inside a portfolio slide at a glance.

This is not an evidence dump. The final portfolio must be readable in 3-5 seconds per slide. The main image should show the actual product experience. Technical proof should be small, selective, and source-bounded.

## Shared Rules

- Main screenshot first: use a real app/game/result screen that immediately communicates what the project does.
- Proof second: API docs, terminal logs, JSON, code, tests, and architecture details are supporting material, not the main visual.
- No AI-made evidence boards: do not create synthetic infographic-style "pipeline evidence" screens, tall README illustrations, hand-drawn process diagrams, or decorative card boards only for the portfolio.
- No fake product claims: demo/sample data is allowed only when it is visibly demo/sample data.
- No sensitive data: hide API keys, `.env`, tokens, personal data, private accounts, and irrelevant local paths.
- Output PNG files in each source project under `portfolio-screenshots/`.
- Include `portfolio-screenshots/README.md` explaining what each file shows, how it was captured, and whether demo/sample data was used.

Target repository for final copied assets:

- `/Users/cheng80/Desktop/codex_portfolio_handoff_package/web-starter/assets/projects/`

## Visual Composition Standard

Each project should produce:

1. One hero screenshot
   - The image that can be placed large on the portfolio slide.
   - It should be understandable without reading a paragraph.

2. One or two proof snippets
   - Small supporting images or cropped captures.
   - They should prove implementation details without dominating the slide.

3. One optional alternate
   - A backup screenshot in case the hero crop does not fit the final 16:9 layout.

Avoid these as hero images:

- Swagger page alone
- terminal output alone
- VS Code/code editor alone
- JSON response alone
- AI-generated/readme-style infographic
- synthetic pipeline board

Use these as hero images:

- actual chat response screen
- actual Flutter app screen
- actual gameplay screen
- actual result/recommendation screen

## 1. chatbot_rag

Use this request in the `chatbot_rag` project Codex session.

```text
이 프로젝트는 김택권 포트폴리오의 AI/RAG 백엔드 근거로 사용됩니다.

중요 방향:
- 포트폴리오에서는 한눈에 들어오는 실제 사용 결과 화면이 우선입니다.
- Swagger, 터미널, 코드, JSON은 보조 증거로만 사용합니다.
- AI가 만든 것처럼 보이는 파이프라인 설명 보드나 세로형 README 인포그래픽은 만들지 마세요.

필요 산출물:

1. `chatbot-rag-hero-response.png`
   - 가장 중요한 메인 이미지입니다.
   - 실제 관광 챗봇 응답 화면을 캡처해 주세요.
   - 질문, 답변, 추천 카드, 출처/근거가 한 화면에서 보이면 좋습니다.
   - 현재 있는 `chatbot-rag-response-demo.png`가 이 역할에 적합하면 이름만 복사/변경해도 됩니다.

2. `chatbot-rag-proof-api.png`
   - 작은 보조 증거용 이미지입니다.
   - Swagger/OpenAPI에서 `/tourism/chat` 엔드포인트가 보이게 캡처해 주세요.
   - 전체 Swagger 페이지가 아니라 `/tourism/chat`이 읽히는 범위로 정리해 주세요.

3. `chatbot-rag-proof-response-json.png`
   - 작은 보조 증거용 이미지입니다.
   - 실제 `/tourism/chat` 응답의 핵심 필드 일부만 보이게 캡처해 주세요.
   - 예: `lookup_mode`, `card_count`, `source_count`, `sources`, 추천 카드 제목 일부.
   - 터미널 또는 브라우저 JSON 화면 모두 가능합니다.
   - 화면 전체를 코드/로그로 채우지 말고, 포트폴리오에서 작게 넣어도 읽히는 범위만 사용해 주세요.

선택 산출물:

4. `chatbot-rag-proof-code-or-test.png`
   - 실제 구현 근거가 필요할 때만 사용합니다.
   - VS Code/터미널에서 서비스 코드 또는 테스트 통과 결과를 보여주세요.
   - 이 이미지는 최종 포트폴리오에서 매우 작게 쓰거나 제외될 수 있습니다.

제외:
- `chatbot-rag-pipeline-evidence.png`처럼 새로 디자인한 설명 보드
- 세로형 README 인포그래픽
- 손그림/AI 생성 느낌의 파이프라인 이미지
- 터미널/코드만 크게 보이는 메인 이미지

출력 위치:
- 프로젝트 안에 `portfolio-screenshots/` 폴더를 만들고 PNG로 저장해 주세요.
- `portfolio-screenshots/README.md`에 각 파일의 역할을 `hero`, `proof`, `optional`로 표시해 주세요.

검증:
- 캡처 전에 FastAPI 서버와 데모 UI가 실제로 실행되는지 확인해 주세요.
- 스크린샷에 깨진 이미지, 에러 스택, 비밀 정보가 없어야 합니다.
- README에는 데모/샘플 데이터 사용 여부를 명시해 주세요.
```

## 2. chatbot_rag_app

Use this request in the `chatbot_rag_app` project Codex session.

```text
이 프로젝트는 김택권 포트폴리오의 Flutter 앱 + AI/RAG 클라이언트 근거로 사용됩니다.

중요 방향:
- 메인 이미지는 앱 사용 경험이 한눈에 들어와야 합니다.
- 백엔드 구조 설명보다 Flutter 앱에서 사용자가 질문하고 답변을 받는 화면이 우선입니다.
- 디자인용 가짜 화면을 새로 만들지 말고 현재 앱에서 캡처해 주세요.

필요 산출물:

1. `chatbot-rag-app-hero-chat.png`
   - 가장 중요한 메인 이미지입니다.
   - Flutter 앱에서 질문 입력, 응답, 추천 결과가 한 화면에 보이게 캡처해 주세요.
   - 관광지 추천/여행 상담/RAG 답변 맥락이 바로 보여야 합니다.

2. `chatbot-rag-app-home.png`
   - 앱 첫 화면 또는 주요 진입 화면입니다.
   - 앱의 용도와 톤이 보이면 좋습니다.

3. `chatbot-rag-app-result-detail.png`
   - 추천 결과, 장소 정보, 답변 상세, 출처/근거 등 앱의 가치를 보여주는 화면입니다.
   - 해당 화면이 없다면 가장 정보량이 많은 응답 화면으로 대체해 주세요.

선택 산출물:

4. `chatbot-rag-app-state.png`
   - 로딩, 오프라인, 오류, 빈 상태 등 앱 완성도를 보여주는 화면이 있으면 캡처해 주세요.

출력 위치:
- 프로젝트 안에 `portfolio-screenshots/` 폴더를 만들고 PNG로 저장해 주세요.
- `portfolio-screenshots/README.md`에 캡처 환경을 적어 주세요.

검증:
- 실제 Flutter 앱 화면에서 캡처해 주세요.
- Android/iOS/Flutter web 중 실행 가능한 환경을 사용하되, 어떤 환경인지 README에 기록해 주세요.
- 개인 위치 정보, 개인 계정 정보, 비밀키가 보이면 안 됩니다.
```

## 3. Rummi Poker

Use this request in the `rummipoker` project Codex session.

```text
이 프로젝트는 김택권 포트폴리오의 Flutter/Flame 기반 게임 및 BIC 출품 근거로 사용됩니다.

중요 방향:
- 메인 이미지는 실제 게임플레이가 한눈에 들어와야 합니다.
- BIC 출품은 링크 근거만 사용하며, 선정/수상/전시처럼 검증되지 않은 표현은 만들지 마세요.
- 메뉴 화면보다 플레이 화면이 우선입니다.

필요 산출물:

1. `rummi-poker-hero-gameplay.png`
   - 가장 중요한 메인 이미지입니다.
   - 카드, 보드, 플레이 상태가 잘 보이는 실제 게임플레이 화면을 캡처해 주세요.
   - 가능하면 16:9 화면으로 캡처해 주세요.

2. `rummi-poker-title-or-menu.png`
   - 타이틀, 메인 메뉴, 시작 화면 중 하나입니다.
   - 게임의 이름과 분위기 확인용 보조 이미지입니다.

3. `rummi-poker-system-or-result.png`
   - 덱빌딩, 보상 선택, 결과, 업그레이드 등 게임 구조가 드러나는 화면입니다.
   - 해당 화면이 없다면 다른 플레이 장면으로 대체해 주세요.

선택 산출물:

4. `rummi-poker-web-build-proof.png`
   - `https://cheng80.myqnapcloud.com/rummipoker/`에서 플레이 가능한 Web build가 로드된 브라우저 화면입니다.
   - 브라우저 주소창은 playable web 근거가 필요할 때만 포함하세요.

출력 위치:
- 프로젝트 안에 `portfolio-screenshots/` 폴더를 만들고 PNG로 저장해 주세요.
- `portfolio-screenshots/README.md`에 각 파일의 역할을 `hero`, `proof`, `optional`로 표시해 주세요.

검증:
- 실제 게임 빌드에서 캡처해 주세요.
- 디버그 오버레이, FPS 카운터, 콘솔 에러, 깨진 에셋이 보이면 안 됩니다.
```

## Portfolio Integration Notes

After screenshots are produced, copy approved files into:

- `/Users/cheng80/Desktop/codex_portfolio_handoff_package/web-starter/assets/projects/chatbot-rag/`
- `/Users/cheng80/Desktop/codex_portfolio_handoff_package/web-starter/assets/projects/chatbot-rag-app/`
- `/Users/cheng80/Desktop/codex_portfolio_handoff_package/web-starter/assets/projects/rummi-poker/`

Recommended portfolio usage:

- Slide 4 main visual: `chatbot-rag-app-hero-chat.png` or `chatbot-rag-hero-response.png`
- Slide 4 proof strip: `chatbot-rag-proof-api.png` and `chatbot-rag-proof-response-json.png`
- Slide 4 evidence rail: Rummi Poker remains secondary Flutter/Flame evidence.
- Slide 10 main visual: `rummi-poker-hero-gameplay.png`

Caption rules:

- Use factual, source-bounded captions only:
  - `AI/RAG current project evidence`
  - `Flutter client`
  - `FastAPI / RAG backend`
  - `Tourism chat response demo`
  - `Flutter/Flame gameplay`
  - `BIC submission evidence`
  - `Playable Web build`
- Do not claim production traffic, user count, award, selection, exhibition, or operational performance unless a separate source proves it.
