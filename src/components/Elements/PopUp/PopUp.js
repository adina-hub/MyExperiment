import React  from 'react'
import styled from 'styled-components';
import { fontH2, fontH3, green, lightBg, PageBtn, PageLinkBtn } from '../../../styles/general';
import CloseIcon from '@material-ui/icons/Close';
import { db } from '../../../firebase';
import firebase from 'firebase';
import { useHistory } from 'react-router';
function PopUp({ id, date, time, location, uid, close }) {

    const history = useHistory();

    const acceptHandler = async () => {
        let docId = "";
        let userName = "";
        await db.collection('users').where("uid", "==", uid).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    console.log(doc.id);
                    docId = doc.id;
                    userName = doc.data().name;
                });
            });
        console.log(docId);
        await db.collection('users').doc(docId).update({
            events: firebase.firestore.FieldValue.arrayUnion(id)
        });;

        await db.collection('events').doc(id).update({
            bookings: firebase.firestore.FieldValue.arrayUnion({
                userId: id,
                userName: userName
            }),
            places: firebase.firestore.FieldValue.increment(-1)
        });;
        history.push('/events');
    }


    return (
        <PopUpContainer>
            <PopUpCard>
                <PopUpClose onClick={close} />
                <PopUpTitle>Event Details</PopUpTitle>
                <PopUpItem>Date: <span>{date}</span> </PopUpItem>
                <PopUpItem>Time: <span>{time}</span> </PopUpItem>
                <PopUpItem>Location: <span>{location}</span> </PopUpItem>
                <PopUpItem>Booking ID: <span>{id}</span> </PopUpItem>
                <PopUpBtns>
                    <PopUpLinkBtn onClick={close}>Go back</PopUpLinkBtn>
                    <PopUpBtn onClick={acceptHandler}>Accept</PopUpBtn>
                </PopUpBtns>
            </PopUpCard>
        </PopUpContainer>
    )
}

const PopUpContainer = styled.div`
    position: fixed;
    background: rgba(0,0,0,0.5);
    height: 100vh;
    width: 100%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PopUpCard = styled.div`
    position: relative;
    height: 45vh;
    background: ${lightBg};
    padding: 30px 20px 0 20px;
    border-radius: 15px;
    width: 85%;

    @media screen and (min-width: 768px) {
		width: 55%;
	}

    @media screen and (min-width: 1024px) {
        height: 45vh;
		width: 45%;
	}
`;

const PopUpClose = styled(CloseIcon)`
    position: absolute;
    top: 10px;
    right: 13px;
    fill: ${green} !important;
    width: 25px !important;
`;

const PopUpTitle = styled.h2`
    font-size: ${fontH2};
    color: ${green};
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        margin-bottom: 25px;
	}
`

const PopUpItem = styled.div`
    font-size: 17px;
    color: #fff;
    text-align: left;
    margin-bottom: 10px;

    span{
        color: ${green};
        margin-left: 10px;
    }

    @media screen and (min-width: 768px) {
        margin-left: 15px;
	}

    @media screen and (min-width: 1024px) {
        margin-bottom: 15px;
        margin-left: 20px;
	}
`

const PopUpBtns = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: space-evenly;
`

const PopUpLinkBtn = styled(PageLinkBtn)`
    padding: 12px 20px;
    width: auto;
`

const PopUpBtn = styled(PageBtn)`
    padding: 15px 25px;
    width: auto;
    margin: 0 0 0 20px;
`

export default PopUp
