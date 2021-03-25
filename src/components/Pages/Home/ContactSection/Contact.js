import React from 'react';
import {
	PageTitle,
	PageSection,
	PageDescription,
	PageBtn,
	PageForm,
	PageInput
} from '../../../../styles/general';
import { Formik } from 'formik';
import { useAuth } from '../../../../context/AuthContext';

export default function Contact() {
	const { sendMessage } = useAuth();

	return (
		<PageSection>
			<PageTitle margin>Contact Us</PageTitle>
			<PageDescription margin>
				If you have any questions related to our activity, please don’t
				hesitate, write us a message.
			</PageDescription>
			<Formik
				enableReinitialize
				initialValues={{ name: '', email: '', subject: '', message: '' }}
				onSubmit={(values, { resetForm }) => {
					sendMessage(
						values.name,
						values.email,
						values.subject,
						values.message
					);
					alert('Message sent! Thank you!');
					resetForm();
				}}
			>
				<PageForm>
					<label>Name</label>
					<PageInput name="name" type="text" />

					<label>Email</label>
					<PageInput name="email" type="email" />

					<label>Subject</label>
					<PageInput name="subject" type="text" />

					<label>Message</label>
					<PageInput
						textarea="true"
						name="message"
						type="text"
						component="textarea"
					/>

					<PageBtn marginTop type="submit">
						Submit
					</PageBtn>
				</PageForm>
			</Formik>
		</PageSection>
	);
}
