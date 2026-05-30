# 리소스 매니페스트

이 패키지 안의 경로는 모두 **ZIP 압축 해제 후 상대 경로** 기준입니다. `/mnt/data/...` 경로를 Codex에 그대로 전달하지 마세요.

## 원본 자료

- `assets/source/current_portfolio.pdf`  
  기존 포트폴리오 원본 PDF입니다. 경력, 기술 스택, 프로젝트 순서, 연락처 검증의 기준 자료입니다.

## 작업 지시서

- `docs/CODEX_PORTFOLIO_WEB_REDESIGN.md`  
  지금까지 정리된 최종 제작 방향과 Codex 작업 지시서입니다.

- `docs/CODEX_START_PROMPT.md`  
  Codex에 그대로 붙여넣기 좋은 시작 프롬프트입니다.

- `docs/RESOURCE_MANIFEST.md`  
  현재 파일입니다. 리소스 위치와 사용 기준을 설명합니다.

## 데이터 초안

- `web-starter/src/data/portfolio-data.json`  
  포트폴리오에 들어갈 경력, 기술 스택, 개인 프로젝트, 회사 프로젝트 데이터 초안입니다.  
  Codex에서는 이 데이터를 `src/data/*.ts`로 분리하거나 그대로 import해서 사용하면 됩니다.

## 웹 초안

- `web-starter/index.html`  
  정적 HTML/CSS 미리보기 초안입니다. Vite/React로 옮기기 전 레이아웃 기준으로 사용할 수 있습니다.

## 참고 이미지

- `assets/reference/reference_previous_contact_sheet.png`  
  이전 인포그래픽 시안 미리보기입니다. 최종 사용 금지, 레이아웃 참고용입니다.

- `assets/reference/reference_bad_ai_generated_cover.png`  
  이미지 생성 기반 표지 실패 사례입니다. 최종 사용 금지입니다.

- `assets/reference/reference_bad_all_pages_image.png`  
  전체 페이지를 이미지 한 장으로 생성했던 실패 사례입니다. 최종 사용 금지입니다.

## 아이콘 정책

- 일반 UI 아이콘: `lucide-react` 우선
- 브랜드/기술 로고: `simple-icons`, `svgl`, `lobe-icons` 계열 참고
- 모든 텍스트는 HTML/React 텍스트로 유지
- 앱 스크린샷, QR, 로고만 이미지 허용

## 연락처 주의

원본 PDF 기준:

- 전화번호: `010-2626-2131`
- 이메일: `cheng80@naver.com`
- GitHub: `https://github.com/cheng80`

이전 생성물에 섞인 아래 값은 사용자 확인 전까지 사용하지 마세요.

- `010-7607-3131`
- `tk0311@naver.com`
