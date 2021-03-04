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
				<PageForm>
					<label>Name</label>
					<PageInput name="name" type="text" />

					<label>Subject</label>
					<PageInput name="subject" type="text" />

					<label>Message</label>
					<PageInput textarea="true" name="message" type="text" component="textarea" />

					<PageBtn marginTop type="submit">Submit</PageBtn>
				</PageForm>
			</Formik>
		</PageSection>
	);
}

