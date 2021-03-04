import React from 'react';
import styled from 'styled-components';
import {
	PageContainer,
	PageTitle,
	PageDescription,
	PageHR,
	PageSection,
	PageSubtitle,
	lightBg,
	green
} from '../../../styles/general';
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
			<PageContainer>
				<Navbar></Navbar>
				<PageSection fullHeight>
					<PageTitle>Experiments</PageTitle>
					<PageHR />
					<PageDescription>Here you can find physics related experiments.</PageDescription>
					<PageDescription>
						From mechanics to optics and fluids, all in one place, each of them
						having a video with explications from our teachers.
					</PageDescription>
					<PageHR />
					<Dropdown />
				</PageSection>
				<PageSection dark fullHeight>
					<PageSubtitle>Category: All</PageSubtitle>
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
				</PageSection>
			</PageContainer>
		);
	}
}

export default Experiments;


const ExperimentsList = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`;

const ExperimentsItem = styled.div`
	display: flex;
	background: ${lightBg};
	color: ${green};
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
