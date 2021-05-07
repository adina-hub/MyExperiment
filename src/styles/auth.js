import styled from 'styled-components';
import { Field, Form } from 'formik';
import { darkBg, fontH1, fontH3, fontP, green, lightBg } from './general';
import { Link } from 'react-router-dom';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
//Containers
export const AuthContainer = styled.div`
	display: flex;
	flex-direction: column;
	background: ${darkBg};
	height: 100vh;

`;

export const AuthFormContainer = styled.div`
	background: ${lightBg};
	width: 85%;
	padding: ${(props) => (props.padding ? '15px' : '30px')} 20px;
	margin: ${(props) => (props.margin ? '0px' : '30px')} auto;
	border-radius: 15px;

	@media screen and (min-width: 425px) {
		width: 75%;
	}

	@media screen and (min-width: 768px) {
		width: 50%;
		padding: ${(props) => (props.padding ? '20px' : '35px')} 20px;
	}

	@media screen and (min-width: 1024px) {
		width: 40%;
		padding: ${(props) => (props.padding ? '20px' : '35px')} 20px;
	}
`;

export const AuthInputContainer = styled.div`
	display: flex;
	border: none;
	border-bottom: 1px solid #d9d9d9;
	padding: 10px 5px;
`;

//Form
export const AuthForm = styled(Form)`
	display: flex;
	flex-direction: column;
`;

export const AuthLabel = styled.label`
	margin-top: 10px;
	font-size: 12px;
	font-weight: 400;
	padding: 5px;
	color: ${green};
	font-size: ${fontH3};
`;

export const AuthInputField = styled(Field)`
	border: none;
	background: none;
	width: 100%;
	cursor: pointer;
	caret-color: ${green};
	color: white;
	::placeholder {
		color: white;
		opacity: 0.6;
	}

	&:focus {
		outline: none;
		::placeholder {
			color: gray;
		}
	}
`;

//Logo

export const AuthLogo = styled.img`
	width: 130px;
	height: 110px;
	margin-left: 8px;

	@media screen and (min-width: 768px) {
		width: 150px;
		height: 120px;
		margin-left: 17px;
	}

	@media screen and (min-width: 1024px) {
		height: 130px;
		margin-left: 30px;
	}
`;

//Icons

export const MailIcon = styled(MailOutlineOutlinedIcon)`
	color: ${green};
	margin-right: 10px;
`;

export const NameIcon = styled(PersonOutlineIcon)`
	color: ${green};
	margin-right: 10px;
`;

export const PassIcon = styled(LockOutlinedIcon)`
	color: ${green};
	margin-right: 10px;
`;

//Others
export const AuthTitle = styled.h1`
	font-size: ${fontH1};
	color: ${green};
	font-weight: 700;
	text-align: center;
`;

export const AuthLink = styled(Link)`
	color: ${green};
	text-decoration: none;
	text-align: center;
	margin: 20px auto;
	font-size: ${fontP};
	letter-spacing: 1px;
`;

export const AuthBtn = styled.button`
	padding: 10px;
	border: 2px solid ${green};
	border-radius: 15px;
	color: ${green};
	background: transparent;
	font-size: ${fontH3};
	text-align: center;
	margin-top: ${(props) => (props.marginTop ? '30px' : '0')};
`;

export const AuthHelper = styled.p`
	font-size: 12px;
	margin-top: 20px;
	color: white;
	text-align: center;

	> a {
		text-decoration: none;
		color: ${green};
	}

	@media screen and (min-width: 768px) {
		font-size: ${fontP};
	}
`;
