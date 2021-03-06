import React from 'react';
import {
	PageDescription,
	PageSection,
	PageTitle
} from '../../../../styles/general';
import Carousel from '../../../Elements/Carousel/Carousel';

export default function Events() {
	return (
		<PageSection fullHeight dark>
			<PageTitle>Dive into one of our favorite activities</PageTitle>
			<PageDescription margin>
				Sign up for lots more activities sure to inspire curiosity in your
				pupils. It's free!
			</PageDescription>
			<Carousel />
		</PageSection>
	);
}
