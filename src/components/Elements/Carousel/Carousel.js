import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { green } from '../../../styles/general';
import Event from '../Event/Event';
function Carousel() {

    const [counter, setCounter] = useState(0);
    const events = [

        {
            img: 'https://images.unsplash.com/photo-1564325724739-bae0bd08762c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2NpZW5jZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            title: 'Optical Illusions',
            description: "Best of the best illusions you've ever seen",
        },
        {
            img: 'https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c2NpZW5jZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            title: 'Fantasy Chemicals',
            description: "Try these chemicals at your own risk.",
        },
        {
            img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c2NpZW5jZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            title: 'Plasma Balls',
            description: "Come and see some magnificent plasma balls",
        },
        {
            img: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaWVuY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            title: 'The ball of plasma',
            description: "A huge ball of plasma displayed",
        },
        {
            img: 'https://images.unsplash.com/photo-1534777410147-084a460870fc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHNjaWVuY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            title: 'Mirrors Show',
            description: "Illusions using mirrors and lights",
        },
    ]

    const [carouselEvents, setCarouselEvents] = useState([]);
    const [carouselCounter, setCarouselCounter] = useState();

    useEffect(() => {
        if (counter === 0) {
            setCarouselEvents([...events.slice(0, 2)]);
            setCarouselCounter(0);
        } else if (counter === events.length - 1) {
            setCarouselEvents([...events.slice(events.length - 2, events.length)]);
            setCarouselCounter(1);
        }
        else {
            setCarouselEvents([...events.slice(counter - 1, counter + 2)]);
            setCarouselCounter(1);
        }
    }, [counter])


    return (
        <CarouselContainer>
            { counter !== 0 && <PreviousBtn onClick={() => setCounter(counter - 1)} />}
            <CarouselEvents>
                {carouselEvents.map((event, i) => {

                    return (
                        <Event
                            title={event.title}
                            img={event.img}
                            description={event.description}
                            location="Illinois, SUA"
                            time="4 pm"
                            carousel
                            key={event.img}
                            first={i === 0 ? true : false}
                            primary={i === carouselCounter ? true : false}
                            last={i === carouselEvents.length - 1 ? true : false}
                        />
                    )
                }
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
