import React from 'react';
import styled from 'styled-components';
import img from '../../../../images/img.jpg';
import place from '../../../../images/location.svg';
import time from '../../../../images/time.svg';
import {
	darkBg,
	fontH2,
	fontH3,
	fontH5,
	purple,
	turquoise
} from '../../../../globalStyles';
import Event from '../../../Elements/Event/Event';

function Events() {
	return (
		<EventsContainer>
			<h2>Dive into one of our favorite activities</h2>
			<h3>
				Sign up for lots more activities sure to inspire curiosity in your
				pupils. It's free!
			</h3>
			<Event title="Optical Illusions"
				img={img}
				description="Join us in the anual event about the optical illusions! "
				location="Illinois, SUA"
				time="4 pm"
			/>
		</EventsContainer>
	);
}

export default Events;

const EventsContainer = styled.div`
	height: 100vh;
	background: ${darkBg};
	text-align: center;
	padding: 0px 20px;

	> h2 {
		padding-top: 80px;
		color: ${turquoise};
		font-size: ${fontH2};
	}

	> h3 {
		color: white;
		font-size: ${fontH3};
		font-weight: normal;
		line-height: 23px;
		margin-top: 40px;
	}

	> .carrousel {
		> .card {
			display: flex;
			flex-direction: column;
			margin: 50px auto;
			width: 250px;
			height: 260px;
			background: grey;
			border-radius: 5px;
		}
	}
`;

const PlaceIcon = styled.img`
	
`;

const TimeIcon = styled.img`
	width: 25px;
	height: 25px;
`;


