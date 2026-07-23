/* ═══════════════════════════════════════════════════════════
   CAVE 환경 설정
   이 파일의 값을 채우면 앱이 게스트 모드 → 실서비스 모드로 전환됩니다.
   자세한 설정 방법은 README.md 참고.
   ═══════════════════════════════════════════════════════════ */
window.CAVE_CONFIG = {

  /* ── 1. Gemini API 키 (전 세계 와인 AI 검색) ──
     https://aistudio.google.com/apikey 에서 무료 발급 후 붙여넣기.
     예: geminiKey: "AIzaSy..."                                  */
  geminiKey: "",

  /* ── 2. Firebase 구성 (실계정 · 이메일 인증 · 후기 공유) ──
     https://console.firebase.google.com 에서 프로젝트 생성 후
     '웹 앱 추가'에서 받은 firebaseConfig 객체를 붙여넣기.
     예:
     firebase: {
       apiKey: "AIzaSy...",
       authDomain: "cave-wine.firebaseapp.com",
       projectId: "cave-wine",
       storageBucket: "cave-wine.appspot.com",
       messagingSenderId: "...",
       appId: "..."
     }                                                           */
  firebase: null

};
