import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { db } from '../../../firebase';
import {
	PageContainer,
	PageSection,
	PageTitle,
	PageHR,
	PageLinkBtn,
	green,
	PageBtnContainer,
	EventsList
} from '../../../styles/general';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';
import ListItem from '../../Elements/ListItem/ListItem';

export default function UserEvents() {
	const [events, setEvents] = useState([])
	const { currentUser } = useAuth();

	useEffect(() => {
		const initialise = async () => {
			await db.collection('users').where("uid", "==", currentUser.uid).get()
				.then(querySnapshot => {
					querySnapshot.forEach(async (doc) => {
						let eventsCopy = [];
						for (const event of doc.data().events) {
							const result = await db.collection("events").doc(event).get().then(doc => ({
								id: doc.id,
								name: doc.data().title
							}));
							eventsCopy.push(result);
						}
						return setEvents(eventsCopy);
					});
				});
		}
		initialise();
	}, [])

	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection fullHeight>
				<PageTitle>Events</PageTitle>
				<PageHR />
				<EventsList>
					{events.map(event => (
						<ListItem name={event.name} url={`/events/${event.id}`} />
					))}
				</EventsList>
				<PageBtnContainer>
					<PageLinkBtn to="/user">Go back</PageLinkBtn>
				</PageBtnContainer>
			</PageSection>
		</PageContainer>
	);
}
