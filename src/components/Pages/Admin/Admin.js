import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import {
	lightBg,
	fontH2,
	turquoise,
	fontP,
	fontH3
} from '../../../globalStyles';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';

export default function AdminHome() {
	return (
		<div>
			<AdminNavbar />
			<HomeContainer>
				<h2>Welcome, admin</h2>
				<hr />
				<Field>
					<h4>Name:</h4>
					<h3>Admin User</h3>
				</Field>
				<Field>
					<h4>Email:</h4>
					<h3>adminUser@gmail.com</h3>
				</Field>
				<div className="buttons">
					<Button to="/experimentsList">See experiments</Button>
					<Button to="/eventsList">See events</Button>
				</div>
			</HomeContainer>
		</div>
	);
}

const HomeContainer = styled.div`
	background: ${lightBg};
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 10px 12.5px;
	text-align: center;

	> h2 {
		margin: 80px auto 0px auto;
		font-size: ${fontH2};
		letter-spacing: 1px;
		color: ${turquoise};
	}

	> hr {
		width: 80%;
		height: 3px;
		background: #fff;
		margin: 24px auto;
	}

	> .buttons {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		margin: 70px auto 0 auto;
		height: 100px;
	}
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
