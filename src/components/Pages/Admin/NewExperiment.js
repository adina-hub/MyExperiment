import React from 'react';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';
import { Formik } from 'formik';
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

export default function NewExperiment() {
	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection>
				<PageTitle>New Experiment</PageTitle>
				<PageHR />
				<Formik
					initialValues={{
						title: '',
						url: '',
						domains: '',
						materials: '',
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

						<label id="domains">Domains</label>
						<PageInput name="domains" type="text" required />

						<label id="materials">Materials needed</label>
						<PageInput name="materials" type="text" required />

						<label id="steps">Steps</label>
						<PageInput
							textarea="true"
							component="textarea"
							name="steps"
							type="text"
							required
						/>

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

