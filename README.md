# 🍷 CAVE — 와인 인텔리전스

와인 애호가와 입문자를 위한 웹 앱.
평론가 점수 · 빈티지 작황 차트 · 국내 평균가 · AI 소믈리에 검색 · 시음 후기 커뮤니티를 한 화면에서.

## 기능

| 화면 | 내용 |
|---|---|
| **탐색** | 24종 큐레이션 와인 리스트, 타입·가격 필터, 정렬, AI 소믈리에 자연어 검색 |
| **와인 상세** | RP·WS·JS 평론가 점수, 산지별 빈티지 작황 차트, 드링크 윈도우, 테이스팅 프로필, 판매처별 가격·평균가·추이, 커뮤니티 후기 |
| **후기 작성** | 별점(0.5 단위), 구조감 슬라이더, 맛 태그, 사진, 날짜·장소·동석자 |
| **마이 셀러** | 내 후기 관리, 평균 평점, 가격 알림 목록 |

## 실행

정적 사이트라 그냥 열면 됩니다.

- 로컬: `index.html`을 브라우저로 열기
- 배포: GitHub Pages 활성화 (Settings → Pages → Branch: `main`, 폴더 `/`)

## 동작 모드

기본 상태는 **게스트 모드**입니다 — 계정·후기가 브라우저(localStorage)에만 저장되고, AI 검색은 내장 엔진(24종 대상)으로 동작합니다. `config.js`를 채우면 단계적으로 실서비스 모드가 켜집니다.

### 1단계 — 전 세계 와인 AI 검색 (Gemini, 5분)

1. https://aistudio.google.com/apikey 접속 → **API 키 만들기** (무료)
2. `config.js`의 `geminiKey: ""`에 키 붙여넣기

이제 AI 소믈리에가 Gemini를 실시간 호출해 **전 세계 모든 와인**을 대상으로 추천합니다.
앱 데이터에 없는 와인은 Wine-Searcher 검색 링크로 연결됩니다.

> ⚠️ 주의: 클라이언트에 키를 넣으면 소스에서 키가 노출됩니다. 공개 배포 시에는
> Google AI Studio에서 키에 **HTTP 리퍼러 제한**(내 Pages 도메인만 허용)을 꼭 걸어주세요.
> 트래픽이 커지면 아래 3단계(서버 프록시)로 옮기는 것이 정석입니다.

### 2단계 — 실계정 · 이메일 인증 · 후기 공유 (Firebase, 15분)

1. https://console.firebase.google.com → **프로젝트 추가**
2. **빌드 → Authentication → 시작하기 → 이메일/비밀번호** 사용 설정
3. **빌드 → Firestore Database → 데이터베이스 만들기** (프로덕션 모드)
4. 프로젝트 설정(⚙️) → **웹 앱 추가** → `firebaseConfig` 객체 복사
5. `config.js`의 `firebase: null` 자리에 붙여넣기
6. Firestore **규칙** 탭에 아래 규칙 게시:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /reviews/{id} {
      allow read: if true;
      allow create: if request.auth != null && request.auth.token.email_verified;
      allow update, delete: if false;
    }
    match /usernames/{name} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if false;
    }
  }
}
```

이것으로 해결되는 것:

- **가짜 이메일 차단** — 가입 시 실제 인증 메일이 발송되고, 링크를 누른 계정만 로그인 가능
- **닉네임 중복 차단** — Firestore `usernames` 컬렉션에서 전역 중복 검사
- **후기 공유** — 모든 사용자의 후기가 Firestore에 저장되어 서로 보임

### 3단계 — 정식 백엔드 로드맵 (다음 단계)

| 항목 | 방법 |
|---|---|
| API 키 보호 | Firebase Functions(또는 Cloudflare Workers)로 Gemini 호출을 서버 프록시화 |
| 사진 업로드 공유 | Firebase Storage + 후기 문서에 이미지 URL 저장 |
| 와인 DB 대량 확장 | [X-Wines 오픈 데이터셋](https://github.com/rogerioxavier/X-Wines) (10만+ 와인)을 Firestore로 임포트 |
| 실시간 가격 | Wine-Searcher API(유료) 또는 국내 판매처 제휴/크롤링 파이프라인 |
| 평론 점수 라이브 | Global Wine Score API 연동 |
| 알림 발송 | Firebase Cloud Messaging + Functions 스케줄러로 평균가 하락 감지 |

## 구조

```
index.html   앱 전체 (단일 파일: UI + 데이터 + 로직)
config.js    환경 설정 (Gemini 키, Firebase 구성)
```

## 데이터 출처 표기

번들된 24종 와인의 점수·가격·작황 지수는 개발용 표본 데이터입니다.
실서비스 전에는 위 로드맵의 라이브 데이터 소스로 교체가 필요합니다.
