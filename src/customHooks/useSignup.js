import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../AuthContext/AuthContex';

const useSignup = () => {
	const [unMount, setUnMount] = useState(false);
	const [isPending, setPending] = useState(false);
	const [error, setError] = useState(null);
	const { dispatch } = useContext(AuthContext);

	useEffect(() => {
		return () => {
			setUnMount(true);
		};
	}, []);

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
			dispatch({ type: 'SIGN_UP', payload: user });
			if (!unMount) setPending(false);
		} catch (err) {
			if (!unMount) {
				setError(err.message);
				setPending(false);
			}
		}
	};

	return {
		isPending,
		error,
		signup,
	};
};

export default useSignup;
