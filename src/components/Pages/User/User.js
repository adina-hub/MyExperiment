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
	UserFieldValue
} from '../../../styles/general.js';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';

export default function User() {
	const { currentUser } = useAuth();

	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection fullHeight>
				<PageTitle>Welcome, {currentUser.admin ? "admin" : currentUser.name}</PageTitle>
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
					<PageLinkBtn large="true" to="/userExpList">
						Favorites
					</PageLinkBtn>
					<PageLinkBtn large="true" to="/userEvtList">
						Booked events
					</PageLinkBtn>
				</UserBtnContainer>
			</PageSection>
		</PageContainer>
	);
}
