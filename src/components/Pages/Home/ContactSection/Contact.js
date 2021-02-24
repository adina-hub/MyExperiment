import React from 'react';
import styled from 'styled-components';
import { turquoise, fontH2, fontH3, fontH5 } from '../../../../globalStyles';
import { Form, Field, Formik } from 'formik';

function Contact() {
	return (
		<ContactContainer>
			<h2>Contact Us</h2>
			<h3>
				If you have any questions related to our activity, please don’t
				hesitate, write us a message.
			</h3>
			<Formik
				initialValues={{ name: '', subject: '', message: '' }}
				onSubmit={async (values) => {
					await new Promise((resolve) => setTimeout(resolve, 500));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				<ContactForm>
					<label>Name</label>
					<ContactField name="name" type="text" />

					<label>Subject</label>
					<ContactField name="subject" type="text" />

					<label>Message</label>
					<MessageField name="message" type="text" />
					<button type="submit">Submit</button>
				</ContactForm>
			</Formik>
		</ContactContainer>
	);
}

export default Contact;

const ContactContainer = styled.div`
	height: auto;
	background: #31304c;
	text-align: center;
	padding: 0px 20px;

	> h2 {
		padding-top: 80px;
		color: ${turquoise};
		font-size: ${fontH2};
	}

	> h3 {
		color: white;
		font-size: ${fontH3};
		font-weight: normal;
		line-height: 23px;
		margin: 30px 0;
	}
`;

const ContactForm = styled(Form)`
	display: flex;
	flex-direction: column;
	height: 60vh;

	> label {
		text-align: left;
		color: white;
		margin: 10px 0px;
	}

	> button {
		width: 43%;
		height: 30px;
		font-size: ${fontH5};
		background: #4d194d;
		outline: none;
		border-radius: 8px;
		border: none;
		color: white;
		margin: auto;
	}
`;

const ContactField = styled(Field)`
	background: none;
	outline: none;
	border: 1px solid ${turquoise};
	border-radius: 5px;
	height: 30px;
`;

const MessageField = styled(Field)`
	background: none;
	outline: none;
	border: 1px solid ${turquoise};
	border-radius: 5px;
	height: 140px;
`;
