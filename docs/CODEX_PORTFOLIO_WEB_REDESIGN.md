# Codex 작업 지시서 — 김택권 개발 포트폴리오 웹페이지 리디자인

> 목적: 기존 PDF 포트폴리오를 기반으로, **수정 가능한 웹페이지형 개발 포트폴리오**를 제작한다.  
> 최종 방향은 이미지 생성/PPTX가 아니라 **HTML/CSS/React 기반 카드형 웹페이지**다.  
> 모든 프로젝트명, 경력, 연락처, 링크, 기술 스택은 코드와 데이터 파일에서 직접 수정 가능해야 한다.

---

## 0. 현재 결론

기존 시도에서 확인된 문제:

1. **이미지 생성 기반 포트폴리오**
   - 장점: 순간적인 비주얼 퀄리티는 좋아 보임
   - 문제: 텍스트·연락처·프로젝트 정보가 임의로 바뀜
   - 문제: 사용자가 직접 수정하기 어려움
   - 결론: 완성 페이지 생성 용도로 사용하지 않음

2. **PPTX 기반 포트폴리오**
   - 장점: 형식상 편집 가능
   - 문제: 실제로 예쁘게 만들려면 이미지화되는 경우가 많음
   - 문제: 완전히 편집 가능한 도형/텍스트 기반으로 만들면 디자인 한계가 큼
   - 결론: 최종 산출물로 부적합

3. **HTML/CSS 기반 웹페이지 포트폴리오**
   - 장점: 텍스트/카드/아이콘/섹션을 전부 수정 가능
   - 장점: SVG 아이콘, 앱 스크린샷, QR, 링크를 자유롭게 배치 가능
   - 장점: 브라우저에서 실시간 미리보기 가능
   - 장점: 필요 시 PDF 출력도 가능
   - 결론: 최종 제작 방향으로 채택

---

## 1. 제작 목표

### 최종 산출물

- `Vite + React + TypeScript` 기반 웹 포트폴리오
- 카드형 섹션 중심의 단일 페이지 또는 섹션형 랜딩 페이지
- 모든 데이터는 별도 `data` 파일에서 관리
- 모든 텍스트는 수정 가능해야 함
- SVG 아이콘 적극 사용
- 이미지 생성물은 사용하지 않거나, 아주 약한 배경 패턴 수준으로만 제한
- 브라우저 미리보기 가능
- 출력용 CSS 포함

### 추천 프로젝트명

```txt
portfolio-web
```

### 추천 기술 스택

```txt
Vite
React
TypeScript
CSS Modules 또는 Tailwind CSS
lucide-react
simple-icons 또는 직접 저장한 SVG 브랜드 아이콘
```

`lucide`는 Feather Icons에서 파생된 일관된 오픈소스 아이콘 툴킷이고, GitHub의 `svg-icons` TypeScript 토픽에서도 상위 후보로 확인된다. `react-icons`, `svgl`, `boxicons`, `lobe-icons` 등도 참고 후보로 둘 수 있다.

---

## 2. 절대 지켜야 할 원칙

### 금지

- 페이지 전체를 이미지 한 장으로 제작 금지
- 이미지 생성 결과를 포트폴리오 본문으로 사용 금지
- 임의 연락처/임의 경력/임의 프로젝트 설명 생성 금지
- 확인되지 않은 수치, 테스트 결과, 출시 상태 단정 금지
- 한국식 포트폴리오에 맞지 않게 표지에서 영문 이름을 과도하게 키우지 말 것
- 표지 상단에 연도 고정 표시하지 말 것
- AI가 만든 티가 강한 책상/노트북/화분 같은 장식 이미지 사용 금지

### 필수

- 모든 문구는 사용자가 직접 수정 가능한 텍스트여야 함
- 프로젝트 데이터는 `src/data/projects.ts` 같은 별도 데이터 파일로 관리
- 연락처/이메일/GitHub 주소는 반드시 원본 PDF 기준 또는 사용자 확인값 기준으로 관리
- 아이콘은 가능하면 SVG 컴포넌트 또는 SVG 파일로 관리
- 앱 스크린샷, QR, 외부 로고만 이미지로 허용
- 카드 내부 텍스트가 넘치지 않도록 반응형/줄바꿈/최대폭 설계
- PDF 출력 시 잘리지 않도록 `@media print` 또는 별도 print layout 고려

---

