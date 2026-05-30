# HTML Claim Audit

Date: 2026-05-31  
Scope: `web-starter/index.html` visible claims  
Purpose: prevent design-driven fabricated portfolio content.

## Source Priority

1. Latest resume: `docs/김택권_잡코리아 이력서_20260530.pdf`
2. Existing portfolio PDF: `docs/김택권 포트폴리오.pdf`
3. User-provided supplemental links:
   - `https://github.com/cheng80/rummipoker`
   - `https://bicfest.org/enroll/view/3405`
   - `https://cheng80.myqnapcloud.com/rummipoker/`
   - `https://github.com/cheng80/chatbot_rag_app`

Existing HTML is not a source of truth.

## Immediate Fixes Applied

| Existing HTML claim | Issue | New wording | Source basis |
|---|---|---|---|
| `14년 이상` | Latest resume says total career `13년 4개월`; portfolio PDF says `14년 이상`. Latest resume wins for current summary. | `13년 4개월` | Latest resume |
| `Flutter 앱 4종` | Could imply four launched/operated Flutter apps. Latest resume says three mobile apps launched and operated; portfolio PDF lists four app-store registration projects including release-preparing projects. | `앱 프로젝트 4종` | Portfolio PDF, with status labels required |

## Safe Claims

These are supported by the source documents and may remain in the deck.

| Claim | Source |
|---|---|
| Name `김택권` | Portfolio PDF, latest resume |
| Phone `010-2626-2131` | Portfolio PDF, latest resume |
| Email `cheng80@naver.com` | Portfolio PDF, latest resume |
| GitHub `github.com/cheng80` | Portfolio PDF |
| 2022.04 - 2024.02 Grovy Education | Portfolio PDF, latest resume |
| 2016.01 - 2022.04 Chunjae Education / Chunjae Textbook combined period | Portfolio PDF |
| 2020.12 - 2022.04 Chunjae Textbook media team part lead | Latest resume |
| 2016.01 - 2020.12 Chunjae Education media team part lead | Latest resume |
| `80여종 이상의 앱 제작, 출시 및 유지보수` | Latest resume |
| TagDo description, stack, links | Portfolio PDF |
| HabitCell description, stack, links | Portfolio PDF, with PDF title conflict corrected from TOC/features |
| GlucoInsight description, stack, links, `출시 준비중(심사중)` | Portfolio PDF |
| SyncFlow description, stack, GitHub, `출시 준비중` | Portfolio PDF |
| 순서대로 탭탭 Flutter/Flame web demo and GitHub | Portfolio PDF |
| Grovy / Chunjae project descriptions and video links | Portfolio PDF |
| Hardware serial, Arduino, ESP32, MQTT-SSL evidence | Portfolio PDF |

## Claims Requiring Careful Labels

| Topic | Safe treatment |
|---|---|
| Flutter launched app count | Use latest resume wording only when saying launched/operated: `세 개의 모바일 앱`. Use portfolio PDF wording when saying app projects: `앱스토어 등록 프로젝트 4개`. |
| GlucoInsight | Label as `출시 준비중(심사중)` unless a newer source is provided. |
| SyncFlow | Label as `출시 준비중`. |
| AI/RAG | Present as current project and training evidence. Do not claim years of production AI/RAG experience. |
| Rummi Poker BIC | Say `BIC 출품` only. Do not say selected, awarded, exhibited, or winner unless later verified. |
| Rummi Poker playable build | Use `Playable Web build` with the user-provided URL. |

## Remove / Avoid

Do not add the following unless a source is later provided:

- download counts
- revenue
- user counts, except where latest resume explicitly says `회원수 7000명` for 우주좀비
- ranking, except where latest resume explicitly says `2주간 유료 매출 2위` for 우주좀비
- awards, except latest resume education/award entries and user-provided BIC submission link
- AI/RAG production-years claims
- generic claims like "expert", "top-tier", "high-performance" without evidence

## Implementation Rule

Before editing visible portfolio text, tag each claim mentally as:

```text
PDF source
Latest resume source
User-provided supplemental source
Derived phrasing from source facts
Unknown / remove
```

`Unknown / remove` claims must not ship.
