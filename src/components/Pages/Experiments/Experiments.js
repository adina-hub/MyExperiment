import React from 'react'
import styled from 'styled-components'
import { darkBg, fontH2, fontP, lightBg, turquoise } from '../../../globalStyles';
import { Navbar } from '../../Elements/Navbar/index';
import Experiment from './Experiment/Experiment';

function Experiments() {
    return (
        <ExperimentsContainer>
            <Navbar></Navbar>
            <ExperimentsTop>
                <h2>Experiments</h2>
                <hr />
                <p>Here you can find physics related experiments.</p>
                <p>From mechanics to optics and fluids, all in one place, each of them having a video with explications from our teachers.</p>
                <hr />
            </ExperimentsTop>
            <ExperimentsBottom>
                <h3>Category: All</h3>
                <ExperimentsList>
                    <Experiment src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        text="How to make a sandwich">
                    </Experiment>
                </ExperimentsList>
            </ExperimentsBottom>
        </ExperimentsContainer>
    )
}

export default Experiments




const ExperimentsContainer = styled.div``;

const ExperimentsTop = styled.div`
	background: ${lightBg};
	height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 0px 12.5px;
	text-align: center;

    > h2 {
        margin: 80px auto 0px auto;
        font-size: ${fontH2};
        letter-spacing: 1px;
        color: ${turquoise};
    }

    > hr {
        width: 70%;
        height: 3px;
        background: #FFF;
        margin: 24px auto;
    }

    > p {
        color: white;
        font-size: ${fontP};
        font-weight: normal;
        line-height: 25px;
    }

`;

const ExperimentsBottom = styled.div`
    background: ${darkBg};
    height: 100vh;
    display: flex;
	flex-direction: column;
    padding: 30px 20px;

    > h3 {
        font-size: ${fontSizeH2};
        letter-spacing: 1px;
        text-align: left;
        color: #FFF;
    }
`;

const ExperimentsList = styled.div`
    display: flex;
    flex-direction: column;
`;



