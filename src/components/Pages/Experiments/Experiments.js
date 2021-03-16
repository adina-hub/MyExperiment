import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	PageContainer,
	PageTitle,
	PageDescription,
	PageHR,
	PageSection,
	PageSubtitle,
} from '../../../styles/general';
import Navbar from '../../Elements/Navbar/Navbar';
import Dropdown from '../../Elements/Dropdown/Dropdown';
import { db } from '../../../firebase';
import Experiment from '../../Elements/Experiment/Experiment';

function Experiments() {
	const [experiments, setExperiments] = useState([])
	const [category, setCategory] = useState("All");
	useEffect(() => {
		db.collection("experiments").get().then(querySnapshot => {
			let array = [];
			querySnapshot.docs.map(doc => {
				let id = doc.id;
				let data = doc.data();
				array.push({
					id: id,
					title: data.title,
					steps: data.steps,
					videoUrl: data.videoUrl,
					domains: data.domains,
					materials: data.materials
				})
			});
			setExperiments(array);
		});
	}, []);

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
				<Dropdown expCategories={experiments} expSetCategory={setCategory} />
			</PageSection>
			<PageSection dark fullHeight>
				<PageSubtitle>Category: {category}</PageSubtitle>
				<ExperimentsList>
					{experiments.map(experiment => {
						if (category === "All") {
							return (<Experiment title={experiment.title} id={experiment.id} />)
						} else if (experiment.domains[0] === category
							|| experiment.domains[1] === category
							|| experiment.domains[2] === category) {
							return (<Experiment title={experiment.title} id={experiment.id} />)
						}
					})}
				</ExperimentsList>
			</PageSection>
		</PageContainer>
	);
}

export default Experiments;


const ExperimentsList = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`;

