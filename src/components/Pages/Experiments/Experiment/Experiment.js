import React, { useState } from 'react';
import styled from 'styled-components';
import { fontH3, green, PageAddBtn, PageContainer, PageSection, PageSubHR, PageSubtitle, PageTitle } from '../../../../globalStyles';
import Navbar from '../../../Elements/Navbar/Navbar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
function Experiment({ id }) {

    const [experiment, setExperiment] = useState({
        title: 'How to make a sandwich',
        src: 'https://www.youtube.com/embed/S_1_ZSMxRfg',
        topics: ['Mecanics', 'Optics'],
        materials: ['Bread', 'Ham', 'Butter', 'Tomatoes'],
        steps: ['Put the bread in the heated pan.', 'Put the bread in the heated pan.', 'Put the bread in the heated pan.', 'Put the bread in the heated pan.']
    })

    const [clicked, setClicked] = useState(false)

    return (
        <PageContainer>
            <Navbar></Navbar>
            <PageSection>
                <PageTitle white small>{experiment.title}</PageTitle>
                <ExperimentVideo src={experiment.src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                <ExperimentInfo>
                    <PageSubtitle>Activity overview</PageSubtitle>
                    <PageSubHR />
                    <ExperimentTopics>
                        <PageSubtitle small>Science Topics:</PageSubtitle>
                        {experiment.topics.map((topic, i) => (<p>{topic}{i !== experiment.topics.length - 1 ? "," : null}</p>))}
                    </ExperimentTopics>
                    <ExperimentDetails>
                        <ul>
                            <PageSubtitle small>Materials needed:</PageSubtitle>
                            {experiment.materials.map(material => (<li>{material}</li>))}
                        </ul>
                    </ExperimentDetails>
                    <ExperimentDetails>
                        <ol>
                            <PageSubtitle small>Steps to follow:</PageSubtitle>
                            {experiment.steps.map(step => (<li>{step}</li>))}
                        </ol>
                    </ExperimentDetails>
                </ExperimentInfo>
                <PageAddBtn onClick={() => setClicked(!clicked)}>
                    <p>Add to favourites</p>
                    {clicked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </PageAddBtn>
            </PageSection>

        </PageContainer>
    );
}

const ExperimentVideo = styled.iframe`
	width: 280px;
	height: 200px;
	border-radius: 20px;
	margin: 20px auto 0 auto;
`;

const ExperimentInfo = styled.div`
	margin-top: 30px;
	padding: 0 15px;
	h3,h2, ul,ol { color: ${green}; }
	h3,ul,ol { font-size: ${fontH3}; }
`;

const ExperimentTopics = styled.div`
	display: flex;
	align-items: center;
	margin-top: 20px;
	> p {
		margin-left: 7.5px;
		color: white;
	}
`;

const ExperimentDetails = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;

	li {
		color: #fff;
        text-align: left;
		margin-top: 15px;
		margin-left: 20px;
	}
`;



export default Experiment;
