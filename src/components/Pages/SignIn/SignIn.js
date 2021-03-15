import React from 'react';
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

export default function SignIn() {
	const { signIn } = useAuth();
	return (
		<AuthContainer>
			<AuthLogo src={logo} alt="" />
			<AuthFormContainer dark="true">
				<AuthTitle>Login</AuthTitle>
				<Formik
					initialValues={{ email: '', password: '' }}
					onSubmit={values => signIn(values.email, values.password)
					}
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
		</AuthContainer >
	);
}
