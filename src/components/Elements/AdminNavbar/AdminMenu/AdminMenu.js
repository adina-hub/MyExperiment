import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function AdminMenu({ open }) {
	return (
		<>
			<StyledMenu open={open}>
				<Link to="/admin">Home</Link>
				<Link to="/experimentsList">Experiments</Link>
				<Link to="/eventsList">Events</Link>
				<Link to="/signin">Log Out</Link>
			</StyledMenu>
		</>
	);
}

AdminMenu.propTypes = {
	open: bool.isRequired
};

export default AdminMenu;

const StyledMenu = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #51a3b9;
	height: 100vh;
	width: 100vw;
	text-align: center;
	padding: 2rem;
	position: absolute;
	top: 0;
	right: 0;
	transition: transform 0.3s ease-in-out;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
	z-index: 100;
	a {
		font-size: 1.5rem;
		padding: 2rem 0;
		color: white;
		text-decoration: none;
		transition: color 0.3s linear;
	}
`;
