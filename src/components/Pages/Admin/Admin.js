import React from 'react';
import styled from 'styled-components';
import {
	fontH3,
	PageLinkBtn,
	PageContainer,
	PageSection,
	PageTitle,
	PageHR,
	green,
} from '../../../globalStyles';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';

export default function AdminHome() {
	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection fullHeight>
				<PageTitle>Welcome, admin</PageTitle>
				<PageHR />
				<AdminField>
					<AdminFieldName>Name:</AdminFieldName>
					<AdminFieldValue>Admin User</AdminFieldValue>
				</AdminField>
				<AdminField>
					<AdminFieldName>Email:</AdminFieldName>
					<AdminFieldValue>adminUser@gmail.com</AdminFieldValue>
				</AdminField>
				<AdminBtnContainer>
					<PageLinkBtn large="true" to="/experimentsList">
						See experiments
					</PageLinkBtn>
					<PageLinkBtn large="true" to="/eventsList">
						See events
					</PageLinkBtn>
				</AdminBtnContainer>
			</PageSection>
		</PageContainer>
	);
}



const AdminBtnContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 50px auto 0 auto;
	height: 110px;
`;

const AdminField = styled.div`
	max-width: 65%;
	margin: 25px auto 0 auto;
	display: flex;
	color: white;
	align-items: center;
`;

const AdminFieldName = styled.h3`
		margin-right: 10px;
		font-size: ${fontH3};
`;

const AdminFieldValue = styled.h3`
		color: ${green};
		font-size: ${fontH3};
`;