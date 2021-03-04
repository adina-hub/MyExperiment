import React from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import {
	PageContainer,
	PageSection,
	PageTitle,
	PageHR,
	PageLinkBtn,
	green,
	PageBtnContainer
} from '../../../styles/general';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';
import ListItem from '../../Elements/ListItem/ListItem';

export default function AdminEvents() {
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
					<PageLinkBtn to="/admin">Go back</PageLinkBtn>
					<EventsAddButton to="/newEvent">
						<p>Add</p>
						<EventsAddIcon />
					</EventsAddButton>
				</PageBtnContainer>
			</PageSection>
		</PageContainer>
	);
}

const EventsAddIcon = styled(AddIcon)`
	color: ${green};
	width: 20px;
	height: 20px;
`;

const EventsAddButton = styled(PageLinkBtn)`
	 display: flex;
	 align-items: center;
	 justify-content: space-evenly;
`;

const EventsList = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`;