## 3. 원본 자료와 리소스 경로

아래 경로는 현재 ChatGPT 작업 환경 기준이다. Codex 프로젝트로 옮길 때는 `docs/source/`, `assets/`, `public/` 아래로 복사해서 사용한다.

### 3.1 원본 PDF

현재 업로드된 원본 포트폴리오 PDF:

```txt
/mnt/data/김택권 포트폴리오(1).pdf
```

Codex 프로젝트 내 권장 복사 위치:

```txt
docs/source/current_portfolio.pdf
```

원본 PDF 기준 주요 내용:

- 표지: Developer Portfolio, 김택권, 연락처, 이메일
- 경력 요약
- 기술 스택
- 앱스토어 등록 프로젝트
  - TagDo
  - HabitCell
  - GlucoInsight
  - SyncFlow
- Flutter Flame 게임
  - 순서대로 TapTap
- 회사 프로젝트
  - 그로비교육 Unity 프로젝트
  - 천재교육/천재교과서 Unity 프로젝트
- 하드웨어 연동
- 2016년 이전 프로젝트
- 앱 스크린샷 및 영상, Git 저장소 링크

### 3.2 참고용으로만 남길 이전 생성물

아래 파일들은 최종 결과물로 사용하지 않는다.  
디자인 방향 검토, 실패 사례 확인, 레이아웃 참고용으로만 둔다.

```txt
/mnt/data/portfolio_infographic_real_content/kim_taek_kwon_portfolio_infographic.pdf
/mnt/data/portfolio_infographic_real_content/preview_contact_sheet.png
/mnt/data/portfolio_infographic_real_content/kim_taek_kwon_portfolio_infographic_pages.zip
/mnt/data/kim_taek_kwon_editable_cover_sample.pptx
/mnt/data/a_wide_layout_image_showing_a_multi_page_portfolio.png
/mnt/data/a_clean_multi_page_portfolio_layout_screenshot_i.png
/mnt/data/a_clean_minimalist_professional_portfolio_presenta.png
/mnt/data/a_clean_professional_powerpoint_portfolio_cover_l.png
/mnt/data/a_clean_professional_multi_page_portfolio_layout.png
```

주의:

- 위 파일들에는 실제 PDF와 맞지 않는 연락처/문구/프로젝트 설명이 포함될 수 있음
- 그대로 복사하지 말고, 반드시 원본 PDF와 아래 데이터 정리 내용을 기준으로 재작성할 것

### 3.3 현재 HTML/CSS 초안

ChatGPT 캔버스에 `portfolio_web_cards_editable_html`이라는 HTML/CSS 초안을 작성했다.  
Codex에서는 그대로 복사하기보다 아래 구조로 React 컴포넌트화하는 것을 권장한다.

권장 변환 위치:

```txt
src/pages/PortfolioPage.tsx
src/components/SectionHeader.tsx
src/components/ProjectCard.tsx
src/components/DetailCard.tsx
src/components/TechCard.tsx
src/data/profile.ts
src/data/projects.ts
src/data/career.ts
src/data/techStack.ts
src/styles/global.css
```

---

## 4. 연락처/개인정보 확인 필요

원본 PDF와 이전 생성물 사이에 연락처가 다르게 나온 적이 있으므로 반드시 확인한다.

### 원본 PDF에서 확인된 값

```txt
이름: 김택권
영문 이름: KIM TAEK KWON
전화번호: 010-2626-2131
이메일: cheng80@naver.com
GitHub: github.com/cheng80
```

### 이전 생성물에 잘못 섞였던 값

```txt
전화번호: 010-7607-3131
이메일: tk0311@naver.com
```

위 두 값은 원본 PDF와 다르므로, 사용자가 별도 확인하기 전까지 최종 데이터로 사용하지 않는다.

---

## 5. 전체 정보 구조

웹페이지는 다음 순서로 구성한다.

```txt
01 Hero / Cover
02 Career Summary
03 Tech Stack
04 Featured Personal Projects
05 chatbot_rag 상세
06 TagDo 상세
07 HabitCell 상세
08 GlucoInsight 상세
09 SyncFlow 상세
10 순서대로 TapTap 상세
11 Company Works — 그로비교육
12 Company Works — 천재교육 / 천재교과서
13 Hardware / IoT
14 Archive Works
15 Links / Contact
```

