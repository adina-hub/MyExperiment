import React from 'react';
import { useAuth } from '../../../context/AuthContext.js';
import {
	PageLinkBtn,
	PageContainer,
	PageSection,
	PageTitle,
	PageHR,
	UserBtnContainer,
	UserField,
	UserFieldName,
	UserFieldValue,
	green
} from '../../../styles/general.js';
import Navbar from '../../Elements/Navbar/Navbar.js';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EventNoteIcon from '@material-ui/icons/EventNote';
import styled from 'styled-components';

export default function User() {
	const { currentUser } = useAuth();

	return (
		<PageContainer>
			<Navbar />
			<PageSection fullHeight>
				<PageTitle>Welcome, {currentUser.name}</PageTitle>
				<PageHR />
				<UserField>
					<UserFieldName>Name:</UserFieldName>
					<UserFieldValue>{currentUser.name}</UserFieldValue>
				</UserField>
				<UserField>
					<UserFieldName>Email:</UserFieldName>
					<UserFieldValue>{currentUser.email}</UserFieldValue>
				</UserField>
				<UserBtnContainer>
					<UserBtn large="true" to="/user/experiments">
						<FavoriteIcon />
						Experiments
					</UserBtn>
					<UserBtn large="true" to="/user/events">
						<EventNoteIcon />
						Events
					</UserBtn>
				</UserBtnContainer>
			</PageSection>
		</PageContainer>
	);
}

const UserBtn = styled(PageLinkBtn)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20px;
	> .MuiSvgIcon-root{
		fill: ${green} !important;
		margin-right: 5px;
	}
	
`

