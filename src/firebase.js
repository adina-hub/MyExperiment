import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyBV-4r-_kAwm0rmkNCwH88f-Ape9u3vxwU",
	authDomain: "myexperiment-c6404.firebaseapp.com",
	databaseURL: "https://myexperiment-c6404-default-rtdb.firebaseio.com",
	projectId: "myexperiment-c6404",
	storageBucket: "myexperiment-c6404.appspot.com",
	messagingSenderId: "731232993558",
	appId: "1:731232993558:web:6dfcd1bd55e71d7096d037"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
