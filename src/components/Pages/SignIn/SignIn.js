import React from 'react';
import logo from '../../../images/logo.svg';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { AuthBtn, AuthContainer, AuthForm, AuthFormContainer, AuthHelper, AuthInputContainer, AuthInputField, AuthLabel, AuthLink, AuthLogo, AuthTitle, MailIcon, PassIcon } from '../../../styles/auth';
export default function SignIn() {
	return (
		<AuthContainer>
			<AuthLogo src={logo} alt="" />
			<AuthFormContainer dark="true">
				<AuthTitle>Login</AuthTitle>
				<Formik
					initialValues={{ email: '', password: '' }}
					onSubmit={async (values) => {
						await new Promise((resolve) => setTimeout(resolve, 500));
						alert(JSON.stringify(values, null, 2));
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
								required />
						</AuthInputContainer>
						<AuthLabel>Password</AuthLabel>
						<AuthInputContainer>
							<PassIcon />
							<AuthInputField
								name="password"
								type="password"
								placeholder="Type your password"
								required />
						</AuthInputContainer>
						<AuthLink>Forgot password?</AuthLink>
						<AuthBtn type="submit">LOGIN</AuthBtn>
					</AuthForm>
				</Formik>
				<AuthHelper>Need an account?{' '}<Link>Register now</Link></AuthHelper>
			</AuthFormContainer>
		</AuthContainer>
	);
}


