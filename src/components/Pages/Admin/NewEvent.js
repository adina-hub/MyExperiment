import React from 'react';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';
import { Formik } from 'formik';
import {
	AdminAddBtn,
	PageBtnContainer,
	PageContainer,
	PageForm,
	PageHR,
	PageInput,
	PageLinkBtn,
	PageSection,
	PageTitle
} from '../../../globalStyles';

export default function NewEvent() {
	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection>
				<PageTitle>New Event</PageTitle>
				<PageHR />
				<Formik
					initialValues={{
						title: '',
						url: '',
						description: '',
						location: '',
						date: '',
						domains: '',
						placesAvb: '',
						steps: ''
					}}
					onSubmit={async (values) => {
						await new Promise((resolve) => setTimeout(resolve, 500));
						alert(JSON.stringify(values, null, 2));
					}}
				>
					<PageForm>
						<label id="title">Title</label>
						<PageInput name="title" type="text" required />

						<label id="url">Url</label>
						<PageInput name="url" type="text" required />

						<label id="description">Description</label>
						<PageInput name="description" type="text" required />

						<label id="location">Location</label>
						<PageInput name="location" type="text" required />

						<label id="date">Date time</label>
						<PageInput name="date" type="text" required />

						<label id="domains">Domains</label>
						<PageInput name="domains" type="text" required />

						<label id="placesAvb">Places available</label>
						<PageInput name="placesAvb" type="text" required />

						<label id="steps">Steps</label>
						<PageInput
							textarea="true"
							name="steps"
							type="text"
							component="textarea"
							required
						/>

						<PageBtnContainer>
							<PageLinkBtn to="/eventsList">Go back</PageLinkBtn>
							<AdminAddBtn type="submit">ADD</AdminAddBtn>
						</PageBtnContainer>
					</PageForm>
				</Formik>
			</PageSection>
		</PageContainer>
	);
}
