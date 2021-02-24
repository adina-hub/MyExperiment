import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../../Elements/Navbar/index';
import place from '../../../images/location.svg';
import time from '../../../images/time.svg';
import img from '../../../images/img.jpg';
import backgroundImg from '../../../images/background.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { purple } from '../../../globalStyles';

function Home() {
	return (
		<>
			<HomeContainer>
				<Navbar></Navbar>
				<Hero>
					<TextH2>Welcome to Scientify!</TextH2>
					<TextH3>
						A collection of experiments that demonstrate a wide range of
						physical concepts and processes. Try out these experiments and
						you’ll feel like a real scientist!
					</TextH3>
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
				<Contact>
					<TitleH2>Contact Us</TitleH2>
					<TextH3>
						If you have any questions related to our activity, please don’t
						hesitate, write us a message.
					</TextH3>
					<Form>
						<InputBox>
							<Label>Name</Label>
							<Input></Input>
						</InputBox>
						<InputBox>
							<Label>Subject</Label>
							<Input></Input>
						</InputBox>
						<InputBox>
							<Label>Message</Label>
							<MessageInput></MessageInput>
						</InputBox>
					</Form>
				</Contact>
			</HomeContainer>
		</>
	);
}

export default Home;

export const HomeContainer = styled.div``;

export const Hero = styled.div`
	background: url(${backgroundImg});
	background-size: cover;
	background-position: center;
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 0px 20px;
	text-align: center;
`;

export const TextH2 = styled.h2`
	margin: 160px auto 0px auto;
	font-size: 23px;
	color: white;
`;
export const TextH3 = styled.h3`
	color: white;
	font-size: 16px;
	font-weight: normal;
	line-height: 23px;
	margin-top: 60px;
`;

export const Experiments = styled.div`
	height: 85vh;
	background: #31304c;
	text-align: center;
	padding: 0px 20px;
`;

export const TitleH2 = styled.h2`
	padding-top: 120px;
	font-size: 23px;
	color: #51a3b9;
`;

export const Button = styled.button`
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
`;

export const ButtonText = styled.h3`
	color: white;
	font-weight: normal;
	font-size: 13px;
`;

export const Icon = styled(AiOutlineArrowRight)`
	color: white;
`;

export const Events = styled.div`
	height: 100vh;
	background: #272640;
	text-align: center;
	padding: 0px 20px;
`;

export const Carousel = styled.div``;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	margin: 50px auto;
	width: 230px;
	height: 260px;
	background: grey;
	border-radius: 5px;
`;

export const ImgContainer = styled.div`
	background: black;
	border-radius: 5px 5px 0 0;
	height: 80px;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 5px 5px 0 0;
	filter: saturate(0);
`;

export const TextContainer = styled.div`
	background: #51a3b9;
	height: 200px;
	border-radius: 0 0 5px 5px;
	padding: 10px;
	text-align: left;
`;
export const Title = styled.h4`
	margin-top: 5px;
	color: #4d194d;
`;
export const Description = styled.h4`
	margin-top: 10px;
	color: white;
	font-weight: normal;
	font-size: 12px;
`;
export const Info = styled.div`
	display: flex;
	margin-top: 20px;
`;
export const Time = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	width: 100%;
`;
export const PlaceIcon = styled.img`
	width: 25px;
	height: 25px;
`;
export const TimeIcon = styled.img`
	width: 25px;
	height: 25px;
`;
export const Text = styled.h4`
	color: #4d194d;
	font-size: 12px;
	font-weight: normal;
	margin-left: 3px;
`;
export const Buttons = styled.div`
	display: flex;
	justify-content: left;
	margin-top: 30px;
	width: 100%;
`;
export const InfoButton = styled.button`
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
export const BookButton = styled.button`
	width: 43%;
	height: 30px;
	font-size: 12px;
	background: #4d194d;
	outline: none;
	border-radius: 8px;
	border: none;
	color: white;
`;

export const Contact = styled.div`
	height: auto;
	background: #31304c;
	text-align: center;
	padding: 0px 20px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	height: 60vh;
`;
export const InputBox = styled.div`
	display: flex;
	flex-direction: column;
`;
export const Label = styled.label``;
export const Input = styled.input``;
export const MessageInput = styled.input``;
