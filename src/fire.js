import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyD6Lz-ZnheulWcidqat0YLs2rdIF3wakrU",
  authDomain: "test-react-175009.firebaseapp.com",
  databaseURL: "https://test-react-175009.firebaseio.com",
  projectId: "test-react-175009",
  storageBucket: "test-react-175009.appspot.com",
  messagingSenderId: "396015499046"
};
const fire = firebase.initializeApp(config);
export default fire;
