import React from 'react';
import img from '../../../../images/img.jpg';
import {
	PageDescription,
	PageSection,
	PageTitle
} from '../../../../styles/general';
import Event from '../../../Elements/Event/Event';

export default function Events() {
	return (
		<PageSection fullHeight dark>
			<PageTitle>Dive into one of our favorite activities</PageTitle>
			<PageDescription margin>
				Sign up for lots more activities sure to inspire curiosity in your
				pupils. It's free!
			</PageDescription>
			<Event
				title="Optical Illusions"
				img={img}
				description="Join us in the anual event about the optical illusions! "
				location="Illinois, SUA"
				time="4 pm"
			/>
		</PageSection>
	);
}
