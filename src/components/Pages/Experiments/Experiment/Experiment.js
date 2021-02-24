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

export default Experiment;
