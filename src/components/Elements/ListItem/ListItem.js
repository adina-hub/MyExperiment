import React from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Link } from 'react-router-dom';
import { darkBg, fontH3, green } from '../../../styles/general';
import { db } from '../../../firebase';
import firebase from 'firebase';

function ListItem({ type, id, name, url, userType, uid = null }) {
	const deleteHandler = async () => {
		if (userType === 'admin') {
			if (type === 'event') {
				await db
					.collection('events')
					.doc(id)
					.delete()
					.then(() => console.log('DELETED EVENT'));
			} else {
				await db
					.collection('experiments')
					.doc(id)
					.delete()
					.then(() => console.log('DELETED EXPERIMENT'));
			}
		} else {
			if (type === 'event') {
				await db
					.collection('users')
					.doc(uid)
					.update({
						events: firebase.firestore.FieldValue.arrayRemove(id)
					})
					.then(() => console.log('DELETED FROM EVENTS'))
					.catch((err) => console.log(err));
			} else {
				await db
					.collection('users')
					.doc(uid)
					.update({
						favorites: firebase.firestore.FieldValue.arrayRemove(id)
					})
					.then(() => console.log('DELETED FROM FAVORITES'))
					.catch((err) => console.log(err));
			}
		}
		window.location.reload();
	};

	return (
		<ListItemContainer>
			<ListItemTitle>{name}</ListItemTitle>
			<ListItemIcons>
				<Link to={url}>
					<InfoIcon />
				</Link>
				<Link>
					<DeleteIcon onClick={deleteHandler} />
				</Link>
			</ListItemIcons>
		</ListItemContainer>
	);
}

const ListItemContainer = styled.div`
	width: 260px;
	height: 43px;
	margin: 7px auto;
	padding: 0px 10px;
	background: ${darkBg};
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (min-width: 768px) {
		width: 480px;
		height: 50px;
	}
`;

const ListItemTitle = styled.div`
	font-size: ${fontH3};
	color: ${green};
	font-weight: normal;
	text-align: left;

	@media screen and (min-width: 768px) {
		font-size: 18px;
		padding: 5px 10px;
	}
`;

const ListItemIcons = styled.div`
	width: 50px;
	display: flex;
	justify-content: space-between;

	> button {
		outline: none;
		background: none;
		color: white;
		border: none;
		font-size: ${fontH3};
	}
`;

const InfoIcon = styled(InfoOutlinedIcon)`
	color: white;
	width: 20px;
	height: 20px;
`;

const DeleteIcon = styled(DeleteOutlinedIcon)`
	color: #bf2424;
	width: 20px;
	height: 20px;
`;

export default ListItem;
