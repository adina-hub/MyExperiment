import React from 'react';
import Hero from './HeroSection/Hero';
import Experiment from './ExperimentSection/Experiment';
import Events from './EventSection/Event';
import Contact from './ContactSection/Contact';
import { Navbar } from '../../Elements/Navbar/index';

function Home() {
	return (
		<>
			<div>
				<Navbar></Navbar>
				<Hero />
				<Experiment />
				<Events />
				<Contact />
			</div>
		</>
	);
}

export default Home;
