import React from 'react'
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { Link } from 'react-router-dom';
import { fontH3 } from '../../../styles/general';
import { db } from '../../../firebase';
function ListItem({ type, id, name, url }) {

	const deleteHandler = async () => {

		if (type === "event") {
			await db.collection("events").doc(id).delete().then(() => console.log("DELETED EVENT"))
		} else {
			await db.collection("experiments").doc(id).delete().then(() => console.log("DELETED EXPERIMENT"))
		}
		window.location.reload();
	}

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
	)
}


const ListItemContainer = styled.div`
    width: 260px;
	height: 40px;
	margin: 7px auto;
	padding: 0px 10px;
	background: grey;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;

`;


const ListItemTitle = styled.div`
        font-size: ${fontH3};
		color: white;
		font-weight: normal;
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


export default ListItem
