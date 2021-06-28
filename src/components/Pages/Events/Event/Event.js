import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	EventDetail,
	EventDetails,
	PageAddBtn,
	PageContainer,
	PageSection,
	PageSubHR,
	PageSubtitle,
	PageTitle
} from '../../../../styles/general';
import Navbar from '../../../Elements/Navbar/Navbar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import PopUp from '../../../Elements/PopUp/PopUp';
import { useHistory, useParams } from 'react-router';
import { db } from '../../../../firebase';
import { useAuth } from '../../../../context/AuthContext';

export default function Event() {
	let { id } = useParams();
	const [event, setEvent] = useState({
		title: '',
		imgUrl: '',
		domains: [],
		steps: [],
		location: '',
		time: '',
		date: '',
		places: ''
	});
	const [booked, setBooked] = useState(false);
	const { currentUser } = useAuth();
	const history = useHistory();
	window.scrollTo(0, 0);

	const addHandler = () => {
		if (currentUser) {
			setBooked(true);
		} else {
			history.push('/signIn');
		}
	};

	useEffect(() => {
		db.collection('events')
			.doc(id)
			.get()
			.then((doc) => setEvent(doc.data()));
	}, []);

	return (
		<PageContainer>
			<Navbar></Navbar>
			<PageSection>
				<PageTitle white>{event.title}</PageTitle>
				<EventImage src={event.imgUrl}></EventImage>
				<EventInfo>
					<PageSubtitle>Activity overview</PageSubtitle>
					<PageSubHR />
					<EventDetails>
						<EventDetail>
							<LocationOnIcon />
							<h5>{event.location}</h5>
						</EventDetail>
						<EventDetail>
							<ScheduleIcon />
							<h5>{event.time}</h5>
						</EventDetail>
					</EventDetails>
					<EventTopics>
						<PageSubtitle small>Science Topics:</PageSubtitle>
						{event.domains.map((topic, i) => (
							<p>
								{topic}
								{i !== event.domains.length - 1 ? ',' : null}
							</p>
						))}
					</EventTopics>
					<EventTopics>
						<PageSubtitle small>Places Available:</PageSubtitle>
						<p>{event.places}</p>
					</EventTopics>
					<PageSubtitle>Event description</PageSubtitle>
					<PageSubHR />
					<EventSteps>
						{event.steps.map((step) => (
							<li>{step}</li>
						))}
					</EventSteps>
				</EventInfo>
				<PageAddBtn onClick={addHandler}>
					<p>Book a place</p>
					<PersonAddOutlinedIcon />
				</PageAddBtn>
			</PageSection>
			{booked && (
				<PopUp
					close={() => setBooked(false)}
					date={event.date}
					id={id}
					time={event.time}
					location={event.location}
					uid={currentUser.uid}
				/>
			)}
		</PageContainer>
	);
}

const EventImage = styled.img`
	width: 280px;
	height: 200px;
	border-radius: 20px;
	margin: 20px auto 30px auto;
	object-fit: cover;

	@media screen and (min-width: 768px) {
		width: 400px;
		height: 300px;
		margin: 30px auto;
	}

	@media screen and (min-width: 1024px) {
		width: 650px;
		height: 350px;
		margin: 35px auto;
	}
`;

const EventInfo = styled.div`
	padding: 0 15px;

	@media screen and (min-width: 1024px) {
		padding: 0 30px;
	}
`;

const EventSteps = styled.ol`
	> li {
		color: #fff;
		margin-top: 15px;
		margin-left: 20px;
		line-height: 25px;
		text-align: left;
	}
`;

const EventTopics = styled.div`
	display: flex;
	align-items: center;
	margin: 20px auto 30px auto;

	> p {
		margin-left: 7.5px;
		color: white;
	}
`;
