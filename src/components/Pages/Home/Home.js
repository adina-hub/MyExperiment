import React from 'react';
import Hero from './HeroSection/Hero';
import Experiment from './ExperimentSection/Experiment';
import Events from './EventSection/Event';
import Contact from './ContactSection/Contact';
import Navbar from '../../Elements/Navbar/Navbar';
import { PageContainer } from '../../../styles/general';

export default function Home() {
	return (
		<>
			<PageContainer>
				<Navbar></Navbar>
				<Hero />
				<Experiment />
				<Events />
				<Contact />
			</PageContainer>
		</>
	);
}
