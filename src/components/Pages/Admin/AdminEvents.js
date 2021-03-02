import React from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import {
	lightBg,
	fontH2,
	fontH3,
	turquoise,
	fontP
} from '../../../globalStyles';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';

export default function AdminEvents() {
	return (
		<div>
			<AdminNavbar />
			<EventsContainer>
				<h2>Events</h2>
				<hr />
				<EventsAddButton to="/newEvent">
					<p>Add</p>
					<Icon />
				</EventsAddButton>
				<EventsList>
					<EventsItem>
						<h3>Event One</h3>
						<Icons>
							<Link to="/events/11">
								<InfoIcon />
							</Link>
							<Link>
								<DeleteIcon />
							</Link>
						</Icons>
					</EventsItem>
					<EventsItem>
						<h3>Event Two</h3>
						<Icons>
							<Link to="/events/11">
								<InfoIcon />
							</Link>
							<Link>
								<DeleteIcon />
							</Link>
						</Icons>
					</EventsItem>
					<EventsItem>
						<h3>Event Three</h3>
						<Icons>
							<Link to="/events/11">
								<InfoIcon />
							</Link>
							<Link>
								<DeleteIcon />
							</Link>
						</Icons>
					</EventsItem>
				</EventsList>
				<BackButton to="/admin">Go back</BackButton>
			</EventsContainer>
		</div>
	);
}

const EventsContainer = styled.div`
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
`;

const Icon = styled(AddIcon)`
	color: ${turquoise};
	width: 20px;
	height: 20px;
`;

const EventsAddButton = styled(Link)`
	display: flex;
	justify-content: space-between;
	background: transparent;
	text-decoration: none;
	border: 2px solid ${turquoise};
	border-radius: 8px;
	padding: 12px 20px;
	margin-right: 0;
	width: 100px;
	color: white;
	align-items: center;

	> p {
		outline: none;
		background: none;
		color: white;
		border: none;
		font-size: ${fontH3};
	}
`;

const EventsList = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;

	> button {
		background: none;
		outline: none;
		border: none;
	}
`;

const EventsItem = styled.div`
	width: 260px;
	height: 40px;
	margin: 7px auto;
	padding: 0px 10px;
	background: grey;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	> h3 {
		font-size: ${fontH3};
		color: white;
		font-weight: normal;
	}
`;

const Icons = styled.div`
	width: 50px;
	display: flex;
	justify-content: space-between;

	> button {
		outline: none;
		background: none;
		color: white;
		border: none;
		font-size: ${fontH3};
	}
`;

const InfoIcon = styled(InfoOutlinedIcon)`
	color: white;
	width: 20px;
	height: 20px;
`;

const DeleteIcon = styled(DeleteOutlinedIcon)`
	color: #bf2424;
	width: 20px;
	height: 20px;
`;

const BackButton = styled(Link)`
	background: transparent;
	border: 2px solid ${turquoise};
	border-radius: 8px;
	font-size: ${fontP};
	padding: 12px 20px;
	width: 100px;
	margin-top: 40px;
	text-decoration: none;
	color: white;
	align-items: center;
`;
