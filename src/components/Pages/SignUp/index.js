import React from 'react';
import logo from '../../../images/logo.svg';

import {
	Container,
	Logo,
	FormH2,
	Form,
	FormInput,
	UserIcon,
	Input,
	PassIcon,
	NavBtnLink,
	Link
} from '../SignIn/SignInElements';
import { FormContainer, FormLabel, FLink, Text } from './SignUpElements';

export const SignUp = () => {
	return (
		<>
			<Container>
				<Logo src={logo}></Logo>
				<FormContainer>
					<FormH2>Register</FormH2>
					<Form>
						<FormLabel id="email">Email</FormLabel>
						<FormInput>
							<UserIcon></UserIcon>
							<Input type="email" placeholder="Type your email" required />
						</FormInput>
						<FormLabel id="email">Name</FormLabel>
						<FormInput>
							<UserIcon></UserIcon>
							<Input type="text" placeholder="Type your name" required />
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
						<FormLabel id="password">Password</FormLabel>
						<FormInput>
							<PassIcon></PassIcon>
							<Input
								type="password"
								placeholder="Re-type your password"
								required
							/>
						</FormInput>
						<FLink to="/">Forgot password?</FLink>
						<NavBtnLink type="submit">LOGIN</NavBtnLink>
						<Text>
							Already have an account? <Link to="/">Sign In</Link>
						</Text>
					</Form>
				</FormContainer>
			</Container>
		</>
	);
};
