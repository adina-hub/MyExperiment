import React from 'react';
import {
	PageSection,
	PageTitle,
	PageDescription,
	PageBtn
} from '../../../../globalStyles';

export default function Experiment() {
	return (
		<PageSection fullHeight light>
			<PageTitle>What is Scientify?</PageTitle>
			<PageDescription margin>
				Here you can find physics related experiments. From mechanics to optics
				and fluids, all in one place, each of them having a video with
				explications from our teachers.
			</PageDescription>
			<PageBtn>Learn More</PageBtn>
		</PageSection>
	);
}