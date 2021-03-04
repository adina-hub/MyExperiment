import React from 'react';
import {
	PageContainer,
	PageSection,
	PageHR,
	PageTitle,
	PageLinkBtn,
	ExperimentsList,
	PageBtnContainer
} from '../../../styles/general';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';
import ListItem from '../../Elements/ListItem/ListItem';

export default function UserExperiments() {
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
					<PageLinkBtn to="/user">Go back</PageLinkBtn>
				</PageBtnContainer>
			</PageSection>
		</PageContainer>
	);
}
