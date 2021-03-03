import React from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import {
	PageContainer,
	PageSection,
	PageHR,
	PageTitle,
	green,
	PageBtnContainer,
	PageLinkBtn
} from '../../../globalStyles';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';
import ListItem from '../../Elements/ListItem/ListItem';

export default function AdminExperiments() {
	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection fullHeight>
				<PageTitle>Experiments</PageTitle>
				<PageHR />
				<ExperimentsList>
					<ListItem name="Experiment One" url="/experiments/dadasd" />
					<ListItem name="Experiment Two" url="/experiments/dadasd" />
					<ListItem name="Experiment Three" url="/experiments/dadasd" />
				</ExperimentsList>
				<PageBtnContainer>
					<PageLinkBtn to="/admin">Go back</PageLinkBtn>
					<ExperimentsAddButton to="/newExperiment">
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
`;

const ExperimentsList = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`;