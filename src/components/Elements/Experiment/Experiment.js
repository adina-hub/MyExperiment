import React from 'react'
import styled from 'styled-components';
import { green, lightBg } from '../../../styles/general';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Link } from 'react-router-dom';

function Experiment({ title, id }) {
    return (
        <ExperimentContainer>
            <p>{title}</p>
            <Link to={`/experiments/${id}`}>
                <InfoOutlinedIcon />
            </Link>
        </ExperimentContainer>
    )
}

export default Experiment

const ExperimentContainer = styled.div`
    display: flex;
	background: ${lightBg};
	color: ${green};
	align-items: center;
    justify-content: space-between;
	border-radius: 5px;
	margin-top: 20px;
    padding: 10px;
	
    > a{
        color: white !important;
        flex: 0.1;
    }

	> p {
        text-align: left;
		flex: 0.9;
	}
`;