웹페이지에서는 번호를 반드시 크게 보여줄 필요는 없다.  
PPT 페이지처럼 나누지 말고, 섹션형 랜딩 페이지로 자연스럽게 스크롤되도록 구성한다.

---

## 6. 표지 / Hero 방향

### 방향

- 한국식 개발 포트폴리오 느낌
- 이름을 과도하게 부각하지 않음
- 영문 이름은 보조 표기
- 연도 고정 표시 없음
- 우측에 AI 티가 강한 생성 이미지 사용하지 않음
- 텍스트, 카드, 아이콘 중심

### 권장 문구

```txt
DEVELOPER PORTFOLIO

김택권
KIM TAEK KWON

사용자 경험을 설계하고, 기술로 문제를 해결하는 개발자

14년 이상의 모바일·게임·앱 개발 경험을 기반으로 Flutter, Unity, FastAPI, AI/RAG, IoT 연동 프로젝트를 수행해왔습니다.
앱 기획부터 구현, 출시, 운영까지 전체 흐름을 경험했습니다.
```

### Hero 카드에 넣을 핵심 영역

```txt
Mobile App
Flutter, Dart, Riverpod, Hive, SQLite

Game / Interactive
Unity, C#, Flame, 교육 콘텐츠, 미니게임

Backend / API
FastAPI, REST API, WebSocket, MySQL

AI / Data
RAG, ChromaDB, Ollama, scikit-learn

IoT / Hardware
Arduino, ESP32, MQTT, Serial 통신
```

---

## 7. 경력 요약 데이터

원본 PDF 기준.

```ts
export const career = [
  {
    period: "2022.04 – 2024.02",
    company: "그로비교육",
    role: "태블릿 기반 교육 콘텐츠 개발 및 운영",
    bullets: [
      "태블릿 기반 교육 콘텐츠 개발 및 운영",
      "개발 프로세스 구축 및 팀 운영",
      "Unity 기반 교육 콘텐츠 개발"
    ]
  },
  {
    period: "2016.01 – 2022.04",
    company: "천재교육 / 천재교과서",
    role: "모바일 클라이언트 개발",
    bullets: [
      "모바일 클라이언트 개발",
      "교육용 앱 및 게임 다수 제작·출시·유지보수",
      "Unity 기반 콘텐츠 개발"
    ]
  },
  {
    period: "2008 – 2016",
    company: "기타 경력",
    role: "모바일·게임·웹 클라이언트 개발",
    bullets: [
      "모바일 앱 및 게임 개발",
      "멀티플랫폼 기반 콘텐츠 제작",
      "Lua, ActionScript 기반 개발 경험"
    ]
  }
];
```

추가 표시:

```txt
총 모바일 개발 경력 14년 이상
현재 Flutter 기반 개인 앱 및 AI/RAG 프로젝트 확장 중
```

---

## 8. 기술 스택 데이터

원본 PDF 기준 + 최근 프로젝트 반영.

```ts
export const techStack = [
  {
    category: "모바일 개발",
    items: ["Flutter", "Flame", "Android", "iOS", "Unity"]
  },
  {
    category: "형상 관리 및 협업",
    items: ["Git", "Slack"]
  },
  {
    category: "아키텍처 / 상태 관리",
    items: ["MVVM", "Riverpod", "Provider", "GoRouter"]
  },
  {
    category: "데이터베이스",
    items: ["Hive", "SQLite", "MySQL", "Firebase", "ChromaDB"]
  },
  {
    category: "프로그래밍 언어",
    items: ["Dart", "C#", "Python", "Lua", "Swift"]
  },
  {
    category: "서버 및 통신",
    items: ["REST API", "FastAPI", "FCM", "MQTT", "WebSocket"]
  },
  {
    category: "AI / Data",
    items: ["RAG", "Ollama", "scikit-learn", "Pandas"]
  },
  {
    category: "임베디드 및 IoT",
    items: ["Arduino", "ESP32", "Raspberry Pi", "Pico", "Serial"]
  }
];
```

---

## 9. 개인 프로젝트 정리 방식

개인 프로젝트는 `Problem / Solution / My Role` 구조를 억지로 쓰지 않는다.  
다음 구조를 사용한다.

```txt
프로젝트명
한 줄 정의

앱/프로젝트 개요
직접 구현한 범위
주요 기능
기술 포인트
현재 상태
링크
```

---

