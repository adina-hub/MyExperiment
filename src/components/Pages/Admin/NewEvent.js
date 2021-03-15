import React from 'react';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';
import { Form, Formik } from 'formik';
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
} from '../../../styles/general';
import TagsInput from '../../Elements/TagInput/TagsInput';
import StepsInput from '../../Elements/StepsInput/StepsInput';
import { useAuth } from '../../../context/AuthContext';

export default function NewEvent() {
	const { addEvent } = useAuth();
	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection>
				<PageTitle>New Event</PageTitle>
				<PageHR />
				<Formik
					initialValues={{
						title: '',
						imgUrl: '',
						description: '',
						location: '',
						date: '',
						domains: [],
						places: '',
						steps: ''
					}}
					onSubmit={values => addEvent(
						values.title,
						values.imgUrl,
						values.description,
						values.location,
						values.date,
						values.domains,
						values.places,
						values.steps
					)}
				>
					<PageForm>
						<label id="title">Title</label>
						<PageInput name="title" type="text" required />

						<label id="imgUrl">Image URL</label>
						<PageInput name="imgUrl" type="text" required />

						<label id="description">Description</label>
						<PageInput name="description" type="text" required />

						<label id="location">Location</label>
						<PageInput name="location" type="text" required />

						<label id="date">Date time</label>
						<PageInput name="date" type="text" required />

						<label id="domains">Domains</label>
						<TagsInput name="domains" type="text" required />

						<label id="places">Places available</label>
						<PageInput name="places" type="number" required />

						<label id="steps">Steps</label>
						<StepsInput name="steps" id="steps" required />

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
