import "firebase/compat/auth";
import firebase from "firebase/compat/app";

firebase.initializeApp({
  apiKey: "AIzaSyAI8GQqScb5jzCgn99zQsWoglEW63dQBxo",
  authDomain: "webos-dcd7a.firebaseapp.com",
  projectId: "webos-dcd7a",
  storageBucket: "webos-dcd7a.appspot.com",
  messagingSenderId: "655691585188",
  appId: "1:655691585188:web:a31eb5d8dd1a7ddcf93831",
  measurementId: "G-4M5KR3644G",
});

const auth = firebase.auth();
const githubLoginProvider = new firebase.auth.GithubAuthProvider();

async function login() {
  auth.signInWithPopup(githubLoginProvider).then((res) => {
    const token = res.credential.accessToken;
    const user = res.additionalUserInfo.username;
    const email = res.user.email;
    console.log(res);
  });
}
export default login;
