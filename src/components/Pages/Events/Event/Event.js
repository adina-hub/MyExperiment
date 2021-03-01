import React, { useState } from 'react'
import styled from 'styled-components';
import { fontH2, fontH3, green, lightBg, purple } from '../../../../globalStyles';
import Navbar from '../../../Elements/Navbar/Navbar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

function Event({ id }) {

    const [event, setExperiment] = useState({
        title: 'Optical Illusions',
        src: 'https://images.unsplash.com/photo-1614456152857-6e4f94623245?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        topics: ['Mecanics', 'Optics'],
        materials: ['Bread', 'Ham', 'Butter', 'Tomatoes'],
        steps: ["You’re going to watch a short video. The aim isn't to find right answers, it's to explore ideas and find out what they know.",
            "After you've watched the video, lead a discussion with your class",
            "Ask the class to describe what they saw using only one word."],
        location: 'Illinois, SUA',
        time: '4 pm'
    })

    const [clicked, setClicked] = useState(false)

    return (
        <EventContainer>
            <Navbar></Navbar>
            <EventTitle>{event.title}</EventTitle>
            <EventImage src={event.src}></EventImage>
            <EventInfo>
                <h2>Activity overview</h2>
                <hr />
                <EventDetails>
                    <EventDetail>
                        <LocationOnIcon />
                        <h5>{event.location}</h5>
                    </EventDetail>
                    <EventDetail>
                        <ScheduleIcon />
                        <h5>{event.time}</h5>
                    </EventDetail>
                </EventDetails>
                <EventTopics>
                    <h3>Science Topics:</h3>
                    {event.topics.map((topic, i) => (<p>{topic}{i !== event.topics.length - 1 ? "," : null}</p>))}
                </EventTopics>
                <h2>What are we going to do?</h2>
                <hr />
                <EventSteps>
                    {event.steps.map(step => (<li>{step}</li>))}
                </EventSteps>
            </EventInfo>
            <EventButton onClick={() => setClicked(!clicked)}>
                <p>Book a place</p>
                {clicked ? <PersonAddIcon /> : <PersonAddOutlinedIcon />}
            </EventButton>
        </EventContainer>
    )
}

const EventContainer = styled.div`
    background: ${lightBg};
	display: flex;
	flex-direction: column;
	padding-bottom: 50px;
`;

const EventTitle = styled.h2`
	font-size: ${fontH2};
	color: #fff;
	text-align: center;
	margin-top: 80px;
`;


const EventImage = styled.img`
	width: 280px;
	height: 200px;
	border-radius: 20px;
	margin: 20px auto 0 auto;
    object-fit: cover;
`;

const EventInfo = styled.div`
	padding: 0 30px;
	h3, h2, ol { color: ${green}; }
	h3, ol { font-size: ${fontH3}; }
	> hr {
		margin-top: 5px;
		opacity: 15%;
		width: 85%;
	}
    h2{
        margin-top: 30px;
        font-size: ${fontH2};
    }
`;

const EventSteps = styled.ol`
    > li {
        color: #fff;
        margin-top: 15px;
		margin-left: 20px;
        line-height: 25px;
    }
`;

const EventDetails = styled.div`
    display: flex;
	margin-top: 20px;
    div:last-child{
        margin-left: 15px;
    }
`;

const EventDetail = styled.div`
    display: flex;
	align-items: center;
	justify-content: left;
	width: 100%;

    > .MuiSvgIcon-root{
        fill: ${green};
        width: 25px;
	    height: 25px;
    }

    

	> h5 {
		margin-left: 5px;
        color: #fff;
	}
`;


const EventTopics = styled.div`
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

const EventButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    margin: 50px auto 0 auto;
    border: 2px solid ${green};
    border-radius: 5px;
    padding: 15px 25px;

    :focus {
        outline: none;
    }

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



export default Event
