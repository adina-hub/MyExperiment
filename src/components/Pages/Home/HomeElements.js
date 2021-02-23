import styled from 'styled-components';
import backgroundImg from '../../../images/background.jpg';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const PageContainer = styled.div``;

export const Hero = styled.div`
	background: url(${backgroundImg});
	background-size: cover;
	background-position: center;
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

export const HeroSection = styled.div`
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
	background: #4d194d;
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
