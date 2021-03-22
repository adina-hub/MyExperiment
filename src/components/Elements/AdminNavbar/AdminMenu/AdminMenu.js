import React from 'react';
import { bool } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../../../context/AuthContext';

function AdminMenu({ open }) {
	const { signOut } = useAuth();
	return (
		<>
			<StyledMenu open={open}>
				<NavLink activeClassName="selected" to="/admin" exact>Home</NavLink>
				<NavLink activeClassName="selected" to="/admin/experiments">Experiments</NavLink>
				<NavLink activeClassName="selected" to="/admin/events">Events</NavLink>
				<Link onClick={() => signOut()} to="/signin">Log Out</Link>
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
	.selected{
		background: #007999;
		padding: 1.25rem;
	}
`;
