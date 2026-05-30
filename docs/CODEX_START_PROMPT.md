# Codex 시작 프롬프트

이 프로젝트는 기존 PDF 개발 포트폴리오를 기반으로 **수정 가능한 웹 포트폴리오**를 제작하는 작업이다.

## 절대 조건

- 이미지 생성 기반 완성 페이지 금지
- PPTX처럼 페이지 전체를 이미지로 넣는 방식 금지
- 모든 문구는 수정 가능한 HTML/React 텍스트로 작성
- 카드, 섹션, 버튼, 태그는 CSS/React 컴포넌트로 작성
- 아이콘은 `lucide-react` 또는 SVG 컴포넌트 사용
- 앱 스크린샷, QR, 외부 로고만 이미지 사용 가능
- 원본 PDF와 `portfolio-data.json`의 데이터를 우선 사용
- 연락처는 원본 PDF 기준값을 우선 사용하되 최종 사용 전 사용자 확인 TODO로 남길 것

## 입력 자료

- 원본 PDF: `assets/source/current_portfolio.pdf`
- 데이터 초안: `web-starter/src/data/portfolio-data.json`
- 작업 지시서: `docs/CODEX_PORTFOLIO_WEB_REDESIGN.md`
- 리소스 매니페스트: `docs/RESOURCE_MANIFEST.md`

## 목표 산출물

Vite + React + TypeScript 기반 웹 포트폴리오를 만든다.

권장 구조:

```txt
portfolio-web/
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── CareerTimeline.tsx
│   │   ├── TechStack.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── CompanyWorks.tsx
│   │   └── ContactLinks.tsx
│   ├── data/
│   │   ├── profile.ts
│   │   ├── career.ts
│   │   ├── techStack.ts
│   │   └── projects.ts
│   ├── styles/
│   │   └── global.css
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── README.md
```

## 페이지 구성

1. Hero / Cover
2. Career Summary
3. Tech Stack
4. Featured Personal Projects
5. chatbot_rag 상세
6. TagDo 상세
7. HabitCell 상세
8. GlucoInsight 상세
9. SyncFlow 상세
10. 순서대로 TapTap 상세
11. Company Works — 그로비교육
12. Company Works — 천재교육 / 천재교과서
13. Hardware / IoT
14. Archive Works
15. Links / Contact

## 디자인 방향

- 한국식 개발 포트폴리오 톤
- 이름을 과하게 부각하지 말 것
- 영문 이름 `KIM TAEK KWON`은 보조 표기
- 연도 고정 배지 사용 금지
- 우측에 AI 생성 티가 강한 장식 이미지 사용 금지
- off-white 배경, navy/blue/teal 포인트, 카드형 섹션
- 여백 넉넉하게, 카드 내부 텍스트 넘침 방지
- 반응형 지원
- print CSS 포함

먼저 정적 페이지를 구현하고, 브라우저 미리보기로 확인 가능한 상태까지 만든다.
