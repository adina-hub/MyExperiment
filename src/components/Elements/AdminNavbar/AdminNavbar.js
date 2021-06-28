import React, { useState } from 'react';
import logo from '../../../images/logo.svg';
import Burger from '../Burger/Burger';
import AdminMenu from './AdminMenu/AdminMenu';
import styled from 'styled-components';
import '../Navbar/Navbar.css'

function AdminNavbar() {
	const [open, setOpen] = useState(false);
	const [navbar, setNavbar] = useState(false);

	const changeBackground = () => {
		if(window.scrollY >= 100){
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
					<AdminMenu open={open} setOpen={setOpen} />
				</div>
			</Container> 
		</>
	);
}

export default AdminNavbar;

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

		@media screen and (min-width: 1024px) {
			width: 170px;
			height: 150px;
		}
	}

	@media screen and (min-width: 1024px) {
		height: 65px;
	}
`;
