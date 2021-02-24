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

function Events() {
	return (
		<EventsContainer>
			<h2>Dive into one of our favorite activities</h2>
			<h3>
				Sign up for lots more activities sure to inspire curiosity in your
				pupils. It's free!
			</h3>
			<div class="carrousel">
				<div class="card">
					<ImageContainer>
						<img src={img} alt="" />
					</ImageContainer>
					<TextContainer>
						<h4>Optical Illusions</h4>
						<h5> Join us in the anual event about the optical illusions! </h5>
						<Info>
							<Time>
								<PlaceIcon src={place} />
								<h5>Illinois, SUA</h5>
							</Time>
							<Time>
								<TimeIcon src={time} />
								<h5>14 pm</h5>
							</Time>
						</Info>
						<div class="buttons">
							<InfoButton>More info</InfoButton>
							<BookButton>Book a place</BookButton>
						</div>
					</TextContainer>
				</div>
			</div>
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

const ImageContainer = styled.div`
	background: black;
	border-radius: 5px 5px 0 0;
	height: 80px;

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px 5px 0 0;
		filter: saturate(0);
	}
`;

const TextContainer = styled.div`
	background: #51a3b9;
	height: 200px;
	border-radius: 0 0 5px 5px;
	padding: 10px;
	text-align: left;

	> h4 {
		margin-top: 5px;
		color: ${purple};
	}

	> h5 {
		margin-top: 10px;
		color: white;
		font-weight: normal;
		font-size: ${fontH5};
	}

	> .buttons {
		display: flex;
		justify-content: left;
		margin-top: 30px;
		width: 100%;
	}
`;

const Info = styled.div`
	display: flex;
	margin-top: 20px;
`;

const Time = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	width: 100%;

	> h5 {
		margin-left: 8px;
	}
`;

const PlaceIcon = styled.img`
	width: 25px;
	height: 25px;
`;

const TimeIcon = styled.img`
	width: 25px;
	height: 25px;
`;

const InfoButton = styled.button`
	width: 43%;
	font-size: 12px;
	margin-right: 18px;
	height: 30px;
	color: #4d194d;
	font-weight: bold;
	background: none;
	border-color: #4d194d;
	border-radius: 8px;
	outline: none;
`;

const BookButton = styled.button`
	width: 43%;
	height: 30px;
	font-size: 12px;
	background: #4d194d;
	outline: none;
	border-radius: 8px;
	border: none;
	color: white;
`;
