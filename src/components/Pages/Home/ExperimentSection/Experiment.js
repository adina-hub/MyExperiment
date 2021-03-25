import React from 'react';
import {
	PageSection,
	PageTitle,
	PageDescription,
	PageBtn
} from '../../../../styles/general';
import { Link } from 'react-router-dom';

export default function Experiment() {
	return (
		<PageSection fullHeight light>
			<PageTitle>What is Scientify?</PageTitle>
			<PageDescription margin>
				Here you can find physics related experiments. From mechanics to optics
				and fluids, all in one place, each of them having a video with
				explications from our teachers.
			</PageDescription>
			<Link to="/experiments">
				<PageBtn marginTop>Learn More</PageBtn>
			</Link>
		</PageSection>
	);
}
