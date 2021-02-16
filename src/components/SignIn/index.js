import React from 'react';
import logo from '../../images/logo.svg';
import {
	Container,
	Logo,
	FormContainer,
	FormH2,
	Form,
	FormLabel,
	FormInput,
	UserIcon,
	Input,
	PassIcon,
	FLink,
	NavBtnLink,
	Text,
	Link
} from './SignInElements';

export const SignIn = () => {
	return (
		<>
			<Container>
				<Logo src={logo}></Logo>
				<FormContainer>
					<FormH2>Login</FormH2>
					<Form>
						<FormLabel id="email">Email</FormLabel>
						<FormInput>
							<UserIcon></UserIcon>
							<Input type="email" placeholder="Type your email" required />
						</FormInput>
						<FormLabel id="password">Password</FormLabel>
						<FormInput>
							<PassIcon></PassIcon>
							<Input
								type="password"
								placeholder="Type your password"
								required
							/>
						</FormInput>
						<FLink to="/">Forgot password?</FLink>
						<NavBtnLink type="submit">LOGIN</NavBtnLink>
						<Text>
							Need an account? <Link to="/signUp">Register</Link>
						</Text>
					</Form>
				</FormContainer>
			</Container>
		</>
	);
};
