import { createContext, useReducer, useEffect } from 'react';
import authReducer from './AuthReducer';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, {
		user: null,
		authReady: false,
	});

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => {
			console.log(user);
			dispatch({ type: 'AUTH_STATE', payload: user });
			unsub();
		});
	}, []);

	return (
		<AuthContext.Provider value={{ ...authState, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
