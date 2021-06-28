import React, { useState } from 'react';
import logo from '../../../images/logo.svg';
import Burger from '../Burger/Burger';
import Menu from './Menu/Menu';
import styled from 'styled-components';
import './Navbar.css';

function Navbar() {
	const [open, setOpen] = useState(false);
	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		if(window.scrollY >= 80){
			setNavbar(true)
		} else {
			setNavbar(false)
		}
	}

	window.addEventListener('scroll', changeBackground)

	return (
		<>
			<Container className={navbar ? 'navbar colorChange' :  'navbar'}>
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

		@media screen and (min-width: 425px) {
			width: 130px;
			height: 120px;
		}

		@media screen and (min-width: 1024px) {
			width: 170px;
			height: 150px;
		}
	}

	@media screen and (min-width: 1024px) {
		height: 65px;
	}
`;
