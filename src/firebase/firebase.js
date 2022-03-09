import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// import {getAuth}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCKz9aob1zPHJczY29mg3sMaRRkRb6sEz4',
	authDomain: 'my-money-91ed9.firebaseapp.com',
	projectId: 'my-money-91ed9',
	storageBucket: 'my-money-91ed9.appspot.com',
	messagingSenderId: '1069540322498',
	appId: '1:1069540322498:web:af230c4146133faa789f5b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//authentication
export const auth = getAuth();

//firestore database
export const db = getFirestore();
