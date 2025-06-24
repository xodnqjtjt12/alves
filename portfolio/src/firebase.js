// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // ✅ storage 추가

const firebaseConfig = {
  apiKey: "AIzaSyCoPp6qnPJNEJo_V9F_UVLGIvSxF0zkMCI",
  authDomain: "album-a5207.firebaseapp.com",
  projectId: "album-a5207",
  storageBucket: "album-a5207.appspot.com", // ✅ 올바른 주소로 수정 (.appspot.com)
  messagingSenderId: "874075873929",
  appId: "1:874075873929:web:46794aa2dae3c82c2a1c58",
  measurementId: "G-1T2GX5P7HC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); // ✅ storage 초기화

export { db, storage }; // ✅ 둘 다 export
