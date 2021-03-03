import React from 'react';
import styled from 'styled-components';
import { turquoise, fontH2, fontH3, PageBtn } from '../../../../globalStyles';
import { Form, Field, Formik } from 'formik';

export default function Contact() {
	return (
		<PageSection fullHeight>
			<PageTitle margin>Contact Us</PageTitle>
			<PageDescription margin>
				If you have any questions related to our activity, please don’t
				hesitate, write us a message.
			</PageDescription>
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
					<MessageField name="message" type="text" component="textarea" />

					<PageBtn type="submit">Submit</PageBtn>
				</ContactForm>
			</Formik>
		</PageSection>
	);
}

const ContactForm = styled(Form)`
	display: flex;
	flex-direction: column;
	height: 60vh;

	> label {
		text-align: left;
		color: white;
		margin: 10px 0px;
	}
`;

const ContactField = styled(Field)`
	background: none;
	outline: none;
	border: 1px solid ${turquoise};
	border-radius: 5px;
	height: 30px;
	color: white;
`;

const MessageField = styled(Field)`
	background: none;
	outline: none;
	border: 1px solid ${turquoise};
	border-radius: 5px;
	height: 140px;
	color: white;
`;
