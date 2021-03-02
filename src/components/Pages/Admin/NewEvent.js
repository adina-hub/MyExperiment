import React from 'react';
import styled from 'styled-components';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';
import { Form, Field, Formik } from 'formik';
import { fontH2, fontH3, lightBg, turquoise } from '../../../globalStyles';
import { Link } from 'react-router-dom';

export default function NewEvent() {
	return (
		<div>
			<AdminNavbar />
			<NewEventContainer>
				<h2>New Event</h2>
				<hr />
				<Formik
					initialValues={{
						title: '',
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
					<NewEventForm>
						<label id="title">Title</label>
						<Input name="title" type="text" required />

						<label id="description">Description</label>
						<Input name="description" type="text" required />

						<label id="location">Location</label>
						<Input name="location" type="text" required />

						<label id="date">Date time</label>
						<Input name="date" type="text" required />

						<label id="domains">Domains</label>
						<Input name="domains" type="text" required />

						<label id="placesAvb">Places available</label>
						<Input name="placesAvb" type="text" required />

						<label id="steps">Steps</label>
						<Input component="textarea" name="steps" type="text" required />

						<div class="buttons">
							<Button to="/eventsList">Go back</Button>
							<SubmitButton type="submit">ADD</SubmitButton>
						</div>
					</NewEventForm>
				</Formik>
			</NewEventContainer>
		</div>
	);
}

const NewEventContainer = styled.div`
	background: ${lightBg};
	height: auto;
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

const NewEventForm = styled(Form)`
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
