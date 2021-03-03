import React from 'react';
import styled from 'styled-components';
import {
	fontP,
	PageSection,
	PageTitle,
	PageDescription,
	green,
	darkBg
} from '../../../../globalStyles';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Experiment() {
	return (
		<PageSection fullHeight light>
			<PageTitle>What is Scientify?</PageTitle>
			<PageDescription margin>
				Here you can find physics related experiments. From mechanics to optics
				and fluids, all in one place, each of them having a video with
				explications from our teachers.
			</PageDescription>
			<Button>
				Learn More
				<Icon />
			</Button>
		</PageSection>
	);
}

const Button = styled.button`
	width: 150px;
	height: 30px;
	border-radius: 5px;
	border: none;
	background: ${green};
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin: 50px auto 0px auto;
	outline: none;
	color: ${darkBg};
	font-weight: normal;
	font-size: ${fontP};
`;

const Icon = styled(AiOutlineArrowRight)`
	color: ${darkBg};
`;
