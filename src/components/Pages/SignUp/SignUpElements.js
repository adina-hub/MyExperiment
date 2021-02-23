import styled from 'styled-components';

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 35px auto;
	height: 66vh;
	width: 85vw;
	border-radius: 8px;
	padding: 22px;
	background: #51a3b9;

	@media screen and (min-width: 375px) {
		width: 75vw;
	}

	@media screen and (min-width: 768px) {
		width: 45vw;
		height: 70vh;
		margin: 20px auto;
		padding: 18px;
	}

	@media screen and (min-width: 1024px) {
		width: 35vw;
		height: 71vh;
		margin: 10px auto;
	}

	@media screen and (min-width: 1200px) {
		width: 27vw;
		height: 72vh;
		margin: 5px auto;
		padding: 23px;
	}
`;

export const FormLabel = styled.div`
	margin-top: 10px;
	font-size: 12px;
	font-weight: 400;
	padding: 5px;
	color: #333333;

	@media screen and (min-width: 768px) {
		font-size: 17px;
	}
`;

export const FLink = styled.a`
	margin-top: 10px;
	margin-bottom: 18px;
	opacity: 0.6;
	font-size: 12px;
	color: white;
	text-align: right;
	cursor: pointer;
	&:hover {
		color: blue;
		transition: 0.15s ease-in-out;
	}

	@media screen and (min-width: 768px) {
		margin-top: 10px;
		font-size: 16px;
	}

	@media screen and (min-width: 1024px) {
		margin-top: 17px;
	}
`;

export const Text = styled.div`
	display: flex;
	font-size: 13px;
	margin-top: 10px;
	justify-content: center;

	@media screen and (min-width: 768px) {
		margin-top: 10px;
		font-size: 15px;
	}
`;
