# gstack-codex 사용 요약

## 설치 상태

- 설치 방식: 글로벌 설치
- 최초 설치 명령:

```bash
npx gstack-codex init --global
```

- 현재 설치 기준:
  - `gstack-codex`: `0.2.5`
  - upstream `gstack`: `1.44.0.0`
  - upstream commit: `920a13a17f463c28a3db75cc27482affb13a4fee`
  - 설치 위치: `/Users/cheng80/.agents/skills`
  - 설치 상태 파일: `/Users/cheng80/.codex/gstack-codex/install-state.json`

`gstack-codex init --global`은 기본적으로 core pack만 설치한다. 그래서 `/plan-design-review` 같은 디자인 계열 스킬은 처음 설치 후 보이지 않았다.

2026-05-31에 `gstack-codex@0.2.5`의 full pack에 포함된 누락 스킬을 수동으로 추가했다. 검증 결과 full pack 기준 누락 스킬은 `0`개이며, gstack 계열 스킬은 총 `51`개가 설치되어 있다.

핵심 확인 파일:

```text
/Users/cheng80/.agents/skills/gstack-plan-design-review/SKILL.md
```

## 설치 이슈 기록

문제는 버전 문제가 아니라 pack 선택 문제였다.

- `gstack-codex@0.2.3` / upstream `gstack@1.31.1.0`에도 `/plan-design-review`는 있었다.
- `gstack-codex@0.2.5` / upstream `gstack@1.44.0.0`에도 `/plan-design-review`는 있다.
- 두 버전 모두 `/plan-design-review`는 `full_pack`에 있고, `core_pack`에는 없다.
- 현재 CLI는 `init --global`, `init --project`만 노출하며 `--full` 옵션을 제공하지 않는다.

따라서 `/plan-design-review`가 보이지 않았던 원인은 다음과 같다.

```text
gstack-codex 패키지에는 스킬이 포함되어 있지만,
공식 init 경로가 core pack만 설치해서 full pack 스킬이 빠졌다.
```

## 기본 사용법

Codex에서 slash command를 실행한다.

```text
/office-hours
/plan-design-review
/design-review
```

현재 Codex 세션의 스킬 목록은 세션 시작 시점 기준일 수 있다. 방금 수동 설치한 스킬이 목록에 바로 보이지 않으면, 해당 `SKILL.md`를 직접 읽어 같은 룰을 적용한다.

예:

```text
/plan-design-review 룰로 현재 포트폴리오 문서형 16:9 디자인 방향을 검토해줘.
```

## 자주 쓰는 명령

| 명령 | 용도 |
| --- | --- |
| `/office-hours` | 방향성, 포지셔닝, 질문 기반 의사결정 |
| `/plan-ceo-review` | 제품/채용 관점의 메시지와 범위 검토 |
| `/plan-eng-review` | 구현 구조, 파일 경계, 검증 계획 검토 |
| `/plan-design-review` | 구현 전 시각 방향, 레이아웃, UX 계획 검토 |
| `/design-review` | 구현된 화면의 시각 완성도와 UX 문제 점검 |
| `/browse` | 브라우저에서 실제 화면 흐름 확인 |
| `/qa` | QA를 수행하고 문제까지 수정 |
| `/qa-only` | 수정 없이 QA 리포트만 작성 |
| `/review` | 변경사항 리뷰 |
| `/investigate` | 원인 조사 중심의 디버깅 |
| `/document-release` | 문서와 변경 내역 정리 |
| `/context-save` | 긴 작업의 현재 맥락 저장 |
| `/context-restore` | 저장한 작업 맥락 복원 |
| `/ship` | 테스트, 리뷰, 커밋, 푸시, PR 흐름 |
| `/gstack-upgrade` | gstack 스킬 갱신 |

## 이 포트폴리오 프로젝트의 사용 기준

이 프로젝트는 일반 웹앱보다 16:9 가로 문서형 포트폴리오에 가깝다. 반응형 웹사이트보다 PPT 변환 가능성과 한 장 단위의 설득력이 우선이다.

주요 원칙:

- 모든 경력/프로젝트 데이터의 원천은 PDF다.
- 1차 원천은 `docs/김택권 포트폴리오.pdf`다.
- 최신 이력 방향 확인은 `docs/김택권_잡코리아 이력서_20260530.pdf`를 사용한다.
- PDF에 있는 이미지와 프로젝트 화면을 재사용한다.
- 기술 스택 아이콘은 이모지가 아니라 실제 기술 아이콘을 사용한다.
- Flutter와 AI/RAG 확장성을 앞쪽에서 강조한다.
- 오래된 경력은 신뢰 근거로 쓰되 첫인상에서 과하게 앞세우지 않는다.

## 포트폴리오 작업용 명령 선택

