import React from 'react';
import styled from 'styled-components';
import {
	AiOutlinePlus,
	AiOutlineInfoCircle,
	AiOutlineDelete
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { lightBg, fontH2, fontH3, turquoise } from '../../../globalStyles';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';

export default function AdminEvents() {
	return (
		<div>
			<AdminNavbar />
			<Container>
				<h2>Events</h2>
				<hr />
				<Button>
					<button>Add</button>
					<Icon />
				</Button>
				<Elements>
					<Element>
						<h3>Event One</h3>
						<Icons>
							<Link to="/admin">
								<InfoIcon />
							</Link>
							<Link>
								<DeleteIcon />
							</Link>
						</Icons>
					</Element>
					<Element>
						<h3>Event Two</h3>
						<Icons>
							<Link to="/admin">
								<InfoIcon />
							</Link>
							<Link>
								<DeleteIcon />
							</Link>
						</Icons>
					</Element>
					<Element>
						<h3>Event Three</h3>
						<Icons>
							<Link to="/admin">
								<InfoIcon />
							</Link>
							<Link>
								<DeleteIcon />
							</Link>
						</Icons>
					</Element>
				</Elements>
			</Container>
		</div>
	);
}

const Container = styled.div`
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

const Icon = styled(AiOutlinePlus)`
	color: ${turquoise};
	width: 20px;
	height: 20px;
`;

const Button = styled.button`
	display: flex;
	justify-content: space-between;
	background: transparent;
	border: 2px solid ${turquoise};
	border-radius: 8px;
	padding: 12px 20px;
	margin-right: 0;
	width: 100px;
	color: white;

	> button {
		outline: none;
		background: none;
		color: white;
		border: none;
		font-size: ${fontH3};
	}
`;

const Elements = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`;

const Element = styled.div`
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
`;

const InfoIcon = styled(AiOutlineInfoCircle)`
	color: white;
	width: 20px;
	height: 20px;
`;

const DeleteIcon = styled(AiOutlineDelete)`
	color: #bf2424;
	width: 20px;
	height: 20px;
`;