## 10. 개인 프로젝트 데이터 초안

### 10.1 chatbot_rag

```txt
프로젝트명: chatbot_rag
한 줄 정의: TourAPI live 조회와 ChromaDB RAG fallback을 결합한 로컬 관광 추천 챗봇

프로젝트 개요:
한국관광공사 OpenAPI와 로컬 RAG 자료를 함께 사용해, 사용자의 지역·동행자·접근성 조건에 맞는 관광지를 추천하는 챗봇입니다.

직접 구현한 범위:
- FastAPI 서버
- TourAPI 연동
- ChromaDB 벡터 검색
- SQLite / Markdown 캐시
- fallback 응답 구조
- 로컬 LLM 연동 실험
- 평가 질문셋 기반 테스트

주요 기능:
- 지역/동행자/접근성 조건 기반 질문 처리
- TourAPI live_update 조회
- API 실패 시 cache/RAG/raw fallback
- 관광지 추천 카드 생성
- 로컬 LLM 기반 답변 보조
- 자동 평가 질문셋 구성

기술 포인트:
- FastAPI 기반 챗봇 API
- ChromaDB 벡터 검색
- TourAPI + RAG 하이브리드 구조
- SQLite 캐시 및 Markdown 캐시
- Ollama 기반 로컬 LLM 실험
- 질문셋 기반 회귀 테스트

현재 상태:
- GitHub 공개
- 로컬 실행형 프로토타입
- 개선 진행 중

링크:
https://github.com/cheng80/chatbot_rag
```

### 10.2 TagDo

```txt
프로젝트명: TagDo
한 줄 정의: 태그 기반으로 할 일을 분류하고 관리하는 Flutter Todo 앱

앱 개요:
업무, 개인, 공부 등 여러 맥락의 할 일을 태그로 구분해 관리할 수 있도록 만든 개인 생산성 앱입니다.

직접 구현한 범위:
- Flutter 앱 구조 설계
- Riverpod 상태 관리
- Hive 로컬 저장소
- 태그/필터/검색/정렬 기능
- 로컬 알림
- 다국어
- 스토어 출시

주요 기능:
- 태그별 할 일 분류
- 마감일 및 로컬 알림
- 완료/미완료/태그별 필터
- 실시간 검색
- 드래그 앤 드롭 순서 변경
- 라이트/다크/시스템 테마
- 다국어 지원

기술 포인트:
- Hive 기반 Local-first 데이터 저장
- Riverpod 기반 상태 관리
- Local Notification 예약 및 관리
- 다국어 리소스 구조
- 모바일 스토어 배포 경험

현재 상태:
- Google Play 출시
- App Store 출시
- GitHub 공개

링크:
https://github.com/cheng80/hivetodo
```

### 10.3 HabitCell

```txt
프로젝트명: HabitCell
한 줄 정의: 일별 습관 기록과 히트맵 분석을 제공하는 Flutter 습관 관리 앱

앱 개요:
사용자가 매일의 습관 달성 여부를 기록하고, 히트맵과 Streak 통계를 통해 습관의 지속성을 확인할 수 있도록 만든 개인 습관 추적 앱입니다.

직접 구현한 범위:
- Flutter 앱 개발
- SQLite 로컬 데이터 구조
- Riverpod 상태 관리
- 히트맵/통계 화면
- 카테고리 관리
- 백업/복구 구조
- 다국어
- 스토어 출시

주요 기능:
- 습관 CRUD
- 일별 기록
- 주/월/년/전체 히트맵
- Streak 통계
- 카테고리 커스터마이징
- 백업/복구
- 다국어 및 테마 지원

기술 포인트:
- SQLite 기반 일별 기록 저장
- 히트맵 데이터 시각화
- Riverpod 기반 화면 상태 관리
- Local-first 구조
- FastAPI/MySQL 백업 구조 확장

현재 상태:
- Google Play 출시
- App Store 출시
- GitHub 공개

링크:
https://github.com/cheng80/habitcell
```

주의:

- 기존 PDF의 HabitCell 페이지 제목이 TagDo 설명과 비슷하게 보이는 부분이 있으므로, 웹 버전에서는 반드시 `습관 관리 / 히트맵 / Streak` 중심으로 수정한다.

### 10.4 GlucoInsight

