import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { green } from '../../../styles/general';
import Event from '../Event/Event';
import { db } from '../../../firebase';
function Carousel() {

    const [counter, setCounter] = useState(0);
    const [events, setEvents] = useState([])
    const [carouselEvents, setCarouselEvents] = useState([]);
    const [carouselCounter, setCarouselCounter] = useState();

    useEffect(() => {

        db.collection("events").get().then(querySnapshot => {
            let array = [];
            querySnapshot.docs.map(doc => {
                let data = doc.data();
                array.push({
                    title: data.title,
                    description: data.description,
                    imgUrl: data.imgUrl,
                })
            })
            setEvents(array);
            setCarouselEvents([...array.slice(0, 2)]);
        });
    }, [])

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
                            img={event.imgUrl}
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
