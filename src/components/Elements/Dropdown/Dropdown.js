import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { darkBg, green } from '../../../styles/general';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function Dropdown({ expCategories, expSetCategory }) {
	const [categories, setCategories] = useState();
	const [open, setOpen] = useState(false);
	const [category, setCategory] = useState('Choose a category'); 

	useEffect(() => {
		console.log(expCategories);
		let array = ['All'];
		expCategories.map((category) =>
			category.domains.map((domain) => array.push(domain))
		);
		let set = [...new Set(array)];
		setCategories(set);
	}, [expCategories]);

	return (
		<DropdownContainer>
			<ExperimentsDropdownClose>
				<p>{category}</p>
				{!open && <ExpandMoreIcon onClick={() => setOpen(!open)} />}
				{open && <KeyboardArrowUpIcon onClick={() => setOpen(!open)} />}
			</ExperimentsDropdownClose>
			{open && (
				<ExperimentsDropdownOpen>
					{categories.map((category) => (
						<p
							onClick={() => {
								setOpen(!open);
								setCategory(category);
								expSetCategory(category);
							}}
						>
							{category}
						</p>
					))}
				</ExperimentsDropdownOpen>
			)}
		</DropdownContainer>
	);
}

export default Dropdown;

const DropdownContainer = styled.div`
	background: ${darkBg};
	display: flex;
	flex-direction: column;
	margin-top: 35px;

	@media screen and (min-width: 768px) {
		width: 70%;
		margin: 35px auto;
	}

	
`;

const ExperimentsDropdownClose = styled.div`
	display: flex;
	border: 2px solid ${green};
	border-radius: 5px;
	padding: 5px 0 5px 15px;
	justify-content: space-between;
	align-items: center;

	> p {
		background: transparent;
		flex: 0.8;
		font-size: 1rem;
		color: #fff;
		text-align: left;
	}

	> .MuiSvgIcon-root {
		flex: 0.2;
		border-left: 2px solid ${green};
		font-size: 2rem;
		fill: ${green};
	}
`;

const ExperimentsDropdownOpen = styled.div`
	border: 2px solid ${green};
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	background: ${darkBg};
	margin-top: 5px;
	> p {
		color: ${green};
		padding: 12.5px 0;
		:hover {
			color: ${darkBg};
			background: ${green};
		}
	}
`;
