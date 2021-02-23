import React from 'react'
import styled from 'styled-components'
import { purple, turqBg } from '../../../../globalStyles';

function Experiment({ src, text }) {
    return (
        <ExperimentContainer>
            <img src={src} alt="" />
            <p>{text}</p>
        </ExperimentContainer>
    )
}

const ExperimentContainer = styled.div`
    display: flex;
    background: ${turqBg};
    color: ${purple};
    
    > img {
        height: 250px;
        width: 250px;
    }
`;

export default Experiment
