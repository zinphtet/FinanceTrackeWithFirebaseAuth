import { auth } from '../firebase/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';

const useSignup = () => {
	const [isPending, setPending] = useState(false);
	const [error, setError] = useState(null);

	const signup = async (myAuth, email, password, name) => {
		try {
			setPending(true);
			const user = await createUserWithEmailAndPassword(
				myAuth,
				email,
				password
			);
			if (!user) throw new Error("Can't create user ...");
			await updateProfile(myAuth.currentUser, {
				displayName: name,
			});
			setPending(false);
			console.log(user);
		} catch (err) {
			console.log(err.message);
			setError(err.message);
			setPending(false);
		}
	};

	return {
		isPending,
		error,
		signup,
	};
};

export default useSignup;
