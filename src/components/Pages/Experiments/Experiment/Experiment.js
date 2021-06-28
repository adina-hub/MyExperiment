import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	fontH3,
	green,
	PageAddBtn,
	PageContainer,
	PageSection,
	PageSubHR,
	PageSubtitle,
	PageTitle
} from '../../../../styles/general';
import Navbar from '../../../Elements/Navbar/Navbar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { db } from '../../../../firebase';
import { useHistory, useParams } from 'react-router';
import { useAuth } from '../../../../context/AuthContext';
import firebase from 'firebase';

function Experiment() {
	let { id } = useParams();
	const { currentUser } = useAuth();
	const history = useHistory();
	window.scrollTo(0, 0);
	const [experiment, setExperiment] = useState({
		title: '',
		videoUrl: '',
		domains: [],
		materials: [],
		steps: []
	});

	const [clicked, setClicked] = useState(false);

	const favoriteHandler = async () => {
		if (currentUser) {
			setClicked(!clicked);
			let docId = '';
			await db
				.collection('users')
				.where('uid', '==', currentUser.uid)
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						docId = doc.id;
					});
				});
			if (!clicked) {
				await db
					.collection('users')
					.doc(docId)
					.update({
						favorites: firebase.firestore.FieldValue.arrayUnion(id)
					});
			} else {
				await db
					.collection('users')
					.doc(docId)
					.update({
						favorites: firebase.firestore.FieldValue.arrayRemove(id)
					});
			}
		} else {
			history.push('/signIn');
		}
	};

	useEffect(() => {
		const initialise = async () => {
			await db
				.collection('experiments')
				.doc(id)
				.get()
				.then((doc) => setExperiment(doc.data()));
			if (currentUser) {
				await db
					.collection('users')
					.where('uid', '==', currentUser.uid)
					.get()
					.then((querySnapshot) => {
						querySnapshot.forEach((doc) => {
							console.log(doc.data().favorites);
							doc.data().favorites.forEach((favorite) => {
								if (favorite === id) {
									setClicked(true);
								}
							});
						});
					});
			}
		};
		initialise();
	}, []);

	return (
		<PageContainer>
			<Navbar></Navbar>
			<PageSection>
				<PageTitle white small>
					{experiment.title}
				</PageTitle>
				<ExperimentVideo
					src={experiment.videoUrl}
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>

				<ExperimentInfo>
					<PageSubtitle>Activity overview</PageSubtitle>
					<PageSubHR />
					<ExperimentTopics>
						<PageSubtitle small>Science Topics:</PageSubtitle>
						{experiment.domains.map((topic, i) => (
							<p>
								{topic}
								{i !== experiment.domains.length - 1 ? ',' : null}
							</p>
						))}
					</ExperimentTopics>
					<ExperimentDetails>
						<ul>
							<PageSubtitle small>Materials needed:</PageSubtitle>
							{experiment.materials.map((material) => (
								<li>{material}</li>
							))}
						</ul>
					</ExperimentDetails>
					<ExperimentDetails>
						<ol>
							<PageSubtitle small>Steps to follow:</PageSubtitle>
							{experiment.steps.map((step) => (
								<li>{step}</li>
							))}
						</ol>
					</ExperimentDetails>
				</ExperimentInfo>
				<PageAddBtn onClick={favoriteHandler}>
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

	@media screen and (min-width: 768px) {
		width: 530px;
		height: 330px;
		margin: 25px auto;
	}

	@media screen and (min-width: 1024px) {
		width: 650px;
		height: 350px;
		margin: 35px auto;
	}
`;

const ExperimentInfo = styled.div`
	margin-top: 30px;
	padding: 0 15px;
	h3,
	h2,
	ul,
	ol {
		color: ${green};
	}
	h3,
	ul,
	ol {
		font-size: ${fontH3};
	}

	@media screen and (min-width: 1024px) {
		padding: 0 30px;
	}
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
