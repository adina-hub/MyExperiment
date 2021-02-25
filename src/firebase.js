import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
	apiKey: 'AIzaSyBV-4r-_kAwm0rmkNCwH88f-Ape9u3vxwU',
	authDomain: 'myexperiment-c6404.firebaseapp.com',
	databaseURL: 'https://myexperiment-c6404-default-rtdb.firebaseio.com/',
	projectId: 'myexperiment-c6404',
	storageBucket: 'myexperiment-c6404.appspot.com',
	messagingSenderId: '731232993558',
	appId: '1:731232993558:web:7444b7b3378e39c596d037'
});

export const auth = app.auth();

export default app;
