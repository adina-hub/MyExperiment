import React, { useEffect, useState } from 'react';
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
import { useParams } from 'react-router';
import { db } from '../../../firebase';

export default function NewEvent() {
	const { addEvent, editEvent } = useAuth();
	const id = useParams().id;
	const [event, setEvent] = useState({
		title: '',
		imgUrl: '',
		description: '',
		location: '',
		date: '',
		time: '',
		domains: [],
		places: '',
		steps: [],
		bookings: []
	})
	useEffect(() => {
		if (id && id !== "new") {
			const getEvent = async () => {
				await db.collection("events").doc(id).get().then(doc => setEvent(doc.data()));
			}
			getEvent();
		}
	}, []);
	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection>
				<PageTitle>New Event</PageTitle>
				<PageHR />
				<Formik
					enableReinitialize
					initialValues={{
						title: event.title,
						imgUrl: event.imgUrl,
						description: event.description,
						location: event.location,
						date: event.date,
						time: event.time,
						domains: event.domains,
						places: event.places,
						steps: event.steps,
						bookings: event.bookings
					}}
					onSubmit={(values) => {
						if (id) {
							editEvent(
								id,
								values.title,
								values.imgUrl,
								values.description,
								values.location,
								values.date,
								values.time,
								values.domains,
								values.places,
								values.steps,
								values.bookings
							)
						} else {
							addEvent(
								values.title,
								values.imgUrl,
								values.description,
								values.location,
								values.date,
								values.time,
								values.domains,
								values.places,
								values.steps,
								values.bookings
							)
						}
					}}
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

						<label id="date">Date</label>
						<PageInput name="date" type="text" required />

						<label id="time">Time</label>
						<PageInput name="time" type="text" required />

						<label id="domains">Domains</label>
						<TagsInput name="domains" type="text" required />

						<label id="places">Places available</label>
						<PageInput name="places" type="number" required />

						<label id="steps">Steps</label>
						<StepsInput name="steps" id="steps" required />

						<PageBtnContainer>
							<PageLinkBtn to="/admin/events">Go back</PageLinkBtn>
							{!id && <AdminAddBtn type="submit">ADD</AdminAddBtn>}
							{id && <AdminAddBtn type="submit">EDIT</AdminAddBtn>}
						</PageBtnContainer>
					</PageForm>
				</Formik>
			</PageSection>
		</PageContainer>
	);
}