```txt
프로젝트명: GlucoInsight
한 줄 정의: 성인 당뇨 위험도 참고 예측과 병원 찾기를 제공하는 건강관리 앱

앱 개요:
사용자가 기본 건강 정보를 입력하면 당뇨 위험도를 참고용으로 확인하고, 저장된 위치 기준으로 주변 병원 정보를 찾을 수 있도록 만든 Flutter 기반 건강관리 앱입니다.

직접 구현한 범위:
- Flutter 입력 UI
- FastAPI 예측 API
- ML 모델 연동
- 공공데이터 병원 조회
- 카카오 주소 검색
- 지도 앱 연동
- 결과 시각화 화면

주요 기능:
- 기본 정보 기반 당뇨 위험도 참고 예측
- 상세 입력 기반 예측 보강
- 위험도 결과 시각화
- 주소 저장 및 좌표 변환
- 주변 병원 검색
- 외부 지도 앱 길찾기 연동
- 건강 정보 카드 제공

기술 포인트:
- Flutter + FastAPI 구조
- scikit-learn 기반 ML 예측 API
- 공공데이터 API 연동
- 카카오 주소/좌표 API 활용
- 서버 입력 검증 및 결과 시각화

현재 상태:
- 스토어 출시/심사 상태는 최종 확인 필요
- GitHub 공개

링크:
https://github.com/cheng80/ml_diabetes_app
```

### 10.5 SyncFlow

```txt
프로젝트명: SyncFlow
한 줄 정의: 2~5인 소규모 팀을 위한 WebSocket 기반 실시간 칸반 보드 앱

앱 개요:
소규모 팀이 간단한 보드를 만들고, 카드 이동과 수정 내용을 실시간으로 공유할 수 있도록 만든 경량 협업 앱입니다.

직접 구현한 범위:
- Flutter 앱
- FastAPI 백엔드
- WebSocket 실시간 동기화
- MySQL 데이터 구조
- 이메일 인증
- 보드 초대 코드
- FCM 푸시 알림
- Soft Lock 기능

주요 기능:
- 이메일 인증 및 세션 토큰
- 보드/컬럼/카드 관리
- 카드 드래그 이동
- WebSocket 실시간 동기화
- 카드 편집 Soft Lock
- 멤버 초대 코드
- FCM 푸시 알림
- 접속 사용자 아바타 표시

기술 포인트:
- FastAPI REST + WebSocket 병행 구조
- MySQL 기반 협업 데이터 모델
- 카드 이동 이벤트 실시간 브로드캐스트
- 동시 편집 방지를 위한 Soft Lock
- FCM 토큰 저장 및 이벤트 푸시

현재 상태:
- 출시 준비 중
- GitHub 공개

링크:
https://github.com/cheng80/syncflow
```

### 10.6 순서대로 TapTap

```txt
프로젝트명: 순서대로 TapTap
한 줄 정의: Flutter Flame 기반 1 to 50 순발력 퍼즐 게임

앱 개요:
1 to 50 게임룰 기반으로 만들어진 게임앱으로, 무작위로 주어지는 숫자나 알파벳을 빠르게 순서대로 클릭하며 시간 경쟁을 하는 게임입니다.

직접 구현한 범위:
- Flutter 앱 개발
- Flame 게임 구조
- 게임 UI 및 상태 흐름
- 기록/설정 기능
- 웹 데모 구성

주요 기능:
- 숫자/알파벳 순서 클릭 게임
- 시간 기록
- 최고 기록 확인
- 설정 화면
- 웹 실행 데모

기술 포인트:
- Flutter + Flame
- 게임 루프와 UI 오버레이 분리
- 다국어/오디오/저장 기능 확장 가능

현재 상태:
- GitHub 공개
- 웹 데모 제공

링크:
https://github.com/cheng80/taborder
```

---

## 11. 회사 프로젝트 정리 방식

회사 프로젝트는 개인 프로젝트처럼 `전체 직접 구현`으로 표현하지 않는다.  
다음 구조를 사용한다.

```txt
프로젝트명
서비스 개요
담당 영역
구현 내용
기술 포인트
자료 링크
```

### 11.1 그로비교육

