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
	AuthLogo,
	AuthTitle,
	MailIcon,
} from '../../../styles/auth';
import { useAuth } from '../../../context/AuthContext';
import { green, purple, fontH3 } from '../../../styles/general';

export default function ForgotPassword() {
	const { resetPassword, currentUser } = useAuth();
	const [error, setError] = useState(''); 

	return (
		<AuthContainer>
			{console.log(currentUser)}
			<Link to="/">
				<AuthLogo src={logo} alt="" />
			</Link>
			<AuthFormContainer dark="true">
				<AuthTitle>Reset Password</AuthTitle>
				{error && <Alert>{error}</Alert>}
				<Formik
					initialValues={{ email: ''}}
					onSubmit={async (values, { resetForm }) => {
						try {
							setError('An email has been sent.');
							await resetPassword(values.email);
                            
						} catch {
							setError('Incorrect email. Try again!');
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
						<AuthBtn type="submit" marginTop>RESET</AuthBtn>
					</AuthForm>
				</Formik>
				<AuthHelper>
					Already have an account? <Link to="/signin">Log In</Link>
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
	height: 50px;
	border-radius: 4px;
`;
