import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './MenuElements';

export const Menu = ({ open }) => {
	return (
		<>
			<StyledMenu open={open}>
				<a href="/">Home</a>
				<a href="/">Experiments</a>
				<a href="/">Events</a>
				<a href="/">Contact</a>
				<a href="/">Login</a>
			</StyledMenu>
		</>
	);
};

Menu.propTypes = {
	open: bool.isRequired
};
