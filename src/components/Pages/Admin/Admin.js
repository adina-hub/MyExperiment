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

export default function AdminHome() {
	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection fullHeight>
				<PageTitle>Welcome, admin</PageTitle>
				<PageHR />
				<UserField>
					<UserFieldName>Name:</UserFieldName>
					<UserFieldValue>Admin User</UserFieldValue>
				</UserField>
				<UserField>
					<UserFieldName>Email:</UserFieldName>
					<UserFieldValue>adminUser@gmail.com</UserFieldValue>
				</UserField>
				<UserBtnContainer>
					<PageLinkBtn large="true" to="/experimentsList">
						See experiments
					</PageLinkBtn>
					<PageLinkBtn large="true" to="/eventsList">
						See events
					</PageLinkBtn>
				</UserBtnContainer>
			</PageSection>
		</PageContainer>
	);
}
