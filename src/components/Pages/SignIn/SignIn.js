import React from 'react';
import logo from '../../../images/logo.svg';
import styled from 'styled-components';
import {
	fontH3,
	lightBg,
	fontH2,
	fontH5,
	fontP,
	turquoise
} from '../../../globalStyles';
import { Form, Field, Formik } from 'formik';
import { BsPerson, BsLock } from 'react-icons/bs';
import { Link as LinkR } from 'react-router-dom';

function SignIn() {
	return (
		<>
			<Container>
				<img src={logo} alt="" />
				<div className="formContainer">
					<h3>Login</h3>
					<Formik
						initialValues={{ email: '', password: '' }}
						onSubmit={async (values) => {
							await new Promise((resolve) => setTimeout(resolve, 500));
							alert(JSON.stringify(values, null, 2));
						}}
					>
						<SignInForm>
							<label id="email">Email</label>
							<InputField>
								<UserIcon></UserIcon>
								<Input
									name="email"
									type="email"
									placeholder="Type your email"
									required
								/>
							</InputField>

							<label id="password">Password</label>
							<InputField>
								<PassIcon></PassIcon>
								<Input
									name="password"
									type="password"
									placeholder="Type your password"
									required
								/>
							</InputField>

							<a href="/">Forgot password?</a>
							<button type="submit">LOGIN</button>
							<div className="text">
								Need an account? <Link href="/signUp">Register</Link>
							</div>
						</SignInForm>
					</Formik>
				</div>
			</Container>
		</>
	);
}

export default SignIn;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-color: ${lightBg};

	> img {
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
	}

	> .formContainer {
		display: flex;
		flex-direction: column;
		margin: 70px auto;
		height: 53vh;
		width: 85vw;
		border-radius: 8px;
		padding: 22px;
		background: ${turquoise};

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

		> h3 {
			font-size: ${fontH3};
			color: ${lightBg};
			font-weight: 700;
			text-align: center;

			@media screen and (min-width: 1200px) {
				font-size: ${fontH2};
			}
		}
	}
`;

const SignInForm = styled(Form)`
	display: flex;
	flex-direction: column;

	> label {
		margin-top: 10px;
		font-size: ${fontH5};
		font-weight: 400;
		padding: 10px 5px;
		color: #333333;

		@media screen and (min-width: 768px) {
			font-size: ${fontH3};
		}

		@media screen and (min-width: 1200px) {
			font-size: ${fontH3};
		}
	}

	> a {
		margin-top: 10px;
		margin-bottom: 25px;
		opacity: 0.6;
		font-size: ${fontH5};
		color: white;
		text-align: right;
		cursor: pointer;
		&:hover {
			color: blue;
			transition: 0.15s ease-in-out;
		}

		@media screen and (min-width: 768px) {
			margin-top: 13px;
			font-size: ${fontH3};
		}

		@media screen and (min-width: 1024px) {
			margin-top: 17px;
		}
	}

	> button {
		padding: 10px;
		border: none;
		border-radius: 12px;
		color: #fff;
		background: ${lightBg};
		font-size: ${fontP};
		cursor: pointer;
		text-decoration: none;
		text-align: center;
	}

	> .text {
		display: flex;
		font-size: ${fontH5};
		margin-top: 12px;
		justify-content: center;

		@media screen and (min-width: 768px) {
			margin-top: 30px;
			font-size: ${fontH3};
		}
	}
`;

const InputField = styled.div`
	display: flex;
	border: none;
	border-bottom: 1px solid #d9d9d9;
	padding: 10px 5px;
`;

const UserIcon = styled(BsPerson)`
	color: white;
	margin-right: 10px;
`;

const Input = styled(Field)`
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
			color: ${turquoise};
		}
	}

	@media screen and (min-width: 768px) {
		font-size: ${fontP};
	}

	@media screen and (min-width: 1200px) {
		font-size: ${fontH3};
	}
`;

const PassIcon = styled(BsLock)`
	color: white;
	margin-right: 10px;
`;

const Link = styled(LinkR)`
	margin-left: 7px;
	color: ${lightBg};
	cursor: pointer;
	font-weight: bold;
	text-decoration: none;
	&:hover {
		color: blue;
		transition: 0.15s ease-in-out;
	}
`;