| 상황 | 권장 명령 |
| --- | --- |
| 채용 포지셔닝을 다시 잡을 때 | `/office-hours` |
| 첫 5장의 메시지와 설득 순서를 검토할 때 | `/plan-ceo-review` |
| 16:9 문서형 레이아웃, 시각 위계, 아이콘/이미지 사용 방향을 검토할 때 | `/plan-design-review` |
| HTML/CSS 구조와 export 가능한 정적 사이트 구조를 검토할 때 | `/plan-eng-review` |
| 실제 구현 화면이 카드 뉴스처럼 보이는지, 포트폴리오 문서처럼 보이는지 점검할 때 | `/design-review` |
| 브라우저에서 슬라이드 오버플로, 이미지 깨짐, 16:9 프레임을 확인할 때 | `/browse` 또는 `/qa-only` |

## 현재 합의된 포트폴리오 방향

포지셔닝:

```text
Flutter 상용 앱 개발 경험을 기반으로 FastAPI, ML, AI/RAG까지 확장하는 모바일 앱 개발자
```

첫 5장 우선순위:

| 장 | 역할 |
| --- | --- |
| 1 | Flutter + AI/RAG 확장형 모바일 앱 개발자 포지셔닝 |
| 2 | TagDo, HabitCell, GlucoInsight, SyncFlow 등 출시/준비 경험 |
| 3 | 기술 스택, 프로젝트, 출시/경력 증거를 연결하는 핵심 매트릭스 |
| 4 | AI/RAG, FastAPI, ML/Transformer 학습 및 실험 근거 |
| 5 | Unity, 교육 콘텐츠, 80+ 앱 운영, 팀 빌딩 경력 증거 |

특히 3장은 가장 중요한 장이다. 단순 기술 나열이 아니라 “기술을 어디에 썼고, 어떤 출시/운영/경력 증거가 있는지”를 한눈에 보여줘야 한다.

## 이 프로젝트에서 자주 쓸 요청 문장

```text
/plan-design-review
docs/PORTFOLIO_DIRECTION_OFFICE_HOURS.md와 DESIGN.md를 읽고, 현재 16:9 포트폴리오가 카드 뉴스처럼 보이지 않고 전문 포트폴리오 문서처럼 보이도록 첫 5장 구조와 시각 위계를 검토해줘.
```

```text
/design-review
http://localhost:4173/ 화면을 보고, 16:9 슬라이드 문서로서 이미지, 기술 아이콘, 타이포그래피, 정보 밀도 문제를 찾아 수정 방향을 제안해줘.
```

```text
/plan-eng-review
정적 HTML/CSS 포트폴리오 구조가 PPT 변환과 PDF 이미지 재사용에 적합한지 검토해줘. React/Vite 앱처럼 복잡해지는 방향은 피하고 싶다.
```

slash command가 바로 실행되지 않으면 자연어로 같은 의도를 말해도 된다.

## 갱신 방법

공식 경로로 core pack을 갱신한다.

```bash
npx gstack-codex@latest init --global
```

주의: 이 명령은 core pack만 다시 설치할 수 있으므로, full pack에서 수동 추가한 스킬은 갱신 과정에서 상태 파일의 managed path로 기록되지 않는다. 갱신 후 `/Users/cheng80/.agents/skills/gstack-plan-design-review/SKILL.md`가 남아 있는지 확인한다.

스킬 자체 업데이트 흐름은 Codex 안에서 아래 명령을 사용한다.

```text
/gstack-upgrade
```

## 확인 명령

```bash
cat /Users/cheng80/.codex/gstack-codex/install-state.json
find /Users/cheng80/.agents/skills -maxdepth 2 -name SKILL.md -path '*/gstack-*' | sort | wc -l
ls /Users/cheng80/.agents/skills/gstack-plan-design-review/SKILL.md
```

기대값:

```text
gstack skill count: 51
plan-design-review: exists
```

## 주의사항

- `/Users/cheng80/.codex/AGENTS.md`의 gstack-codex 관리 블록은 직접 수정하지 않는다.
- 현재 프로젝트의 `AGENTS.md` 규칙과 사용자의 PDF 원천 규칙이 gstack 워크플로보다 우선한다.
- `AskUserQuestion`은 CLI 환경에서만 제대로 동작할 수 있다.
- 이 환경에서 질문 도구가 제한되면 영어 질문을 먼저 수집하고, 한국어로 사용자에게 물은 뒤, 답변을 다시 반영하는 방식으로 진행한다.
- gstack 스킬이 영어로 질문하거나 선택지를 제시하면 한국어로 번역해서 확인한다.
- 포트폴리오 문구는 PDF에 없는 사실을 새로 만들어내지 않는다.
- Flutter, AI/RAG 강조는 채용 포지셔닝의 편집 방향이며, 근거는 PDF와 최신 이력서에서 확인 가능한 범위로 제한한다.

## 참고 링크

- GitHub: https://github.com/phd-peter/gstack-codex
- 설치 문서: https://github.com/phd-peter/gstack-codex/blob/main/docs/install.md
- npm: https://www.npmjs.com/package/gstack-codex
