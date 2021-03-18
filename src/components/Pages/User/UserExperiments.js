import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { db } from '../../../firebase';
import {
	PageContainer,
	PageSection,
	PageHR,
	PageTitle,
	PageLinkBtn,
	ExperimentsList,
	PageBtnContainer
} from '../../../styles/general';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';
import ListItem from '../../Elements/ListItem/ListItem';

export default function UserExperiments() {

	const [experiments, setExperiments] = useState([])
	const { currentUser } = useAuth();



	useEffect(() => {
		const initialise = async () => {
			await db.collection('users').where("uid", "==", currentUser.uid).get()
				.then(querySnapshot => {
					querySnapshot.forEach(async (doc) => {
						let experimentsCopy = [];
						for (const favorite of doc.data().favorites) {
							const result = await db.collection("experiments").doc(favorite).get().then(doc => ({
								id: doc.id,
								name: doc.data().title
							}));
							experimentsCopy.push(result);
						}
						return setExperiments(experimentsCopy);
					});
				});
		}
		initialise();
	}, [])

	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection fullHeight>
				<PageTitle>Favorites</PageTitle>
				<PageHR />
				<ExperimentsList>
					{experiments.map((experiment, i) => (
						<ListItem key={i} name={experiment.name} url={`/experiments/${experiment.id}`} />
					))}
				</ExperimentsList>
				<PageBtnContainer>
					<PageLinkBtn to="/user">Go back</PageLinkBtn>
				</PageBtnContainer>
			</PageSection>
		</PageContainer>
	);
}
