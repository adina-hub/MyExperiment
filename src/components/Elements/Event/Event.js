import React from 'react';
import styled from 'styled-components';
import { green, darkBg, lightBg, fontP } from '../../../styles/general';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Link } from 'react-router-dom';

function Event({ id, title, description, location, time, img, carousel = false, primary = false, last = false, first = false }) {
	return (
		<EventContainer carousel={carousel ? true : false}
			first={first ? true : false}
			primary={primary ? true : false}
			last={last ? true : false}>
			<EventImage src={img} alt="" />
			<EventInfo>
				<EventTitle>{title}</EventTitle>
				<EventDescription>{description}</EventDescription>
				<EventDetails>
					<EventDetail>
						<LocationOnIcon />
						<h5>{location}</h5>
					</EventDetail>
					<EventDetail>
						<ScheduleIcon />
						<h5>{time}</h5>
					</EventDetail>
				</EventDetails>
				<EventButtons>
					<button className="info" ><Link to={`/events/${id}`}>More info</Link></button>
					<button className="book">Book a place</button>
				</EventButtons>
			</EventInfo>
		</EventContainer>
	);
}

export default Event;

const EventContainer = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	margin: 50px auto;
    /* CAROUSEL width for 375px is 220px */
	width: ${props => props.carousel ? '200px' : '250px'};
	height: 260px;
	background: grey;
	border-radius: 5px;
	/* =================== */
    opacity: ${props => props.primary ? '1' : props.carousel ? '0.2' : null};
    position: ${props => props.carousel ? 'absolute' : null};
    left: ${props =>
		props.primary && props.first ? '0'
			: props.primary && props.last ? 'auto'
				/* left for 375px is 15% */
				: props.primary ? '12.5%'
					: null};
    right: ${props => props.last ? '0' : null};
    z-index: ${props => props.primary ? '1' : '0'};
`;

const EventImage = styled.img`
	border-radius: 5px 5px 0 0;
	height: 80px;
	width: 100%;
	object-fit: cover;
`;

const EventInfo = styled.div`
	background: ${lightBg};
	height: 200px;
	border-radius: 0 0 5px 5px;
	padding: 10px;
	text-align: left;
`;

const EventTitle = styled.h4`
	margin-top: 5px;
	color: ${green};
`;

const EventDescription = styled.h5`
	margin-top: 10px;
	color: white;
	font-weight: normal;
	font-size: ${fontP};
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
		color: ${green};
	}
`;

const EventButtons = styled.div`
	display: flex;
	justify-content: left;
	margin-top: 30px;
	width: 100%;
	padding-bottom: 5px;

	> .info,
	> .book {
		width: 43%;
		font-size: 12px;
		height: 30px;
		outline: none;
		border-radius: 5px;
	}

	> .info {
		margin-right: 18px;
		font-weight: bold;
		background: none;
		border: 1px solid ${green};
		a {
		color: ${green};
		text-decoration: none;
		}
	}

	> .book {
		background: ${green};
		border: none;
		color: ${darkBg};
	}

	> .book {
		background: ${green};
		border: none;
		color: ${lightBg};
	}
`;
