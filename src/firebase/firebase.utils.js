import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCAAJYN8krQrSbHuuOkauyFMq7cLylJj2c",
    authDomain: "crwn-db-816c4.firebaseapp.com",
    databaseURL: "https://crwn-db-816c4.firebaseio.com",
    projectId: "crwn-db-816c4",
    storageBucket: "crwn-db-816c4.appspot.com",
    messagingSenderId: "815496378492",
    appId: "1:815496378492:web:3fa2f50526f8a5e81731f9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
