import React from 'react'
import styled from 'styled-components';
import { darkBg, fontH2, fontP, green, lightBg } from '../../../globalStyles';
import Event from '../../Elements/Event/Event';
import Navbar from '../../Elements/Navbar/Navbar';


function Events() {
    return (
        <EventsContainer>
            <Navbar></Navbar>
            <EventsTop>
                <h2>Events</h2>
                <hr />
                <p>Sign up for lots more activities sure to inspire curiosity in your pupils. It's free!</p>
                <hr />
            </EventsTop>
            <EventsBottom>
                <EventsList>
                    <Event title="Optical Illusions"
                        img="https://images.unsplash.com/photo-1614483573015-fc4ceb584797?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        description="Join us in the anual event about the optical illusions! "
                        location="Illinois, SUA"
                        time="4 pm"
                    />
                    <Event title="Optical Illusions"
                        img="https://images.unsplash.com/photo-1614483573015-fc4ceb584797?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        description="Join us in the anual event about the optical illusions! "
                        location="Illinois, SUA"
                        time="4 pm"
                    />
                    <Event title="Optical Illusions"
                        img="https://images.unsplash.com/photo-1614483573015-fc4ceb584797?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        description="Join us in the anual event about the optical illusions! "
                        location="Illinois, SUA"
                        time="4 pm"
                    />
                </EventsList>
            </EventsBottom>
        </EventsContainer>
    )
}

export default Events

const EventsContainer = styled.div``;

const EventsTop = styled.div`
	background: ${lightBg};
	height: 40vh;
	display: flex;
	flex-direction: column;
	padding: 0px 12.5px;
	text-align: center;

	> h2 {
		margin: 80px auto 0px auto;
		font-size: ${fontH2};
		letter-spacing: 1px;
		color: ${green};
	}

	> hr {
		width: 70%;
		height: 3px;
		background: #fff;
		margin: 24px auto;
	}

	> p {
		color: white;
		font-size: ${fontP};
		font-weight: normal;
		line-height: 25px;
	}
`;

const EventsBottom = styled.div`
	background: ${darkBg};
	display: flex;
	flex-direction: column;
	padding: 30px 20px;
`;

const EventsList = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`;