```txt
프로젝트 그룹: 그로비교육 Unity 콘텐츠
프로젝트: 마이 슈퍼 브이, 슈퍼브이 브레인, 예술 놀이터

서비스 개요:
태블릿 기반 교육 콘텐츠 및 놀이형 학습 앱입니다.

구현/참여 내용:
- Unity 기반 교육 콘텐츠 개발
- 캐릭터 상호작용 콘텐츠
- 두뇌 인지 영역 게임 콘텐츠
- 그림 그리기, 악기 연주 등 예체능 활동 콘텐츠
- 개발 프로세스 구축 및 운영 참여

기술 포인트:
- Unity
- C#
- UGUI
- 미니게임
- 태블릿 환경 대응
```

### 11.2 천재교육 / 천재교과서

```txt
프로젝트 그룹: 천재교육 / 천재교과서 Unity 프로젝트
프로젝트: 빅키즈, 돌잡이, 칠교탐험대, 코딩토이 마이빅, Live과학, Live한국사

서비스 개요:
책, QR, AR 카드, 교육 교구와 연동되는 교육용 앱 및 게임 시리즈입니다.

구현/참여 내용:
- 모바일 클라이언트 개발
- Unity 기반 교육 앱 및 게임 콘텐츠 제작
- 책 QR 인증 기반 콘텐츠 구성
- 스토리 영상, 스토리 송, 게임 콘텐츠 연동
- 코딩교육용 로봇과 앱 연동 콘텐츠 제작
- AR 콘텐츠 감상 앱 구성

기술 포인트:
- Unity
- C#
- UGUI
- QR 연동
- AR 콘텐츠
- 하드웨어/교구 연동
```

---

## 12. 하드웨어 / IoT 정리

```txt
섹션명: 하드웨어 / IoT 연동

개요:
Unity와 하드웨어를 연동한 프로젝트 경험입니다. 시리얼 통신, 블루투스, MQTT-SSL, ESP32 연동을 통해 센서 정보 모니터링과 양방향 제어를 구현했습니다.

주요 내용:
- Unity + Arduino 시리얼 통신
- 눈치크 컨트롤러 데이터 기반 오브젝트 제어
- Mosquitto 브로커 기반 MQTT-SSL 통신
- Unity에서 ESP32 센서 정보 수신 및 모니터링
- Unity와 ESP32 간 양방향 LED 제어

기술 태그:
Unity, Arduino, ESP32, MQTT, Serial, Mosquitto
```

---

## 13. Archive Works 정리

```txt
섹션명: 2016년 이전 프로젝트

포함 프로젝트:
- 우주게임: 우주좀비 (Unity)
- 생명의 빛 - Touch 바이블 (Lua)
- ATTACK “Z” (Lua)
- Line Pang (Lua)
- 시공미디어 앱북 시리즈 (ActionScript)
- 시사붐붐잉글리쉬 앱북 시리즈 (ActionScript)
- LG 스마트 TV: 시사 잉글리쉬 HB Kids 시리즈 (ActionScript)

표현 방식:
- 상세 설명보다 카드형 아카이브로 묶음
- 오래된 프로젝트임을 명확히 표시
- 다양한 플랫폼 경험의 근거로 활용
```

---

## 14. 아이콘 적용 정책

### 일반 UI 아이콘

사용 후보:

```txt
lucide-react
react-icons
boxicons
phosphor-icons
coreui-icons
```

추천:

```txt
lucide-react
```

이유:

- 선형 아이콘 스타일이 깔끔함
- 포트폴리오 카드 UI와 잘 맞음
- React/TypeScript 프로젝트에 바로 적용 가능
- 아이콘 두께와 크기를 CSS로 통일하기 쉬움

### 브랜드/기술 로고

사용 후보:

```txt
simple-icons
svgl
lobe-icons
thesvg
직접 다운로드한 SVG 로고
```

추천 사용 위치:

```txt
Flutter
Dart
Unity
FastAPI
Python
MySQL
SQLite
Firebase
Git
Docker
Figma
Ollama
ChromaDB
```

주의:

- 브랜드 아이콘은 라이선스 확인
- 외부 CDN 의존보다 `src/assets/icons/`에 SVG로 저장하는 방식 권장
- 색상이 과하게 튀면 단색 처리 또는 muted tone 적용

---

## 15. 권장 폴더 구조

