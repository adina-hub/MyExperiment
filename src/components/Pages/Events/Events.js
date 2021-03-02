import { Pages } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { darkBg, fontH2, fontP, green, lightBg, PageContainer, PageDescription, PageHR, PageSection, PageTitle } from '../../../globalStyles';
import Event from '../../Elements/Event/Event';
import Navbar from '../../Elements/Navbar/Navbar';


function Events() {
    return (
        <PageContainer>
            <Navbar></Navbar>
            <PageSection>
                <PageTitle>Events</PageTitle>
                <PageHR />
                <PageDescription>Sign up for lots more activities sure to inspire curiosity in your pupils. It's free!</PageDescription>
                <PageHR />
            </PageSection>
            <PageSection dark>
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
            </PageSection>
        </PageContainer>
    )
}

export default Events

const EventsList = styled.div`
	display: flex;
	flex-direction: column;
`;

