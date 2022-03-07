import { createContext, useReducer } from 'react';
import authReducer from './AuthReducer';
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, {
		user: null,
	});

	return (
		<AuthContext.Provider value={{ ...authState, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
