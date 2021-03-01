import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import firebase from 'firebase';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	function signup(email, password, name) {
		return auth
			.createUserWithEmailAndPassword(email, password)
			.then(function (response) {
				firebase.database().ref('User').push({
					email: email,
					password: password,
					id: auth.currentUser.uid,
					fullname: name
				});
			});
	}

	function login(email, password) {
		return auth.signInWithEmailAndPassword(email, password);
	}

	function resetPassword(email) {
		return auth.sendPasswordResetEmail(email);
	}

	function logout() {
		return auth.signOut();
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signup,
		login,
		resetPassword,
		logout
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
