import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import {
	PageContainer,
	PageSection,
	PageHR,
	PageTitle,
	green,
	PageBtnContainer,
	PageLinkBtn,
	ExperimentsList
} from '../../../styles/general';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';
import ListItem from '../../Elements/ListItem/ListItem';
import { db } from '../../../firebase';

export default function AdminExperiments() {
	const [experiments, setExperiments] = useState([])
	useEffect(() => {
		db.collection("experiments").get().then(querySnapshot => {
			let array = [];
			querySnapshot.docs.map(doc => {
				let id = doc.id;
				let data = doc.data();
				array.push({
					id: id,
					title: data.title,
				})
			});
			setExperiments(array);
		});
	}, []);



	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection >
				<PageTitle>Experiments</PageTitle>
				<PageHR />
				<ExperimentsList>
					{experiments.map(experiment => (
						<ListItem userType="admin" name={experiment.title} id={experiment.id} type="experiment" url={`/admin/experiments/${experiment.id}`} />
					))}
				</ExperimentsList>
				<PageBtnContainer>
					<PageLinkBtn to="/admin">Go back</PageLinkBtn>
					<ExperimentsAddButton to="/admin/experiments/new">
						<p>Add</p>
						<ExperimentsAddIcon />
					</ExperimentsAddButton> 
				</PageBtnContainer>
			</PageSection>
		</PageContainer>
	);
}

const ExperimentsAddIcon = styled(AddIcon)`
	color: ${green};
	width: 20px;
	height: 20px;
`;

const ExperimentsAddButton = styled(PageLinkBtn)`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin-left: 20px;

	@media screen and (min-width: 768px){
		margin-left: 50px;
	}

`;
