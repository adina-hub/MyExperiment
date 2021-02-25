import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './MenuElements';
import { Link } from 'react-router-dom';

export const Menu = ({ open }) => {
	return (
		<>
			<StyledMenu open={open}>
				<Link to="/">Home</Link>
				<Link to="/experiments">Experiments</Link>
				<Link to="/">Events</Link>
				<Link to="/">Contact</Link>
				<Link to="/signin">Login</Link>
			</StyledMenu>
		</>
	);
};

Menu.propTypes = {
	open: bool.isRequired
};
