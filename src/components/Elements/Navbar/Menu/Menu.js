import React from 'react';
import { bool } from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../../../context/AuthContext';
import { green } from '../../../../styles/general';

function Menu({ open }) {
	const clickHandler = () => { window.scrollTo(0, 0); }
	const { signOut } = useAuth();
	const { currentUser } = useAuth();
	return ( 
		<StyledMenu open={open}>
			<NavLink to="/" activeClassName="selected" onClick={clickHandler} exact>Home</NavLink >
			<NavLink to="/experiments" activeClassName="selected" onClick={clickHandler} exact>Experiments</NavLink >
			<NavLink to="/events" activeClassName="selected" onClick={clickHandler} exact>Events</NavLink >
			{currentUser && <NavLink to="/user" activeClassName="selected">My Account</NavLink>}
			{!currentUser && <NavLink to="/signin" activeClassName="selected" onClick={clickHandler}>Log In</NavLink>}
			{currentUser && <Link to="/signin" onClick={() => signOut()} to="/signin">Logout</Link>}
		</StyledMenu>
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

	.selected{
		background: #007999;
		padding: 1.25rem;
	}

	@media screen and (min-width: 1024px) {
		flex-direction: row;
		justify-content: space-between;
		height: 50px;
		width: 490px;
		left: 0;
		background: none;

		a {
			padding: 1.5rem 0;
			font-size: 1.3rem;
		}

		.selected{
			background: none;
			padding: 1.5rem 0;
			color: ${green};
		}
	}
`;
