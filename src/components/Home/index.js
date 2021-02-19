import React from 'react';
import { Navbar } from '../Navbar/index';
import place from '../../images/location.svg';
import time from '../../images/time.svg';
import img from '../../images/img.jpg';

import {
	PageContainer,
	Hero,
	HeroSection,
	TextH2,
	TextH3,
	Experiments,
	TitleH2,
	Button,
	ButtonText,
	Icon,
	Events,
	Carousel,
	Card,
	ImgContainer,
	Image,
	TextContainer,
	Title,
	Description,
	Info,
	Time,
	PlaceIcon,
	TimeIcon,
	Text,
	Buttons,
	InfoButton,
	BookButton
} from './HomeElements';

export const Home = () => {
	return (
		<>
			<PageContainer>
				<Navbar></Navbar>
				<Hero>
					<HeroSection>
						<TextH2>Welcome to Scientify!</TextH2>
						<TextH3>
							A collection of experiments that demonstrate a wide range of
							physical concepts and processes. Try out these experiments and
							you’ll feel like a real scientist!
						</TextH3>
					</HeroSection>
				</Hero>
				<Experiments>
					<TitleH2>What is Scientify?</TitleH2>
					<TextH3>
						Here you can find physics related experiments. From mechanics to
						optics and fluids, all in one place, each of them having a video
						with explications from our teachers.
					</TextH3>
					<Button>
						<ButtonText>Learn More</ButtonText>
						<Icon></Icon>
					</Button>
				</Experiments>
				<Events>
					<TitleH2>Dive into one of our favorite activities</TitleH2>
					<TextH3>
						Sign up for lots more activities sure to inspire curiosity in your
						pupils. It's free!
					</TextH3>
					<Carousel>
						<Card>
							<ImgContainer>
								<Image src={img} />
							</ImgContainer>
							<TextContainer>
								<Title>Optical Illusions</Title>
								<Description>
									Join us in the anual event about the optical illusions!{' '}
								</Description>
								<Info>
									<Time>
										<PlaceIcon src={place} />
										<Text>Illinois, SUA</Text>
									</Time>
									<Time>
										<TimeIcon src={time} />
										<Text>14 pm</Text>
									</Time>
								</Info>
								<Buttons>
									<InfoButton>More info</InfoButton>
									<BookButton>Book a place</BookButton>
								</Buttons>
							</TextContainer>
						</Card>
					</Carousel>
				</Events>
			</PageContainer>
		</>
	);
};
