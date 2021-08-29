import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyByFfwSsmw-yQkJoIUGOT5TMwBV6sFJgrs",
  authDomain: "test-b0382.firebaseapp.com",
  projectId: "test-b0382",
  storageBucket: "test-b0382.appspot.com",
  messagingSenderId: "704413386998",
  appId: "1:704413386998:web:5786e00ccff3339b0084d7",
  measurementId: "G-8RV0WVTTFT"
};
export default firebase.initializeApp(firebaseConfig)