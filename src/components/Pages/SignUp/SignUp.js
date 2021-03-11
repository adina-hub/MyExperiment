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
	NameIcon,
	PassIcon
} from '../../../styles/auth';
import { useAuth } from '../../../context/AuthContext';

export default function SignUp() {
	const { signUp } = useAuth();
	return (
		<AuthContainer>
			<AuthLogo src={logo} alt="" />
			<AuthFormContainer dark="true" padding margin>
				<AuthTitle>Register</AuthTitle>
				<Formik
					initialValues={{ email: '', name: '', password: '', password2: '' }}
					onSubmit={values => signUp(values.email, values.password, values.name)}
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

						<AuthLink>Forgot password?</AuthLink>
						<AuthBtn type="submit">REGISTER</AuthBtn>
					</AuthForm>
				</Formik>
				<AuthHelper>
					Already have an account? <Link to="/signin">Sign In</Link>
				</AuthHelper>
			</AuthFormContainer>
		</AuthContainer>
	);
}
