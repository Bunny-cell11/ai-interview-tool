import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcl6RjYeqB5tX_Dt6aqBPgYX_QORx5MQ0",
  authDomain: "ai-interview-e3d31.firebaseapp.com",
  projectId: "ai-interview-e3d31",
  storageBucket: "ai-interview-e3d31.firebasestorage.app",
  messagingSenderId: "452827779417",
  appId: "1:452827779417:web:2517a164aec8afa930bc48",
  measurementId: "G-B69DXNTKR4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

