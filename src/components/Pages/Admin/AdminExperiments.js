import React from 'react';
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { lightBg, fontH2, fontH3, turquoise } from '../../../globalStyles';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';

export default function AdminExperiments() {
	return (
		<div>
			<AdminNavbar />
			<Container>
				<h2>Experiments</h2>
				<hr />
				<Button>
					<button>Add</button>
					<Icon />
				</Button>
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
