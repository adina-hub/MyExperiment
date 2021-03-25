import React, { useEffect, useState } from 'react';
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
import { useParams } from 'react-router';
import { db } from '../../../firebase';

export default function NewExperiment() {
	const { addExperiment, editExperiment } = useAuth();
	const id = useParams().id;
	const [experiment, setExperiment] = useState({
		domains: [],
		materials: [],
		steps: [],
		title: '',
		videoUrl: ''
	});
	useEffect(() => {
		if (id && id !== 'new') {
			const getExperiment = async () => {
				await db
					.collection('experiments')
					.doc(id)
					.get()
					.then((doc) => setExperiment(doc.data()));
			};
			getExperiment();
		}

		console.log(experiment);
	}, []);

	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection>
				<PageTitle>New Experiment</PageTitle>
				<PageHR />
				<Formik
					enableReinitialize
					initialValues={{
						title: experiment.title,
						videoUrl: experiment.videoUrl,
						domains: experiment.domains,
						materials: experiment.materials,
						steps: experiment.steps
					}}
					onSubmit={(values) => {
						if (id) {
							editExperiment(
								id,
								values.title,
								values.videoUrl,
								values.materials,
								values.domains,
								values.steps
							);
						} else {
							addExperiment(
								values.title,
								values.videoUrl,
								values.materials,
								values.domains,
								values.steps
							);
						}
					}}
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
							<PageLinkBtn to="/admin/experiments">Go back</PageLinkBtn>
							{id === 'new' && <AdminAddBtn type="submit">ADD</AdminAddBtn>}
							{id !== 'new' && <AdminAddBtn type="submit">EDIT</AdminAddBtn>}
						</PageBtnContainer>
					</PageForm>
				</Formik>
			</PageSection>
		</PageContainer>
	);
}
