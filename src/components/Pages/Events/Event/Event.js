import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	green,
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
import { useParams } from 'react-router';
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
		date: ''
	});
	const [booked, setBooked] = useState(false);
	const { currentUser } = useAuth();


	useEffect(() => {
		console.log(currentUser);
		db.collection("events").doc(id).get().then(doc => setEvent(doc.data()));
	}, [])

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
					<PageSubtitle>Event description</PageSubtitle>
					<PageSubHR />
					<EventSteps>
						{event.steps.map((step) => (
							<li>{step}</li>
						))}
					</EventSteps>
				</EventInfo>
				<PageAddBtn onClick={() => setBooked(true)}>
					<p>Book a place</p>
					<PersonAddOutlinedIcon />
				</PageAddBtn>
			</PageSection>
			{booked && <PopUp close={() => setBooked(false)} date={event.date} id={id} time={event.time} location={event.location} uid={currentUser.uid} />}
		</PageContainer>
	);
}

const EventImage = styled.img`
	width: 280px;
	height: 200px;
	border-radius: 20px;
	margin: 20px auto 30px auto;
	object-fit: cover;
`;

const EventInfo = styled.div`
	padding: 0 15px;
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

const EventDetails = styled.div`
	display: flex;
	margin-top: 20px;
	div:last-child {
		margin-left: 15px;
	}
`;

const EventDetail = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	width: 100%;

	> .MuiSvgIcon-root {
		fill: ${green};
		width: 25px;
		height: 25px;
	}

	> h5 {
		margin-left: 5px;
		color: #fff;
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
