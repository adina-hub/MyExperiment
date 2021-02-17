import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import { Burger } from '../Burger/index';
import { Menu } from '../Menu/index';
import { Container, Logo, MenuContainer } from './NavbarElements';

export const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Container>
				<Logo src={logo} />
				<MenuContainer>
					<Burger open={open} setOpen={setOpen} />
					<Menu open={open} setOpen={setOpen} />
				</MenuContainer>
			</Container>
		</>
	);
};
