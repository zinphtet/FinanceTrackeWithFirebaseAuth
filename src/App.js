import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</>
	);
}

export default App;
