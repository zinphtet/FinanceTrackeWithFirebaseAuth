import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../AuthContext/AuthContex';
const useLogin = () => {
	const [isPending, setPending] = useState(false);
	const [error, setError] = useState(null);
	const [unMount, setUnMount] = useState(false);
	const { dispatch } = useContext(AuthContext);

	useEffect(() => {
		return () => {
			setUnMount(true);
		};
	}, []);

	const login = async (myAuth, email, password) => {
		try {
			setPending(true);
			const user = await signInWithEmailAndPassword(myAuth, email, password);
			if (!user) throw new Error("Can't login user ...");
			dispatch({ type: 'LOG_IN', payload: user });
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
		login,
	};
};

export default useLogin;
