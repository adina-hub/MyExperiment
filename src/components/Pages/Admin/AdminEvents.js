import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
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
import { db } from '../../../firebase';

export default function AdminEvents() {
	const [events, setEvents] = useState([])
	useEffect(() => {
		db.collection("events").get().then(querySnapshot => {
			let array = [];
			querySnapshot.docs.map(doc => {
				let id = doc.id;
				let data = doc.data();
				array.push({
					id: id,
					title: data.title,
				})
			});
			setEvents(array);
		});
	}, []);


	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection fullHeight>
				<PageTitle>Events</PageTitle>
				<PageHR />
				<EventsList>
					{events.map(event => (
						<ListItem name={event.title} id={event.id} type="event" url={`/events/${event.id}`} />
					))}
				</EventsList>
				<PageBtnContainer>
					<PageLinkBtn to="/admin">Go back</PageLinkBtn>
					<EventsAddButton to="/newEvent">
						<p>Add</p>
						<EventsAddIcon />
					</EventsAddButton>
				</PageBtnContainer>
			</PageSection>
		</PageContainer>
	);
}

const EventsAddIcon = styled(AddIcon)`
	color: ${green};
	width: 20px;
	height: 20px;
`;

const EventsAddButton = styled(PageLinkBtn)`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;
