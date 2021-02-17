import React, { useState } from 'react';
import { Burger } from '../Burger/index';
import { Menu } from '../Menu/index';
import { Container } from './NavbarElements';

export const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Container>
				<Burger open={open} setOpen={setOpen} />
				<Menu open={open} setOpen={setOpen} />
			</Container>
		</>
	);
};
