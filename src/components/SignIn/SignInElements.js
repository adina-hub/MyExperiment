import styled from 'styled-components';
import { BsPerson, BsLock } from 'react-icons/bs';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: #31304c;
`;

export const Logo = styled.img`
	width: 110px;
	height: 110px;
	margin-left: 8px;

	@media screen and (min-width: 768px) {
		width: 120px;
		height: 120px;
		margin-left: 17px;
	}

	@media screen and (min-width: 1024px) {
		width: 140px;
		height: 140px;
		margin-left: 30px;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 70px auto;
	height: 53vh;
	width: 85vw;
	border-radius: 8px;
	padding: 22px;
	background: #51a3b9;

	@media screen and (min-width: 375px) {
		width: 75vw;
	}

	@media screen and (min-width: 768px) {
		width: 45vw;
		height: 58vh;
		margin: 50px auto;
	}

	@media screen and (min-width: 1024px) {
		width: 35vw;
		height: 60vh;
		margin: 25px auto;
	}

	@media screen and (min-width: 1200px) {
		width: 30vw;
		height: 67vh;
		margin: 20px auto;
		padding: 25px;
	}
`;

export const FormH2 = styled.h2`
	font-size: 20px;
	color: #31304c;
	font-weight: 700;
	text-align: center;

	@media screen and (min-width: 1200px) {
		font-size: 22px;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const FormLabel = styled.div`
	margin-top: 10px;
	font-size: 13px;
	font-weight: 400;
	padding: 10px 5px;
	color: #333333;

	@media screen and (min-width: 768px) {
		font-size: 17px;
	}

	@media screen and (min-width: 1200px) {
		font-size: 18px;
	}
`;

export const FormInput = styled.div`
	display: flex;
	border: none;
	border-bottom: 1px solid #d9d9d9;
	padding: 10px 5px;
`;

export const UserIcon = styled(BsPerson)`
	color: white;
	margin-right: 10px;
`;

export const PassIcon = styled(BsLock)`
	color: white;
	margin-right: 10px;
`;

export const Input = styled.input`
	border: none;
	background: none;
	width: 100%;
	cursor: pointer;
	::placeholder {
		color: white;
		opacity: 0.6;
	}

	&:focus {
		outline: none;
		::placeholder {
			color: #51a3b9;
		}
	}

	@media screen and (min-width: 768px) {
		font-size: 15px;
	}

	@media screen and (min-width: 1200px) {
		font-size: 17px;
	}
`;

export const FLink = styled.a`
	margin-top: 10px;
	margin-bottom: 25px;
	opacity: 0.6;
	font-size: 12px;
	color: white;
	text-align: right;
	cursor: pointer;
	&:hover {
		color: blue;
		transition: 0.15s ease-in-out;
	}

	@media screen and (min-width: 768px) {
		margin-top: 13px;
		font-size: 16px;
	}

	@media screen and (min-width: 1024px) {
		margin-top: 17px;
	}
`;

export const NavBtnLink = styled.button`
	padding: 10px;
	border: none;
	border-radius: 12px;
	color: #fff;
	background: #31304c;
	font-size: 15px;
	cursor: pointer;
	text-decoration: none;
	text-align: center;
`;

export const Text = styled.div`
	display: flex;
	font-size: 13px;
	margin-top: 12px;
	justify-content: center;

	@media screen and (min-width: 768px) {
		margin-top: 30px;
		font-size: 16px;
	}
`;

export const Link = styled(LinkR)`
	margin-left: 7px;
	color: #31304c;
	cursor: pointer;
	font-weight: bold;
	text-decoration: none;
	&:hover {
		color: blue;
		transition: 0.15s ease-in-out;
	}
`;
