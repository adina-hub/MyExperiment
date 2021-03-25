import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../../../firebase';
import {
	PageContainer,
	PageDescription,
	PageHR,
	PageSection,
	PageTitle
} from '../../../styles/general';
import Event from '../../Elements/Event/Event';
import Navbar from '../../Elements/Navbar/Navbar';

function Events() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		db.collection('events')
			.get()
			.then((querySnapshot) => {
				let array = [];
				querySnapshot.docs.map((doc) => {
					let id = doc.id;
					let data = doc.data();
					array.push({
						id: id,
						title: data.title,
						description: data.description,
						places: data.places,
						time: data.time,
						date: data.date,
						location: data.location,
						domains: data.domains,
						steps: data.steps,
						imgUrl: data.imgUrl
					});
				});
				setEvents(array);
			});
	}, []);

	return (
		<PageContainer>
			<Navbar></Navbar>
			<PageSection>
				<PageTitle>Events</PageTitle>
				<PageHR />
				<PageDescription>
					Sign up for lots more activities sure to inspire curiosity in your
					pupils. It's free!
				</PageDescription>
				<PageHR />
			</PageSection>
			<PageSection dark>
				<EventsList>
					{events.map((event) => (
						<Event
							id={event.id}
							title={event.tile}
							img={event.imgUrl}
							description={event.description}
							location={event.location}
							time={event.time}
						/>
					))}
				</EventsList>
			</PageSection>
		</PageContainer>
	);
}

export default Events;

const EventsList = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;
