import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Header from './components/Header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthContext/AuthContex';

function App() {
	const { authReady, user } = useContext(AuthContext);
	return (
		<>
			{authReady && (
				<>
					<Header />
					<Routes>
						<Route
							path="/"
							element={!user ? <Navigate replace to="/login" /> : <Home />}
						/>
						<Route
							path="/login"
							element={user ? <Navigate replace to="/" /> : <Login />}
						/>
						<Route
							path="/signup"
							element={user ? <Navigate replace to="/" /> : <SignUp />}
						/>
						///No match router
						<Route
							path="*"
							element={
								!user ? (
									<Navigate replace to="/login" />
								) : (
									<Navigate replace to="/" />
								)
							}
						/>
					</Routes>
				</>
			)}
		</>
	);
}

export default App;
