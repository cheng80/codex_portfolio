# Design System: 김택권 개발 포트폴리오 정적 웹사이트

**Primary Source:** `docs/김택권 포트폴리오.pdf`  
**Output Format:** Editable static HTML/CSS 16:9 horizontal document  
**Design Method:** Huashu Design reference exploration + PDF-first content reconstruction

## 1. Design Goal

이 포트폴리오는 창의적인 개인 브랜딩 사이트보다 **PPT로 변환 가능한 16:9 가로 문서형 포트폴리오**에 가깝다. 원본 PDF의 정보 신뢰도를 보존하면서, 각 페이지가 하나의 발표/제출용 슬라이드처럼 독립적으로 읽히게 만든다.

핵심 목표는 다음 세 가지다.

- PDF의 연락처, 경력, 기술 스택, 프로젝트명, 출시 상태, 링크를 임의로 바꾸지 않는다.
- 모든 문구는 HTML 텍스트로 유지해 사용자가 직접 수정할 수 있게 한다.
- 프로젝트가 많은 포트폴리오이므로 장식보다 스캔성, 정보 위계, 슬라이드 간 일관성을 우선한다.

## 2. Reference Findings

최근 개발자 포트폴리오 레퍼런스와 포트폴리오 큐레이션 자료를 확인한 결과, 이 프로젝트에 적합한 방향은 다음과 같다.

- 프로젝트 수가 많을수록 영상 배경, 3D 장식, 과한 인터랙션보다 **명확한 프로젝트 카드와 섹션 구조**가 유리하다.
- 실무 개발자 포트폴리오는 3-6개의 대표 프로젝트를 깊게 보여주고, 나머지는 아카이브로 정리하는 패턴이 자주 권장된다.
- 한국어 포트폴리오에서는 이름을 과하게 키운 브랜딩보다 경력 요약, 기술 스택, 앱 출시 링크, 회사 프로젝트를 슬라이드 단위로 빠르게 확인할 수 있는 구성이 더 자연스럽다.
- 현재 패키지의 이전 contact sheet는 카드형 흐름과 섹션 분리 방식은 참고할 수 있지만, 최종 페이지를 이미지화하거나 QR/스크린샷 중심으로 고정하지 않는다.

Reference sources:

