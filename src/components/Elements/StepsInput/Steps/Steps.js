import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { green } from '../../../../styles/general';
import Step from './Step/Step';

function Steps({ stepsCount, stepsValue = [] }) {

    const [steps, setSteps] = useState(stepsValue);
    const [modified, setModified] = useState(false);

    useEffect(() => {
        return stepsCount(steps);
    }, [modified])


    useEffect(() => {
        setSteps(stepsValue);
    }, [stepsValue])

    const addHandler = (e) => {
        if (e.key === "Enter" && e.target.value) {
            setSteps([...steps, e.target.value])
            e.target.value = null;
            e.preventDefault();
        }
        setModified(!modified);

    }

    const modifiedHandler = (step, index) => {
        let stepsCopy = [...steps];
        stepsCopy[index] = step;
        setSteps(stepsCopy);
        setModified(!modified);
    }

    const removeHandler = (index) => {
        setSteps([...steps].filter((el, i) => {
            return (i !== index);
        }))
        setModified(!modified);
    }



    return (
        <StepsContainer>
            { steps.map((step, i) => (
                <Step key={i} nr={i + 1} name={step} remove={removeHandler} modified={modifiedHandler} />
            ))}
            <textarea
                onKeyDown={(e) => addHandler(e)}>
            </textarea>
        </StepsContainer>
    )
}

const StepsContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${green};
	border-radius: 5px;
	padding: 10px 10px;
    > textarea{
    background: none;
	outline: none;
	border: none;
    color: white;
	line-height: 20px;
    width: 100%;
    height: 100px;
    padding-left: 5px;
    }
`




export default Steps
