import styled from 'styled-components';

// COLORS
export const purple = '#4d194d';
export const green = '#8BD8BD';
export const turquoise = '#51A3B9';

// BACKGROUNDS
export const lightBg = '#31304c';
export const darkBg = '#272640';

// FONTS
export const fontH1 = '25px';
export const fontH2 = '21px';
export const fontH3 = '15px';
export const fontP = '14px';
export const fontH5 = '10px';
//======CONTAINERS=========
export const PageContainer = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
`;

export const PageSection = styled.div`
	padding: 20px 12.5px;
	background: ${(props) => (props.dark ? darkBg : lightBg)};
	height: ${(props) => (props.fullHeight ? '100vh' : 'auto')};
`;
//=======COMPONENTS========

//Text
export const PageTitle = styled.h1`
	font-size: ${(props) => (props.small ? fontH2 : fontH1)};
	text-align: center;
	margin-top: ${(props) => (props.margin ? '50px' : '80px')};
	color: ${(props) => (props.white ? '#fff' : green)};
	letter-spacing: 1px;
`;

export const PageSubtitle = styled.h2`
	font-size: ${(props) => (props.small ? fontH3 : fontH2)};
	letter-spacing: 1px;
	text-align: left;
	color: ${green};
`;

export const PageDescription = styled.p`
	color: #fff;
	font-size: ${fontP};
	font-weight: normal;
	line-height: 25px;
	margin: ${(props) => (props.margin ? '40px' : '0px')} 0px;
`;

export const PageHR = styled.hr`
	width: 70%;
	height: 3px;
	background: #fff;
	margin: 24px auto;
`;

export const PageSubHR = styled.hr`
	margin-top: 5px;
	opacity: 15%;
	width: 85%;
`;

//Buttons
export const PageBtn = styled.button`
	outline: none;
	border: none;
	margin: auto;
	font-weight: bold;
	width: 60%;
	padding: 10px 15px;
	font-size: ${fontH3};
	background: ${green};
	color: ${lightBg};
	border-radius: 5px;
`;

export const PageAddBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: transparent;
	margin: 30px auto 0 auto;
	border: 2px solid ${green};
	border-radius: 5px;
	padding: 10px 20px;

	:focus {
		outline: none;
	}

	> p {
		color: #fff;
		margin-right: 10px;
		font-size: ${fontH3};
		letter-spacing: 1px;
	}

	> .MuiSvgIcon-root {
		fill: ${green};
	}
`;
//Inputs
