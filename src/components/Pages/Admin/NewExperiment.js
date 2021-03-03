import React from 'react';
import styled from 'styled-components';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';
import { Form, Field, Formik } from 'formik';
import {
	fontH2,
	fontH3,
	lightBg,
	PageContainer,
	PageTitle,
	PageHR,
	PageSection,
	turquoise,
	PageForm,
	PageInput,
	PageBtnContainer,
	PageLinkBtn,
	AdminAddBtn
} from '../../../globalStyles';
import { Link } from 'react-router-dom';

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
							textArea
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

const NewExperimentContainer = styled.div`
	background: ${lightBg};
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 10px 16px;
	text-align: center;

	> h2 {
		margin: 80px auto 0px auto;
		font-size: ${fontH2};
		letter-spacing: 1px;
		color: ${turquoise};
	}

	> hr {
		width: 80%;
		height: 3px;
		background: #fff;
		margin: 24px auto;
	}
`;

const NewExperimentForm = styled(Form)`
	display: flex;
	flex-direction: column;

	> label {
		margin-top: 10px;
		font-size: 12px;
		font-weight: 400;
		padding: 5px;
		color: white;
		text-align: left;
	}

	> textarea {
		height: 120px;
		border-radius: 3px;
		overflow: scroll;
	}

	> .buttons {
		display: flex;
		height: 45px;
		justify-content: space-evenly;
		margin: 30px 0;
	}
`;

const Input = styled(Field)`
	border: none;
	width: 100%;
	height: 25px;
	border-radius: 3px;
	cursor: pointer;
	font-size: ${fontH3};
`;

const Button = styled(Link)`
	background: transparent;
	border: 2px solid ${turquoise};
	border-radius: 8px;
	padding: 12px 20px;
	width: 120px;
	text-decoration: none;
	color: white;
`;

const SubmitButton = styled.button`
	background: ${turquoise};
	border-radius: 8px;
	padding: 12px 20px;
	width: 100px;
	outline: none;
	border: none;
`;
