import React from 'react';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';
import { Formik } from 'formik';
import TagsInput from '../../Elements/TagInput/TagsInput';
import StepsInput from '../../Elements/StepsInput/StepsInput';
import {
	PageContainer,
	PageTitle,
	PageHR,
	PageSection,
	PageForm,
	PageInput,
	PageBtnContainer,
	PageLinkBtn,
	AdminAddBtn
} from '../../../styles/general';
import { useAuth } from '../../../context/AuthContext';

export default function NewExperiment() {
	const { addExperiment } = useAuth();

	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection>
				<PageTitle>New Experiment</PageTitle>
				<PageHR />
				<Formik
					initialValues={{
						title: '',
						videoUrl: '',
						materials: '',
						domains: [],
						steps: ''
					}}
					onSubmit={values => addExperiment(
						values.title,
						values.videoUrl,
						values.materials,
						values.domains,
						values.steps
					)}
				>
					<PageForm>
						<label id="title">Title</label>
						<PageInput name="title" type="text" required />

						<label id="videoUrl">Url</label>
						<PageInput name="videoUrl" type="text" required />

						<label id="domains">Domains</label>
						<TagsInput name="domains" type="text" required />

						<label id="materials">Materials needed</label>
						<StepsInput name="materials" type="text" required />

						<label id="steps">Steps</label>
						<StepsInput name="steps" id="steps" required />

						<PageBtnContainer>
							<PageLinkBtn to="/experimentsList">Go back</PageLinkBtn>
							<AdminAddBtn type="submit">ADD</AdminAddBtn>
						</PageBtnContainer>
					</PageForm>
				</Formik>
			</PageSection>
		</PageContainer>
	);
}

