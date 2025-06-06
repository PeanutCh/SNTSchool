// นำเข้า Firebase modules ที่จำเป็น
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCYFFv3ZPCsBmx-yhQap_ovKGPAbdLl4-M",
  authDomain: "snt-school.firebaseapp.com",
  projectId: "snt-school",
  storageBucket: "snt-school.firebasestorage.app",
  messagingSenderId: "542117467094",
  appId: "1:542117467094:web:36dd44c75e14e287660a77",
  measurementId: "G-TJK1J6ED2L"
};

// ✅ เริ่มต้น Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 👂 ดักจับการ submit ฟอร์ม
const loginForm = document.getElementById("login-form");
const errorMsg = document.getElementById("error-msg");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = loginForm["email"].value.trim();
  const password = loginForm["password"].value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // ✅ เข้าสู่ระบบสำเร็จ — redirect ไปหน้า index.html
    window.location.href = "index.html";
  } catch (error) {
    console.error("Login error:", error);
    errorMsg.textContent = "อีเมลหรือรหัสผ่านไม่ถูกต้อง";
  }
});
