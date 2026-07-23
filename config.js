/* ═══════════════════════════════════════════════════════════
   CAVE 환경 설정 — 자세한 설명은 README.md
   ═══════════════════════════════════════════════════════════ */
window.CAVE_CONFIG = {

  /* Gemini API 키 (전 세계 와인 AI 검색)
     ⚠️ 여기(공개 저장소)에 키를 넣으면 GitHub 보안 정책이 푸시를 차단합니다.
     대신 사이트에서 AI 검색 결과 하단의 「Gemini API 키 연결」을 눌러
     키를 입력하세요 — 내 브라우저(localStorage)에만 저장되어 안전합니다. */
  geminiKey: "",

  /* Firebase (실계정 · 이메일 인증 · 비밀번호 재설정 메일 · 후기 공유) */
  firebase: {
    apiKey: "AIzaSyAwic6LBldJhmZNqzfO5w7xn4JshB9ojBQ",
    authDomain: "wine-js100.firebaseapp.com",
    projectId: "wine-js100",
    storageBucket: "wine-js100.firebasestorage.app",
    messagingSenderId: "474989870409",
    appId: "1:474989870409:web:466c298a02019e699e6e98",
    measurementId: "G-9Z28QZ0WC7"
  }

};
