import React, { useState } from 'react';
import logo from '../../../images/logo.svg';
import styled from 'styled-components';
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
	AuthLogo,
	AuthTitle,
	MailIcon,
	NameIcon,
	PassIcon
} from '../../../styles/auth';
import { green, purple } from '../../../styles/general';
import { useAuth } from '../../../context/AuthContext';

export default function SignUp() {
	const { signUp } = useAuth();
	const [error, setError] = useState('');

	return (
		<AuthContainer>
			<Link to="/">
				<AuthLogo src={logo} alt="" />
			</Link>
			<AuthFormContainer dark="true" padding margin>
				<AuthTitle>Register</AuthTitle>
				{error && <Alert>{error}</Alert>}
				<Formik
					initialValues={{ email: '', name: '', password: '', password2: '' }}
					onSubmit={async (values, { resetForm }) => {
						if (values.password !== values.password2) {
							return setError('Passwords do not match');
						}
						try {
							setError('');
							await signUp(values.email, values.password, values.name);
						} catch {
							setError('Failed to create an account');
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

						<AuthLabel>Name</AuthLabel>
						<AuthInputContainer>
							<NameIcon />
							<AuthInputField
								name="name"
								type="name"
								placeholder="Type your name"
								required
							/>
						</AuthInputContainer>

						<AuthLabel>Password</AuthLabel>
						<AuthInputContainer>
							<NameIcon />
							<AuthInputField
								name="password"
								type="password"
								placeholder="Type your password"
								required
							/>
						</AuthInputContainer>

						<AuthLabel>Password</AuthLabel>
						<AuthInputContainer>
							<PassIcon />
							<AuthInputField
								name="password2"
								type="password"
								placeholder="Re-type your password"
								required
							/>
						</AuthInputContainer>

						<AuthBtn marginTop type="submit">
							REGISTER
						</AuthBtn>
					</AuthForm>
				</Formik>
				<AuthHelper>
					Already have an account? <Link to="/signin">Sign In</Link>
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
