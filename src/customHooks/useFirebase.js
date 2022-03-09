import {
	addDoc,
	collection,
	serverTimestamp,
	onSnapshot,
	getDocs,
	query,
	where,
	orderBy,
	deleteDoc,
	doc,
} from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { useState, useReducer, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthContex';

//Firebase Reducer
const firebaseReducer = (state, action) => {
	switch (action.type) {
		case 'SET_PENDING':
			return {
				...state,
				isPending: action.payload,
			};
		case 'SET_DOCS':
			return {
				...state,
				documents: action.payload,
			};
		default:
			return {
				...state,
			};
	}
};

const useFirebase = () => {
	const [cancel, setCancel] = useState(false);
	const [firebaseState, dispatch] = useReducer(firebaseReducer, {
		isPending: false,
		error: null,
		documents: [],
	});
	const { user, authReady } = useContext(AuthContext);
	console.log(user);
	//Collection ref
	const colRef = collection(db, 'transcations');

	//Add document to firestore
	const addDocument = async (obj) => {
		dispatch({ type: 'SET_PENDING', payload: true });
		await addDoc(colRef, {
			...obj,
			createdAt: serverTimestamp(),
			uid: user.uid || user.user.uid,
		});
		if (!cancel) dispatch({ type: 'SET_PENDING', payload: false });
	};
	//Not using get data Once
	const getDocuments = async () => {
		const docArray = [];
		const querySnapshot = await getDocs(colRef);
		querySnapshot.forEach((doc) => {
			docArray.push(doc.data());
		});
		return docArray;
	};
	//delete Document
	const deleteDocument = async (id) => {
		const docRef = doc(colRef, id);
		await deleteDoc(docRef);
	};
	//Realtime data
	useEffect(() => {
		if (!user || !authReady) return;

		// console.log(user.uid || user.user.uid);
		const q = query(
			colRef,
			where('uid', '==', user.uid || user.user.uid),
			orderBy('createdAt', 'desc')
		);
		const unsub = onSnapshot(q, (docs) => {
			const arr = [];
			docs.forEach((doc) =>
				arr.push({ ...doc.data(), id: doc.id, uid: user.uid })
			);
			console.log(arr);
			if (!cancel) dispatch({ type: 'SET_DOCS', payload: arr });
		});

		return () => {
			setCancel(true);
			unsub();
		};
	}, []);
	return { addDocument, deleteDocument, ...firebaseState };
};

export default useFirebase;
