import React, { useState } from 'react'
import styled from 'styled-components';
import img from '../../../images/img.jpg';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { green } from '../../../styles/general';
import Event from '../Event/Event';
function Carousel() {

    const [counter, setCounter] = useState(0)
    const [first, setFirst] = useState(false)
    const [last, setLast] = useState(false)
    const [primary, setPrimary] = useState(false)

    const events = [
        'https://images.unsplash.com/photo-1564325724739-bae0bd08762c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2NpZW5jZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c2NpZW5jZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c2NpZW5jZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaWVuY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1534777410147-084a460870fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHNjaWVuY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    ]
    return (
        <CarouselContainer>
            { counter !== 0 && <PreviousBtn onClick={() => setCounter(counter - 1)} />}
            <CarouselEvents>
                {events.map((event, i) =>
                (
                    <Event
                        title={`Optical Illusion ${i}`}
                        img={event}
                        description="Join us in the anual event about the optical illusions! "
                        location="Illinois, SUA"
                        time="4 pm"
                        carousel
                        key={event}
                        first={i === 0 ? true : false}
                        primary={counter === i ? true : false}
                        last={i === events.length - 1 ? true : false}
                    />
                )
                    /* < Event
                        title = {`Optical Illusion ${i}`}
                        img={event}
                        description="Join us in the anual event about the optical illusions! "
                        location="Illinois, SUA"
                        time="4 pm"
                        carousel
                        key={event}
                        first={first}
                        primary={primary}
                        last={last}
                    /> */

                )}
            </CarouselEvents>
            { counter !== events.length - 1 && <NextBtn onClick={() => setCounter(counter + 1)} />}
        </CarouselContainer>
    )
}

const CarouselContainer = styled.div`
    display: flex;
    position: relative;
    height: 360px;
`;

const CarouselEvents = styled.div`
    display: flex;
    position: relative;
    width: 310px;
    overflow: hidden;
    margin: 0 5%;
`;

const PreviousBtn = styled(ArrowBackIosIcon)`
    fill: ${green} !important;
    position: absolute;
    top: 50%;
    z-index: 2;
`

const NextBtn = styled(ArrowForwardIosIcon)`
    fill: ${green} !important;
    position: absolute;
    right: 0;
    top: 50%;
    z-index: 2;
`




export default Carousel
