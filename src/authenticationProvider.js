
import { getAuth, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBtVv4NKsof9zMTxdfWWmypm9y99kwghxg",
    authDomain: "projectmps2.firebaseapp.com",
    projectId: "projectmps2",
    storageBucket: "projectmps2.appspot.com",
    messagingSenderId: "691776981523",
    appId: "1:691776981523:web:b6299ce0eaec31fd4fcde6"
  };



export class AuthProvider {

    constructor() {
        if (AuthProvider._instance) {
            return AuthProvider._instance;
        }
        AuthProvider._instance = this;
        this.app = initializeApp(firebaseConfig);
        this.gauthp = new GoogleAuthProvider();
        this.gauthp.addScope('https://www.googleapis.com/auth/userinfo.email')
        this.auth = getAuth();
        this.token = null;
        this.email = "";
    }

    getToken() {
        return this.token;
    }

    getEmail() {
      return this.email;
    }

    async requestAuth(useremail, password, callback) {
        return this.IsLoggedIn().then(v => {
            console.log(v);
            if (v === false) {
                try {
                  let signFuture = null;
                  if (useremail != null && password != null) {
                    signFuture = signInWithEmailAndPassword(this.auth, useremail, password);
                  } else {
                    signFuture = signInWithPopup(this.auth, this.gauthp);
                  }
                  signFuture.then(result => {
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const user = result.user;
                    this.token = user.accessToken;
                    this.email = user.email;
                    console.log("Access token")
                    console.log(this.token)
                    console.log(user.email)
                    callback();
                  });
                    
                } catch (e) {

                }
                
            }
        
        })
    }

    async IsLoggedIn() { // promise<boolean> // do not use -- broken
        try {
          await new Promise((resolve, reject) =>
            this.app.auth().onAuthStateChanged(
              user => {
                console.log(user);
                if (user) {
                  // User is signed in.
                  console.log(true);
                  resolve(true)
                } else {
                  // No user is signed in.
                  console.log(false);
                  reject(false)
                }
              },
              // Prevent console error
              error => reject(error)
            )
          )
          return true
        } catch (error) {
          return false
        }
    }

    logout() {
      this.auth.signOut()
        //signOut(this.auth)
        this.token = null;
    }

}


export default AuthProvider;