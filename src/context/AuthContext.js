import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, db } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(
		{
			email: "",
			name: "",
			uid: "",
			admin: "",
		}
	);
	const [loading, setLoading] = useState(true);
	const history = useHistory();
	// GENERAL FUNCTIONALITIES
	const signUp = (email, password, name) => {
		return auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				db.collection('users').add({
					email: email,
					uid: userAuth.user.uid,
					name: name,
					admin: false,
					favourites: [],
					events: []
				}).then(() => {
					history.push("/signin");
				}).catch(err => alert(err))
			}).catch(err => alert(err));
	}

	const signIn = (email, password) => {
		return auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
			db.collection('users').where("uid", "==", userAuth.user.uid).get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						let data = doc.data()
						setCurrentUser({
							email: data.email,
							name: data.name,
							uid: data.uid,
							admin: data.admin,
						})
						console.log(currentUser);
						history.push('/admin');
					})
				})
		});
	}

	const resetPassword = email => {
		return auth.sendPasswordResetEmail(email);
	}

	const logout = () => {
		return auth.signOut();
	}

	// ADMIN constALITIES

	const addEvent = (title, imgUrl, description, location, date, time, domains, places, steps, bookings) => {
		db.collection('events').add({
			title: title,
			imgUrl: imgUrl,
			description: description,
			location: location,
			date: date,
			time: time,
			domains: domains,
			places: places,
			steps: steps,
			bookings: bookings
		}).then(() => console.log("ADDED EVENT!!!"));
	}

	const addExperiment = (title, videoUrl, materials, domains, steps) => {
		db.collection('experiments').add({
			title: title,
			videoUrl: videoUrl,
			materials: materials,
			domains: domains,
			steps: steps
		}).then(() => console.log("ADDED EXPERIMENT!!!"));
	}




	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (!userAuth) {
				setCurrentUser(null);
			} else {

			}
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signUp,
		signIn,
		resetPassword,
		logout,
		addEvent,
		addExperiment,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
