import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import {
	turquoise,
	fontP,
	fontH3,
	PageLinkBtn,
	PageContainer,
	PageSection,
	PageTitle,
	PageHR
} from '../../../globalStyles';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';

export default function AdminHome() {
	return (
		<div>
			<AdminNavbar />
			<PageContainer>
				<PageSection fullHeight>
					<AdminTitle>Welcome, admin</AdminTitle>
					<PageHR />
					<Field>
						<h4>Name:</h4>
						<h3>Admin User</h3>
					</Field>
					<Field>
						<h4>Email:</h4>
						<h3>adminUser@gmail.com</h3>
					</Field>
					<AdminBtnContainer>
						<PageLinkBtn large to="/experimentsList">
							See experiments
						</PageLinkBtn>
						<PageLinkBtn large to="/eventsList">
							See events
						</PageLinkBtn>
					</AdminBtnContainer>
				</PageSection>
			</PageContainer>
		</div>
	);
}

const AdminTitle = styled(PageTitle)`
	color: ${turquoise};
`;

const AdminBtnContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 70px auto 0 auto;
	height: 100px;
`;

const Field = styled.div`
	padding: 0px 20px;
	margin-top: 25px;
	display: flex;
	color: white;
	align-items: center;

	> h4 {
		font-size: ${fontP};
		margin-right: 10px;
		font-weight: normal;
	}

	> h3 {
		font-size: ${fontH3};
	}
`;

const Button = styled(Link)`
	background: transparent;
	border: 2px solid ${turquoise};
	border-radius: 8px;
	padding: 12px 20px;
	width: 200px;
	color: white;
	text-decoration: none;
`;
