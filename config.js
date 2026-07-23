/* ═══════════════════════════════════════════════════════════
   CAVE 환경 설정 — 자세한 설명은 README.md
   ═══════════════════════════════════════════════════════════ */
window.CAVE_CONFIG = {

  /* Gemini API 키 (전 세계 와인 AI 검색)
     https://aistudio.google.com/apikey 에서 발급 후 붙여넣기 */
  geminiKey: "",

  /* Firebase (실계정 · 이메일 인증 · 비밀번호 재설정 메일 · 후기 공유)

     ⚠️ apiKey 한 곳만 채우면 됩니다. 나머지 값은 이미 입력되어 있습니다.

     실제 키 확인 방법:
       Firebase 콘솔(console.firebase.google.com) → wine-js100 프로젝트
       → 프로젝트 설정(⚙️) → 일반 탭 → 내 앱 → SDK 설정 및 구성
       → firebaseConfig 안의 apiKey 값 복사 ("AIzaSy..."로 시작하는 39자)

     화면에 •••로 가려져 있으면 코드 스니펫 보기/복사 버튼을 사용하세요.
     (웹용 Firebase apiKey는 비밀키가 아니라 공개되어도 되는 식별자입니다) */
  firebase: {
    apiKey: "여기에_실제_apiKey_붙여넣기",
    authDomain: "wine-js100.firebaseapp.com",
    projectId: "wine-js100",
    storageBucket: "wine-js100.firebasestorage.app",
    messagingSenderId: "474989870409",
    appId: "1:474989870409:web:466c298a02019e699e6e98",
    measurementId: "G-9Z28QZ0WC7"
  }

};
