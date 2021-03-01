import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Menu({ open }) {
	return (
		<>
			<StyledMenu open={open}>
				<Link to="/">Home</Link>
				<Link to="/experiments">Experiments</Link>
				<Link to="/events">Events</Link>
				<Link to="/signin">Log In</Link>
			</StyledMenu>
		</>
	);
}

Menu.propTypes = {
	open: bool.isRequired
};

export default Menu;

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

	a {
		font-size: 1.5rem;
		padding: 2rem 0;
		color: white;
		text-decoration: none;
		transition: color 0.3s linear;
	}
`;
