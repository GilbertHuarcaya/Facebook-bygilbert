import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBj4wbhwueIzh2xA71qllUm6k1_PUgiTRw",
  authDomain: "facebook-clone-4ce30.firebaseapp.com",
  projectId: "facebook-clone-4ce30",
  storageBucket: "facebook-clone-4ce30.appspot.com",
  messagingSenderId: "759439122331",
  appId: "1:759439122331:web:5a7a28cf755d9a39628b3e",
  measurementId: "G-2C1PJVZZ9X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db



