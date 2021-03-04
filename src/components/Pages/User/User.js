import React from 'react';
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
	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection fullHeight>
				<PageTitle>Welcome, user</PageTitle>
				<PageHR />
				<UserField>
					<UserFieldName>Name:</UserFieldName>
					<UserFieldValue>Normal User</UserFieldValue>
				</UserField>
				<UserField>
					<UserFieldName>Email:</UserFieldName>
					<UserFieldValue>normalUser@gmail.com</UserFieldValue>
				</UserField>
				<UserBtnContainer>
					<PageLinkBtn large="true" to="/userExpList">
						See experiments
					</PageLinkBtn>
					<PageLinkBtn large="true" to="/userEvtList">
						See events
					</PageLinkBtn>
				</UserBtnContainer>
			</PageSection>
		</PageContainer>
	);
}
