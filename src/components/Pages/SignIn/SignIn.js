import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../../images/logo.svg';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import {
	AuthBtn,
	AuthContainer,
	AuthForm,
	AuthFormContainer,
	AuthHelper,
	AuthInputContainer,
	AuthInputField,
	AuthLabel,
	AuthLink,
	AuthLogo,
	AuthTitle,
	MailIcon,
	PassIcon
} from '../../../styles/auth';
import { useAuth } from '../../../context/AuthContext';
import { green, purple } from '../../../styles/general';

export default function SignIn() {
	const { signIn, currentUser } = useAuth();
	const [error, setError] = useState('');

	return (
		<AuthContainer>
			{console.log(currentUser)}
			<Link to="/">
				<AuthLogo src={logo} alt="" />
			</Link>
			<AuthFormContainer dark="true">
				<AuthTitle>Login</AuthTitle>
				{error && <Alert>{error}</Alert>}
				<Formik
					initialValues={{ email: '', password: '' }}
					onSubmit={async (values, { resetForm }) => {
						try {
							setError('');
							await signIn(values.email, values.password);
						} catch {
							setError('Incorrect username or password. Try again!');
							setTimeout(resetForm, 2000);
							setTimeout(setError, 2000);
						}
					}}
				>
					<AuthForm>
						<AuthLabel>Email</AuthLabel>
						<AuthInputContainer>
							<MailIcon />
							<AuthInputField
								name="email"
								type="email"
								placeholder="Type your email"
								required
							/>
						</AuthInputContainer>
						<AuthLabel>Password</AuthLabel>
						<AuthInputContainer>
							<PassIcon />
							<AuthInputField
								name="password"
								type="password"
								placeholder="Type your password"
								required
							/>
						</AuthInputContainer>
						<AuthLink>Forgot password?</AuthLink>
						<AuthBtn type="submit">LOGIN</AuthBtn>
					</AuthForm>
				</Formik>
				<AuthHelper>
					Need an account? <Link to="/signup">Register now</Link>
				</AuthHelper>
			</AuthFormContainer>
		</AuthContainer>
	);
}

export const Alert = styled.div`
	padding: 15px;
	background-color: ${green};
	color: ${purple};
	margin: 10px 0;
	height: 45px;
	border-radius: 4px;
`;
