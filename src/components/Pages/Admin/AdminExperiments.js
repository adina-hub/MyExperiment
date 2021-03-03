import React from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import {
	lightBg,
	fontH2,
	fontH3,
	turquoise,
	fontP,
	PageContainer,
	PageSection,
	PageHR,
	PageTitle
} from '../../../globalStyles';
import AdminNavbar from '../../Elements/AdminNavbar/AdminNavbar';

export default function AdminExperiments() {
	return (
		<PageContainer>
			<AdminNavbar />
			<PageSection fullHeight>
				<PageTitle white>Experiments</PageTitle>
				<PageHR />
				<ExperimentsAddButton to="/newExperiment">
					<p>Add</p>
					<Icon />
				</ExperimentsAddButton>
				<ExperimentsList>
					<ExperimentsItem>
						<h3>Experiment One</h3>
						<Icons>
							<Link to="/experiments/11">
								<InfoIcon />
							</Link>
							<Link>
								<DeleteIcon />
							</Link>
						</Icons>
					</ExperimentsItem>
					<ExperimentsItem>
						<h3>Experiment Two</h3>
						<Icons>
							<Link to="/experiments/11">
								<InfoIcon />
							</Link>
							<Link>
								<DeleteIcon />
							</Link>
						</Icons>
					</ExperimentsItem>
					<ExperimentsItem>
						<h3>Experiment Three</h3>
						<Icons>
							<Link to="/experiments/11">
								<InfoIcon />
							</Link>
							<Link>
								<DeleteIcon />
							</Link>
						</Icons>
					</ExperimentsItem>
				</ExperimentsList>
				<BackButton to="/admin">Go back</BackButton>
			</PageSection>
		</PageContainer>
	);
}

const Icon = styled(AddIcon)`
	color: ${turquoise};
	width: 20px;
	height: 20px;
`;

const ExperimentsAddButton = styled(Link)`
	display: flex;
	justify-content: space-between;
	background: transparent;
	text-decoration: none;
	border: 2px solid ${turquoise};
	border-radius: 8px;
	padding: 12px 20px;
	margin-right: 0;
	width: 100px;
	color: white;
	align-items: center;

	> p {
		outline: none;
		background: none;
		color: white;
		border: none;
		font-size: ${fontH3};
	}
`;

const ExperimentsList = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;

	> button {
		background: none;
		outline: none;
		border: none;
	}
`;

const ExperimentsItem = styled.div`
	width: 260px;
	height: 40px;
	margin: 7px auto;
	padding: 0px 10px;
	background: grey;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	> h3 {
		font-size: ${fontH3};
		color: white;
		font-weight: normal;
	}
`;

const Icons = styled.div`
	width: 50px;
	display: flex;
	justify-content: space-between;

	> button {
		outline: none;
		background: none;
		color: white;
		border: none;
		font-size: ${fontH3};
	}
`;

const InfoIcon = styled(InfoOutlinedIcon)`
	color: white;
	width: 20px;
	height: 20px;
`;

const DeleteIcon = styled(DeleteOutlinedIcon)`
	color: #bf2424;
	width: 20px;
	height: 20px;
`;

const BackButton = styled(Link)`
	background: transparent;
	border: 2px solid ${turquoise};
	border-radius: 8px;
	font-size: ${fontP};
	padding: 12px 20px;
	width: 100px;
	margin-top: 40px;
	text-decoration: none;
	color: white;
	align-items: center;
`;
