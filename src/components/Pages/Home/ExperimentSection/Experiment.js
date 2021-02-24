import React from 'react';
import styled from 'styled-components';
import {
	fontH2,
	fontH3,
	fontP,
	purple,
	turquoise
} from '../../../../globalStyles';
import { AiOutlineArrowRight } from 'react-icons/ai';

function Experiment() {
	return (
		<ExperimentContainer>
			<h2>What is Scientify?</h2>
			<h3>
				Here you can find physics related experiments. From mechanics to optics
				and fluids, all in one place, each of them having a video with
				explications from our teachers.
			</h3>
			<Button>
				Learn More
				<Icon />
			</Button>
		</ExperimentContainer>
	);
}

export default Experiment;

const ExperimentContainer = styled.div`
	height: 85vh;
	background: #31304c;
	text-align: center;
	padding: 0px 20px;

	> h2 {
		padding-top: 100px;
		color: ${turquoise};
		font-size: ${fontH2};
	}

	> h3 {
		color: white;
		font-size: ${fontH3};
		font-weight: normal;
		line-height: 23px;
		margin-top: 60px;
	}
`;

const Button = styled.button`
	width: 150px;
	height: 30px;
	border-radius: 5px;
	border: none;
	background: ${purple};
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin: 50px auto 0px auto;
	outline: none;
	color: white;
	font-weight: normal;
	font-size: ${fontP};
`;

const Icon = styled(AiOutlineArrowRight)`
	color: white;
`;
