import styled from 'styled-components';

export const StyledBurger = styled.button`
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
	z-index: 10;

	&:focus {
		outline: none;
	}

	div {
		width: 1.7rem;
		height: 0.25rem;
		background: black;
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;

		:first-child {
			transform: ${({ open }) => (open ? 'rotate(0deg)' : 'rotate(45deg)')};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? '1' : '0')};
			transform: ${({ open }) =>
				open ? 'translateX(0px)' : 'translateX(20px)'};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? 'rotate(0deg)' : 'rotate(-45deg)')};
		}
	}
`;
