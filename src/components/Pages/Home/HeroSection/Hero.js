import React from 'react';
import styled from 'styled-components';
import {
	PageDescription,
	PageSection,
	PageTitle
} from '../../../../styles/general';
import backgroundImg from '../../../../images/background.jpg';

function Hero() {
	return (
		<HeroSection fullHeight>
			<HeroTitle white>Welcome to Scientify!</HeroTitle>
			<HeroDescription>
				A collection of experiments that demonstrate a wide range of physical
				concepts and processes. Try out these experiments and you’ll feel like a
				real scientist!
			</HeroDescription>
		</HeroSection>
	);
}

export default Hero;

const HeroSection = styled(PageSection)`
	background: url(${backgroundImg});
	background-size: cover;
	background-position: center;
`;

const HeroTitle = styled(PageTitle)`
	margin: 160px auto 0px auto;
`;

const HeroDescription = styled(PageDescription)`
	line-height: 23px;
	margin-top: 60px;
`;
