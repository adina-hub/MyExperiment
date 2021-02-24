import React from 'react'
import styled from 'styled-components'
import { purple, turquoise } from '../../../../globalStyles';

function Experiment({ src, text }) {
    return (
        <ExperimentContainer>
            <img src={src} alt="" />
            <p>{text}</p>
        </ExperimentContainer>
    );
}

const ExperimentContainer = styled.div`
    display: flex;
    background: ${turquoise};
    color: ${purple};
    
    > img {
        height: 250px;
        width: 250px;
    }
`;

export default Experiment;