```txt
portfolio-web/
├── docs/
│   ├── source/
│   │   └── current_portfolio.pdf
│   ├── planning/
│   │   └── CODEX_PORTFOLIO_WEB_REDESIGN.md
│   └── notes/
│       ├── data_verification.md
│       └── design_decisions.md
│
├── public/
│   ├── favicon.svg
│   └── og-image.png
│
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   ├── brands/
│   │   │   └── ui/
│   │   ├── screenshots/
│   │   │   ├── tagdo/
│   │   │   ├── habitcell/
│   │   │   ├── glucoinsight/
│   │   │   ├── syncflow/
│   │   │   ├── taborder/
│   │   │   └── company-works/
│   │   └── qr/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Section.tsx
│   │   ├── cards/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── DetailCard.tsx
│   │   │   ├── TechCard.tsx
│   │   │   └── WorkCard.tsx
│   │   └── icons/
│   │       ├── Icon.tsx
│   │       └── BrandIcon.tsx
│   │
│   ├── data/
│   │   ├── profile.ts
│   │   ├── career.ts
│   │   ├── techStack.ts
│   │   ├── projects.ts
│   │   ├── companyWorks.ts
│   │   └── links.ts
│   │
│   ├── pages/
│   │   └── PortfolioPage.tsx
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── tokens.css
│   │   └── print.css
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 16. CSS 디자인 방향

### 컬러

```css
--bg: #f5f2ec;
--paper: #fffdf8;
--ink: #182033;
--muted: #667085;
--line: #d9dee8;
--navy: #12264a;
--blue: #2f6fd6;
--sky: #eaf3ff;
--green: #0f766e;
--orange: #d97706;
--violet: #7c3aed;
```

### 레이아웃

- 최대폭: 1120~1200px
- 배경: off-white 계열
- 카드: 흰색 또는 살짝 따뜻한 흰색
- 라운드: 18~28px
- 그림자: 약하게
- 텍스트 밀도: 기존 PDF보다 줄이고, 카드별 bullet 3~5개로 제한
- 표지: 이름 과도하게 키우지 않음
- 프로젝트: 3열 카드 + 상세 섹션
- 모바일 반응형: 1열 카드

### 피해야 할 디자인

- AI 생성 이미지 느낌 강한 배경
- 과도한 그라데이션
- 큰 영문 이름 타이포
- 지나치게 PPT 템플릿 같은 상단 연도/페이지 고정
- 긴 URL 노출
- 카드 안에 작은 글씨 과다 배치

---

## 17. 구현 단계

### Phase 1 — 프로젝트 생성

```bash
npm create vite@latest portfolio-web -- --template react-ts
cd portfolio-web
npm install
npm install lucide-react
npm run dev
```

아이콘 라이브러리는 1차로 `lucide-react`만 설치한다.  
브랜드 아이콘은 추후 직접 SVG 파일을 `src/assets/icons/brands/` 아래에 저장한다.

### Phase 2 — 데이터 파일 작성

작성 파일:

```txt
src/data/profile.ts
src/data/career.ts
src/data/techStack.ts
src/data/projects.ts
src/data/companyWorks.ts
src/data/links.ts
```

원칙:

- UI 컴포넌트 안에 긴 텍스트를 직접 넣지 않는다.
- 모든 포트폴리오 문구는 data 파일에서 수정 가능하게 한다.

### Phase 3 — 컴포넌트 작성

작성 컴포넌트:

```txt
Header
HeroSection
CareerSection
TechStackSection
FeaturedProjectsSection
ProjectDetailSection
CompanyWorksSection
HardwareSection
ArchiveSection
LinksSection
Footer
```

공통 카드 컴포넌트:

```txt
ProjectCard
DetailCard
TechCard
WorkCard
TagChip
IconBadge
```

### Phase 4 — 디자인 적용

- `tokens.css`에 색상/간격/반경/그림자 정의
- `globals.css`에 전체 레이아웃 적용
- `print.css`에 PDF 출력용 스타일 적용

### Phase 5 — 리소스 연결

초기에는 placeholder card 사용.  
이후 실제 이미지 추가:

```txt
src/assets/screenshots/tagdo/
src/assets/screenshots/habitcell/
src/assets/screenshots/glucoinsight/
src/assets/screenshots/syncflow/
src/assets/screenshots/taborder/
src/assets/screenshots/company-works/
src/assets/qr/
```

### Phase 6 — 검증

확인 항목:

- 모든 연락처가 원본 PDF 또는 사용자 확인값과 일치하는가
- `KIM TAEK KWON` 철자가 정확한가
- 표지에서 이름이 과도하게 부각되지 않는가
- 상단에 연도 고정이 없는가
- AI 생성 이미지 느낌의 장식이 없는가
- 모든 카드 텍스트가 잘리지 않는가
- 모바일에서도 카드가 깨지지 않는가
- print/PDF 출력에서 섹션이 잘리지 않는가
- 앱 출시 상태가 최신인지 확인했는가

---

## 18. 데이터 검증 TODO

아래 항목은 사용자가 최종 확인해야 한다.

```txt
[ ] 전화번호 최종값
[ ] 이메일 최종값
[ ] TagDo Google Play / App Store 현재 상태
[ ] HabitCell Google Play / App Store 현재 상태
[ ] GlucoInsight 출시/심사/준비 상태
[ ] SyncFlow 출시/준비 상태
[ ] 각 GitHub 저장소 공개 여부
[ ] 앱 스크린샷 최신 버전
[ ] QR 코드 사용 여부
[ ] 개인 GitLab 링크를 공개 페이지에 넣을지 여부
```

---

## 19. README에 넣을 설명

```md
# 김택권 개발 포트폴리오 웹페이지