- [Colorlib - Developer Portfolio Examples 2026](https://colorlib.com/wp/developer-portfolios/)
- [Portfolio Gallery - Developer Portfolios](https://www.portfoliogallery.dev/)
- [Portfolio Studio - Best Developer Portfolio Examples](https://portfoliostudio.dev/blog/best-developer-portfolio-examples/)
- [Site Builder Report - Software Engineer Portfolios](https://www.sitebuilderreport.com/inspiration/software-engineer-portfolios)
- [Creative Bloq - Portfolio Examples](https://www.creativebloq.com/portfolios/examples-712368)

## 3. Visual Theme & Atmosphere

분위기는 **calm technical document, Korean developer resume, restrained case-study index**를 조합한다.

시각적 인상:

- 차분하고 신뢰감 있는 문서형 레이아웃
- 흰색에 가까운 배경과 얇은 선으로 정리된 섹션
- 프로젝트별 포인트 컬러는 쓰되 좌측 바나 작은 배지 수준으로 제한
- 이름보다 경력, 앱 출시, Unity 프로젝트, 하드웨어 연동 같은 검증 가능한 정보를 앞세움
- AI 생성 이미지나 장식 일러스트 없이 텍스트, 선, 배지, 아이콘만으로 구성
- 카드뉴스처럼 반복되는 큰 박스, 강한 그림자, 과한 둥근 모서리를 피함

피해야 할 인상:

- 랜딩페이지식 거대한 영문 이름
- 히어로 우측의 AI 생성 데스크/노트북 이미지
- PPT 페이지 전체를 캡처한 듯한 고정 이미지형 구성
- 앱 스크린샷을 본문 텍스트보다 크게 밀어붙이는 홍보물 톤
- 모든 섹션을 카드로 감싸는 인포그래픽 톤

## 4. Color Palette & Roles

### Core Colors

- **Warm Off-White Canvas (`#f6f3ed`)**  
  전체 페이지 배경. 순백보다 눈부심이 덜하고 PDF 문서 느낌을 유지한다.

- **Paper White (`#fffefa`)**  
  카드와 본문 컨테이너 배경. 배경과 살짝 분리되지만 과한 대비를 만들지 않는다.

- **Deep Portfolio Navy (`#14213d`)**  
  제목, 주요 텍스트, 헤더 브랜드에 사용한다. 개발자 문서의 신뢰감과 한국식 포트폴리오 톤을 만든다.

- **Readable Ink (`#263041`)**  
  본문 텍스트. 긴 한국어 문장을 읽기 좋게 한다.

- **Muted Slate (`#667085`)**  
  기간, 보조 설명, 메타 정보에 사용한다.

- **Quiet Line (`#dde3ec`)**  
  카드 경계, 구분선, 타임라인 선에 사용한다.

### Accent Colors

- **Project Blue (`#2f6fd6`)**  
  기본 링크, Hero 배지, 앱 프로젝트 강조.

- **Unity Green (`#0f8f7a`)**  
  Unity/하드웨어/실시간 연동 성격의 섹션 포인트.

- **App Amber (`#d97706`)**  
  TagDo, 출시 링크, 알림/생산성 계열 포인트.

- **Health Violet (`#6d5dfc`)**  
  GlucoInsight처럼 ML/건강관리 앱의 보조 포인트.

색 사용 원칙:

- 한 섹션 안에서 포인트 컬러는 1개만 우선한다.
- 카드 배경을 컬러로 채우지 말고, 좌측 바·배지·링크 상태에만 사용한다.
- 전체 화면이 파랑/남색 단일 팔레트처럼 보이지 않도록 teal, amber, violet을 제한적으로 섞는다.

## 5. Typography Rules

기본 폰트는 시스템 한글 산세리프를 사용한다.

```css
font-family: Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans KR", sans-serif;
```

타이포그래피 원칙:

- Hero의 `김택권`은 크지만 과시적이지 않게 유지한다.
- 영문 이름 `KIM TAEK KWON`은 보조 표기로만 사용한다.
- 섹션 제목은 32-42px 범위에서 유지하고, 카드 내부 제목은 18-24px로 제한한다.
- 한국어 본문은 줄간격 1.65 안팎으로 읽기 쉽게 한다.
- 글자 간격은 기본값을 유지하고, 영문 보조 표기와 eyebrow에만 약한 대문자 트래킹을 사용한다.
- 모바일에서는 제목 크기를 줄이고, 버튼/링크 안의 텍스트가 줄바꿈되어도 깨지지 않게 한다.

## 6. Layout Principles

전체 구조는 세로로 이어진 16:9 슬라이드 문서다. 반응형 웹사이트가 아니라 PPT 변환을 고려한 고정 비율 문서로 만든다.

권장 섹션 순서:

1. Hero / Cover
2. Career Summary / Tech Stack
3. App Projects Overview
4. TagDo
5. HabitCell
6. GlucoInsight
7. SyncFlow
8. 순서대로 탭탭
9. Company Works - 그로비교육
10. Company Works - 천재교육 / 천재교과서
11. Hardware / IoT
12. Archive / Links

레이아웃 규칙:

- 각 슬라이드는 16:9 비율을 유지한다.
- 화면 기준 최대 폭은 1440-1600px로 두고, 한 장 안에서 모든 내용이 들어가게 한다.
- Hero는 좌측 신원/연락처, 우측 요약 지표 구조로 둔다.
- 앱 프로젝트는 개요 슬라이드와 개별 프로젝트 슬라이드로 분리한다.
- 회사 프로젝트는 회사별로 슬라이드를 나눠 한 장에 너무 많은 카드가 쌓이지 않게 한다.
- Archive와 Links는 마지막 슬라이드에 압축한다.
- 모바일 반응형은 고려하지 않는다. 단, 브라우저 폭이 작을 때 전체 슬라이드가 축소되어 보이는 것은 허용한다.

## 7. Component Styling

### Header

- 상단 고정 또는 sticky header를 사용한다.
- 반투명 배경과 얇은 하단 라인으로 문서 위에 얹힌 느낌을 만든다.
- 네비게이션 항목은 5개 이하로 제한한다.

### Hero

- 좌측에는 이름, 한 줄 소개, 연락처를 둔다.
- 우측에는 숫자형 요약 카드 4개를 둔다.
- 히어로 이미지나 인물 일러스트는 사용하지 않는다.

### Containers / Rows

- 기본 섹션은 카드가 아니라 넓은 문서 행으로 둔다.
- 모서리는 0-8px 범위로 낮춘다.
- 그림자는 기본적으로 사용하지 않는다.
- 카드 구분은 border-top, 얇은 divider, grid alignment로 해결한다.
- 반복 프로젝트는 `case-study row`처럼 제목/요약/기능/링크 열을 맞춘다.
- 큰 흰색 박스가 연속적으로 쌓여 카드뉴스처럼 보이면 실패로 본다.

### Buttons / Links

- 외부 링크는 pill 버튼보다 작은 텍스트형 링크 카드로 정리한다.
- 링크 텍스트는 `Google Play`, `App Store`, `GitHub`, `영상 보기`처럼 짧고 직접적으로 쓴다.
- 출시 준비중, 심사중 같은 상태는 링크와 구분되는 muted badge로 표시한다.

### Lists

- 기능 설명은 PDF의 항목명을 보존한다.
- 리스트는 6-8개를 넘을 수 있으므로 line-height와 간격을 넉넉히 둔다.
- 모바일에서 리스트가 너무 긴 카드가 되더라도 텍스트가 잘리지 않게 한다.

## 8. Content Rules

모든 데이터의 원천은 원본 PDF다.

PDF에서 확인된 값:

- 이름: 김택권
- 전화번호: 010-2626-2131
- 이메일: cheng80@naver.com
- GitHub: https://github.com/cheng80
- 총 모바일 개발 경력: 14년 이상
- 그로비교육: 2022.04 - 2024.02
- 천재교육 / 천재교과서: 2016.01 - 2022.04
- 기타 경력: 2008 - 2016

문구 작성 규칙:

- PDF에 없는 성과 수치, 다운로드 수, 매출, 테스트 결과를 만들지 않는다.
- PDF에 있는 오탈자는 사용자에게 더 자연스럽게 보이도록 최소 교정할 수 있지만, 의미는 바꾸지 않는다.
- HabitCell의 PDF 제목에는 TagDo 설명과 혼선이 있으므로, 기능 설명과 목차에 있는 `일별 기록, 히트맵, Streak 분석`을 우선한다.
- GlucoInsight와 SyncFlow의 출시 상태는 PDF 표현 그대로 `출시 준비중`, `심사중` 범위에서만 표시한다.
- 외부 링크는 PDF에 있는 URL만 사용한다.

## 9. Responsive & Print Rules

반응형:

- 반응형 레이아웃 전환은 만들지 않는다.
- 모든 슬라이드는 동일한 16:9 비율과 내부 여백 체계를 유지한다.
- 작은 화면에서는 브라우저 확대/축소 또는 CSS `aspect-ratio`에 의해 축소된 한 장으로 보이면 된다.

Print:

- 배경색을 흰색으로 바꾼다.
- Header sticky 효과와 그림자를 제거한다.
- 카드 그림자를 제거하고 border 중심으로 출력한다.
- 링크 URL은 인쇄 시 보이도록 처리한다.
- 큰 섹션 카드가 페이지 중간에서 어색하게 잘리지 않도록 `break-inside: avoid`를 적용한다.

## 10. Implementation Checklist

- `web-starter/index.html`은 정적 HTML 본문만 담당한다.
- `web-starter/styles.css`는 모든 시각 스타일과 print CSS를 담당한다.
- React, Vite, TypeScript는 이번 정적 산출물의 필수 조건이 아니다.
- 이미지 사용은 앱 스크린샷, QR, 외부 로고가 확보될 때만 허용한다.
- 현재 단계에서는 PDF에서 추출한 기존 앱/회사 프로젝트 이미지를 재사용한다.
- 기술 스택 아이콘은 이모지가 아니라 `icoziv` SVG 기술 아이콘을 로컬 저장해 사용한다.
- 구현 후 브라우저에서 데스크톱과 모바일 폭을 확인한다.
