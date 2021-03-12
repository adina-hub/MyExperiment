import React, { useState } from 'react';
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
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PopUp from '../../../Elements/PopUp/PopUp';

export default function Event({ id }) {
	const [event, setExperiment] = useState({
		title: 'Optical Illusions',
		src:
			'https://images.unsplash.com/photo-1614456152857-6e4f94623245?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		topics: ['Mecanics', 'Optics'],
		materials: ['Bread', 'Ham', 'Butter', 'Tomatoes'],
		steps: [
			"You’re going to watch a short video. The aim isn't to find right answers, it's to explore ideas and find out what they know.",
			"After you've watched the video, lead a discussion with your class",
			'Ask the class to describe what they saw using only one word.'
		],
		location: 'Illinois, SUA',
		time: '4 pm',
		date: '14/9/2021'
	});
	const [booked, setBooked] = useState(false);



	return (
		<PageContainer>
			<Navbar></Navbar>
			<PageSection>
				<PageTitle white>{event.title}</PageTitle>
				<EventImage src={event.src}></EventImage>
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
						{event.topics.map((topic, i) => (
							<p>
								{topic}
								{i !== event.topics.length - 1 ? ',' : null}
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
			{booked && <PopUp close={() => setBooked(false)} date={event.date} time={event.time} location={event.location} id={event.title} />}
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
