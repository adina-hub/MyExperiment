import React, { useState } from 'react';
import logo from '../../../images/logo.svg';
import Burger from '../Burger/Burger';
import AdminMenu from './AdminMenu/AdminMenu';
import styled from 'styled-components';

function AdminNavbar() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Container>
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
