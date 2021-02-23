import styled from 'styled-components'
import { darkBg, fontSizeH2, fontSizeP, lightBg, purple, turqBg, turquoise } from '../../../globalStyles';

export const PageContainer = styled.div``;

export const Hero = styled.div`
	background: ${lightBg};
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 0px 12.5px;
	text-align: center;
`;

export const Category = styled.div`
    background: ${darkBg};
    height: 100vh;
    display: flex;
	flex-direction: column;
    padding: 30px 20px;
`;

export const ExperimentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
`;

export const Experiment = styled.div`
    display: flex;
    background: ${turqBg};
    color: ${purple};
`;


export const TextH2 = styled.h2`
    margin: 80px auto 0px auto;
	font-size: ${fontSizeH2};
    letter-spacing: 1px;
	color: ${turquoise};
`;

export const TextH3 = styled.h3`
	font-size: ${fontSizeH2};
    letter-spacing: 1px;
    text-align: left;
	color: #FFF;
`;

export const TextP = styled.h3`
	color: white;
	font-size: ${fontSizeP};
	font-weight: normal;
	line-height: 25px;
`;

export const HR = styled.hr`
    width: 70%;
    height: 3px;
    background: #FFF;
    margin: 24px auto;
`;