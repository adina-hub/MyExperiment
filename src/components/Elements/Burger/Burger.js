import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';
function Burger({ open, setOpen }) {
	return (
		<>
			<StyledBurger open={open} onClick={() => setOpen(!open)}>
				<div />
				<div />
				<div />
			</StyledBurger>
		</>
	);
}

Burger.propTypes = {
	open: bool.isRequired,
	setOpen: func.isRequired
};

export default Burger;

const StyledBurger = styled.button`
	position: absolute;
	top: 15px;
	right: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 1.7rem;
	height: 1.7rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 101;

	&:focus {
		outline: none;
	}

	> div {
		width: 1.7rem;
		height: 0.25rem;
		background: white;
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;

		:first-child {
			transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? '0' : '1')};
			transform: ${({ open }) =>
				open ? 'translateX(20px)' : 'translateX(0px)'};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0deg)')};
		}

		@media screen and (min-width: 425px) {
			width: 1.8rem;
		}
	}

	@media screen and (min-width: 425px) {
		width: 2rem;
		height: 1.8rem;
	}
`;
