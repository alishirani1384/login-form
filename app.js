import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCkIeuh0CHCissFZ-YHbUBNKPP54xsgSWA",
  authDomain: "lgoin-form-v1.firebaseapp.com",
  projectId: "lgoin-form-v1",
  storageBucket: "lgoin-form-v1.appspot.com",
  messagingSenderId: "2386873630",
  appId: "1:2386873630:web:937d4d0d16ced3717b8d0f",
};

const app = initializeApp(firebaseConfig);

const card = document.querySelector(".card h1");
const name = document.querySelector(".card h1 span");
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
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
});

form.addEventListener("submit", (e) => {
e.preventDefault()
  const email = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  const auth = getAuth(app);

  signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    card.classList.remove("hidden");
    form.classList.add("hidden");
    name.innerHTML = user.email;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });


})
