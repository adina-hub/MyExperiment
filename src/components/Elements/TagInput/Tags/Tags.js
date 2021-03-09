import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { darkBg, fontP, green, lightBg } from '../../../../styles/general';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function Tags({ tagsCount }) {

    const [tags, setTags] = useState([])

    useEffect(() => {

        return tagsCount(tags);
    }, [tags])

    const addHandler = (e) => {
        if (e.key === "Enter" && e.target.value) {
            setTags([...tags, e.target.value])
            e.target.value = null;
            e.preventDefault();
        }

    }

    const removeHandler = (index) => {
        setTags([...tags].filter((el, i) => {
            console.log(i);
            return (i !== index);
        }))
    }


    return (
        <TagsContainer>
            { tags.map((tag, i) => (
                <TagsItem key={i}>
                    {tag}
                    <TagsCloseBtn onClick={() => removeHandler(i)} />
                </TagsItem>
            ))}
            <input disabled={tags.length === 3} onKeyDown={(e) => addHandler(e)} />
        </TagsContainer>
    )
}


const TagsContainer = styled.div`
    display: flex;
    align-items: center;
	border: 1px solid ${green};
	border-radius: 5px;
	height: 30px;
    padding: 20px 0;
    overflow: hidden;


    >input{
        background: none;
	    outline: none;
        border: none;
        color: white;
        padding-left: 10px;
        width: 100%;
        
    }

`;

const TagsItem = styled.p`
    color: ${green};
    font-size: ${fontP};
    padding: 5px 20px 5px 10px;
    border-radius: 5px;
    width: auto;
    margin-left: 5px;
    background: ${darkBg};
    position: relative;
`;

const TagsCloseBtn = styled(HighlightOffIcon)`
    width: 15px !important;
    height: 15px !important;
    position: absolute;
    right: 2.5px;
    top: 2.5px;
`


export default Tags
