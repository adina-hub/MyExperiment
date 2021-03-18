import React, { useState } from 'react';
import logo from '../../../images/logo.svg';
import Burger from '../Burger/Burger';
import Menu from './Menu/Menu';
import styled from 'styled-components';

function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Container>
				<img src={logo} alt="" />
				<div>
					<Burger open={open} setOpen={setOpen} />
					<Menu open={open} setOpen={setOpen} />
				</div>
			</Container>
		</>
	);
}

export default Navbar;

const Container = styled.div`
	background: rgba(0, 0, 0, 0.4);
	height: 55px;
	width: 100vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	z-index: 100;
	> img {
		width: 110px;
		height: 110px;
	}
`;
