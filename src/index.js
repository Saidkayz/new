import {initializeApp} from 'firebase/app';
import{collection, getDocs, getFirestore}from 'firebase/firestore';
import{getAuth,createUserWithEmailAndPassword, signOut}from'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDVV-rBiJDJzIeY6O5XhzNOWs_2xDcReTI",
    authDomain: "news-ef5f5.firebaseapp.com",
    projectId: "news-ef5f5",
    storageBucket: "news-ef5f5.appspot.com",
    messagingSenderId: "743275261230",
    appId: "1:743275261230:web:ed7e567cf6059686a7debf"
  };
  //init firebase app
  const app =initializeApp(firebaseConfig);

  //init services
  const db = getFirestore(app);
  const auth = getAuth();

  //signing users up
  const signupForm = document.querySelector('.signup')
  signupForm.addEventListener('submit', (e)=>{
   e.preventDefault()
     const email = signupForm.email.value
     const password = signupForm.password.value
     const fullname = signupForm.Fullname.value
     const username = signupForm.username.value
     const phonenumber = signupForm.Phonenumber.value
     const confirmpassword = signupForm.confirmpassword.value

     createUserWithEmailAndPassword(auth,email,password,fullname,username,phonenumber,confirmpassword)
     .then((cred)=>{
      console.log('user created',cred.user)
      signupForm.reset()
     })
     .catch((err)=>{
      console.log(err.message)
     })
  })
  //logging in and out
  const logoutButton = document.querySelector('.logout')
  logoutButton.addEventListener('click', () => {
    signOut(auth)
    .then(() => {
      console.log('The user signed out')
    })
    .catch((err) => {
      console.log(err.message)
    })
  })
  const loginForm = document.querySelector('.login')
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
  })