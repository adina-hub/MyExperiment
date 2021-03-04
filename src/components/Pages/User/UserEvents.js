import React from 'react';
import {
	PageContainer,
	PageSection,
	PageTitle,
	PageHR,
	PageLinkBtn,
	green,
	PageBtnContainer,
	EventsList
} from '../../../styles/general';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';
import ListItem from '../../Elements/ListItem/ListItem';

export default function UserEvents() {
	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection fullHeight>
				<PageTitle>Events</PageTitle>
				<PageHR />
				<EventsList>
					<ListItem name="Event One" url="/events/dadasd" />
					<ListItem name="Event Two" url="/events/dadasd" />
					<ListItem name="Event Three" url="/events/dadasd" />
				</EventsList>
				<PageBtnContainer>
					<PageLinkBtn to="/user">Go back</PageLinkBtn>
				</PageBtnContainer>
			</PageSection>
		</PageContainer>
	);
}
