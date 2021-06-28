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

export default function AdminHome() {
	const { currentUser } = useAuth();
	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection fullHeight>
				<PageTitle>Welcome, admin</PageTitle>
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
					<PageLinkBtn large to="/admin/experiments">
						See experiments
					</PageLinkBtn>
					<PageLinkBtn large to="/admin/events">
						See events
					</PageLinkBtn>
				</UserBtnContainer>
			</PageSection> 
		</PageContainer>
	);
}