기존 PDF 포트폴리오를 기반으로 제작한 웹페이지형 개발 포트폴리오입니다.

## 목적

- 기존 PDF보다 수정과 유지보수가 쉬운 구조
- 프로젝트별 카드형 구성
- SVG 아이콘과 실제 앱 스크린샷 활용
- 브라우저 미리보기 및 PDF 출력 가능

## 기술 스택

- Vite
- React
- TypeScript
- CSS
- lucide-react

## 실행

```bash
npm install
npm run dev
```

## 구조

- `src/data`: 포트폴리오 텍스트 데이터
- `src/components`: 카드/섹션 UI 컴포넌트
- `src/assets`: 아이콘, 스크린샷, QR
- `src/styles`: 공통 CSS, 출력용 CSS
```

---

## 20. Codex에 줄 최종 작업 지시

아래 문장을 Codex 첫 작업 지시로 사용한다.

```txt
이 프로젝트는 기존 PDF 포트폴리오를 웹페이지형 포트폴리오로 재구성하는 작업이다.
이미지 생성/PPTX 방식은 사용하지 않는다.
모든 텍스트와 프로젝트 데이터는 TypeScript data 파일에서 수정 가능해야 한다.
UI는 카드형 섹션 중심의 반응형 웹페이지로 구성한다.

중요 원칙:
1. 원본 PDF와 이 지시서의 데이터 외에는 임의 내용을 만들지 않는다.
2. 연락처는 원본 PDF 기준을 우선하되, 충돌값은 data_verification.md에 표시한다.
3. 표지에서 이름을 과도하게 크게 만들지 않는다.
4. 영문 이름은 KIM TAEK KWON으로 표기한다.
5. 상단에 연도를 고정하지 않는다.
6. AI 생성 이미지 느낌의 장식 이미지는 사용하지 않는다.
7. SVG 아이콘은 lucide-react를 우선 사용하고, 기술 브랜드 로고는 src/assets/icons/brands에 SVG로 관리한다.
8. 모든 카드 텍스트는 반응형에서 잘리지 않아야 한다.
9. 브라우저에서 npm run dev로 바로 미리볼 수 있어야 한다.
10. print.css를 작성해 PDF 출력이 가능하도록 한다.

먼저 Vite + React + TypeScript 프로젝트를 구성하고, data 파일과 기본 섹션 컴포넌트부터 만든다.
```

---

## 21. 참고 링크

아이콘 참고:

```txt
https://github.com/topics/svg-icons?l=typescript
```

프로젝트 레포:

```txt
https://github.com/cheng80/chatbot_rag
https://github.com/cheng80/hivetodo
https://github.com/cheng80/habitcell
https://github.com/cheng80/ml_diabetes_app
https://github.com/cheng80/syncflow
https://github.com/cheng80/taborder
```

---

## 22. 최종 메모

현재 작업의 핵심은 “예쁜 완성 이미지”가 아니라 **수정 가능한 포트폴리오 시스템**을 만드는 것이다.

따라서 Codex는 다음 순서로 접근한다.

```txt
데이터 정리 → 컴포넌트화 → 카드형 UI → 실제 리소스 연결 → 출력/배포
```

이 구조로 만들면 이후 프로젝트가 추가되더라도 `src/data/projects.ts`에 항목만 추가해서 유지보수할 수 있다.
