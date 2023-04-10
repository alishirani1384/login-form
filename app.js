import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAOOrUPqBOaohjVS4-DbrDPUSGFl60ssg",
  authDomain: "login-form-v0.firebaseapp.com",
  projectId: "login-form-v0",
  storageBucket: "login-form-v0.appspot.com",
  messagingSenderId: "429402767465",
  appId: "1:429402767465:web:73276fdcb1baf4262ca2f8",
};

const app = initializeApp(firebaseConfig);

const card = document.querySelector(".card h1");
const name = document.getElementById("Uname");
const form = document.querySelector("form");

const googleSignBtn = document.getElementById("google");
const githubSignBtn = document.getElementById("github");

googleSignBtn.addEventListener("click", () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      card.classList.remove("hidden");
      form.classList.add("hidden");
      name.innerHTML = user.displayName;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});
githubSignBtn.addEventListener("click", () => {
  const provider = new GithubAuthProvider();
  const auth = getAuth(app);
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      card.classList.remove("hidden");
      form.classList.add("hidden");
      name.innerHTML = user.displayName;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  const auth = getAuth(app);

  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      card.classList.remove("hidden");
      form.classList.add("hidden");
      name.innerHTML = user.email;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});
