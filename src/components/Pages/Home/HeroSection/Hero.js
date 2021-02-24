import React from 'react';
import styled from 'styled-components';
import { fontH2, fontH3 } from '../../../../globalStyles';
import backgroundImg from '../../../../images/background.jpg';

function Hero() {
	return (
		<HeroContainer>
			<h2>Welcome to Scientify!</h2>
			<h3>
				A collection of experiments that demonstrate a wide range of physical
				concepts and processes. Try out these experiments and you’ll feel like a
				real scientist!
			</h3>
		</HeroContainer>
	);
}

export default Hero;

const HeroContainer = styled.div`
	background: url(${backgroundImg});
	background-size: cover;
	background-position: center;
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 0px 20px;
	text-align: center;

	> h2 {
		margin: 160px auto 0px auto;
		font-size: ${fontH2};
		color: white;
	}

	> h3 {
		color: white;
		font-size: ${fontH3};
		font-weight: normal;
		line-height: 23px;
		margin-top: 60px;
	}
`;
