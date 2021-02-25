import React, { useState } from 'react'
import styled from 'styled-components'
import { fontH2, fontH3, fontH5, fontP, green, lightBg, purple, turquoise } from '../../../../globalStyles';
import { Navbar } from '../../../Elements/Navbar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Experiment({ id }) {

    const [experiment, setExperiment] = useState({
        title: 'How to make a sandwich',
        src: 'https://www.youtube.com/embed/S_1_ZSMxRfg',
        topics: ['Mecanics', 'Optics'],
        materials: ['Bread', 'Ham', 'Butter', 'Tomatoes'],
        steps: ['Put the bread in the heated pan.', 'Put the bread in the heated pan.', 'Put the bread in the heated pan.', 'Put the bread in the heated pan.']

    })
    return (
        <ExperimentContainer>
            <Navbar></Navbar>
            <ExperimentTitle>{experiment.title}</ExperimentTitle>
            <ExperimentVideo src={experiment.src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            <ExperimentInfo>
                <h2>Activity overview</h2>
                <hr />
                <ExperimentTopics>
                    <h3>Science Topics:</h3>
                    {experiment.topics.map((topic, i) => (<p>{topic}{i !== experiment.topics.length - 1 ? "," : null}</p>))}
                </ExperimentTopics>
                <ExperimentDetails>
                    <ul>Materials needed:
                        {experiment.materials.map(material => (<li>{material}</li>))}
                    </ul>
                </ExperimentDetails>
                <ExperimentDetails>
                    <ol>Steps to follow:
                        {experiment.steps.map(step => (<li>{step}</li>))}
                    </ol>
                </ExperimentDetails>
            </ExperimentInfo>
            <ExperimentButton>
                <p>Add to favourites</p>
                <FavoriteBorderIcon />
            </ExperimentButton>
        </ExperimentContainer>
    );
}

const ExperimentContainer = styled.div`
    background: ${lightBg};
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;  
    
`;

const ExperimentTitle = styled.h2`
	font-size: ${fontH2};
	color: #fff;
	text-align: center;
	margin-top: 80px;
`;

const ExperimentVideo = styled.iframe`
    width: 280px;
    height: 200px;
    border-radius: 20px;
    margin: 20px auto 0 auto;
`

const ExperimentInfo = styled.div`
    margin-top: 30px;
    padding: 0 30px;
    h3,h2,ul,ol {
        color: ${green};
    }

    h3,ul,ol {
        font-size: ${fontH3};
    }
    

    > hr {
        margin-top: 5px;
        opacity: 15%;
        width: 85%;
    }


`;

const ExperimentTopics = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;

    > h3 {
        font-weight: 400;
    }

    > p {
        margin-left: 7.5px;
        color: white;
    }
`;

const ExperimentDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

   

    li{
        color: #fff;
        margin-top: 15px;
        margin-left: 20px;
    }
    
`;


const ExperimentButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    margin: 50px auto 0 auto;
    border: 2px solid ${green};
    border-radius: 5px;
    padding: 15px 25px;

    > p {
        color: #fff;
        margin-right: 10px;
        font-size: ${fontH3};
        letter-spacing: 1px;
    }

    > .MuiSvgIcon-root {
        fill: ${green};
    }
`;

export default Experiment;
