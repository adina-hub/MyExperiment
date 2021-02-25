import React from 'react';
import styled from 'styled-components';
import { fontH2, lightBg } from '../../../../globalStyles';
import { Navbar } from '../../../Elements/Navbar';

function Experiment({ id }) {
	return (
		<ExperimentContainer>
			<Navbar></Navbar>
			<ExperimentTitle>How to make a sandwich</ExperimentTitle>
			<ExperimentVideo
				src="https://www.youtube.com/embed/S_1_ZSMxRfg"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			/>
		</ExperimentContainer>
	);
}

const ExperimentContainer = styled.div`
	background: ${lightBg};
	display: flex;
	height: 100vh;
	flex-direction: column;
`;

const ExperimentTitle = styled.h2`
	font-size: ${fontH2};
	color: #fff;
	text-align: center;
	margin-top: 80px;
`;

const ExperimentVideo = styled.iframe`
	width: 280px;
	height: 200px;
	border-radius: 20px;
	margin: 20px auto 0 auto;
`;

export default Experiment;
