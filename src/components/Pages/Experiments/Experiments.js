import React from 'react';
import styled from 'styled-components';
import {
	darkBg,
	fontH2,
	fontP,
	lightBg,
	green,
	turquoise,
	purple
} from '../../../globalStyles';
import Navbar from '../../Elements/Navbar/Navbar';
import Experiment from './Experiment/Experiment';
import Dropdown from '../../Elements/Dropdown/Dropdown';
import { useParams } from 'react-router-dom';

function Experiments() {
	let { id } = useParams();
	if (id) {
		return <Experiment id={id} />;
	} else {
		return (
			<ExperimentsContainer>
				<Navbar></Navbar>
				<ExperimentsTop>
					<h2>Experiments</h2>
					<hr />
					<p>Here you can find physics related experiments.</p>
					<p>
						From mechanics to optics and fluids, all in one place, each of them
						having a video with explications from our teachers.
					</p>
					<hr />
					<Dropdown />
				</ExperimentsTop>
				<ExperimentsBottom>
					<h3>Category: All</h3>
					<ExperimentsList>
						<ExperimentsItem>
							<img
								src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
								alt=""
							/>
							<p>How to make a sandwich</p>
						</ExperimentsItem>
						<ExperimentsItem>
							<img
								src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
								alt=""
							/>
							<p>How to make a sandwich</p>
						</ExperimentsItem>
						<ExperimentsItem>
							<img
								src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
								alt=""
							/>
							<p>How to make a sandwich</p>
						</ExperimentsItem>
					</ExperimentsList>
				</ExperimentsBottom>
			</ExperimentsContainer>
		);
	}
}

export default Experiments;

const ExperimentsContainer = styled.div``;

const ExperimentsTop = styled.div`
	background: ${lightBg};
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 0px 12.5px;
	text-align: center;

	> h2 {
		margin: 80px auto 0px auto;
		font-size: ${fontH2};
		letter-spacing: 1px;
		color: ${green};
	}

	> hr {
		width: 70%;
		height: 3px;
		background: #fff;
		margin: 24px auto;
	}

	> p {
		color: white;
		font-size: ${fontP};
		font-weight: normal;
		line-height: 25px;
	}
`;

const ExperimentsBottom = styled.div`
	background: ${darkBg};
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 30px 20px;

	> h3 {
		font-size: ${fontH2};
		letter-spacing: 1px;
		text-align: left;
		color: #fff;
	}
`;

const ExperimentsList = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`;

const ExperimentsItem = styled.div`
	display: flex;
	background: ${turquoise};
	color: ${purple};
	align-items: center;
	border-radius: 5px;
	margin-top: 20px;
	> img {
		flex: 0.3;
		height: 75px;
		filter: grayscale(100%);
		object-fit: cover;
	}

	> p {
		flex: 0.7;
		text-align: center;
	}
`;
