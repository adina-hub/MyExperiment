import React, { useEffect, useState } from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import { darkBg, green } from '../../../../../styles/general';
import styled from 'styled-components';



function Step({ name, nr, remove, modified }) {

    const [edit, setEdit] = useState(false);
    const [stepName, setStepName] = useState(name);

    useEffect(() => {
        console.log(nr);
        console.log("HERE");
    }, [])

    const editKeyDownHandler = (e) => {
        if (e.key === "Enter" && e.target.value) {
            modified(e.target.value, nr - 1);
            e.preventDefault();
            setEdit(false);
        }
    }

    const editClickHandler = () => {
        modified(stepName, nr - 1);
        setEdit(false);
    }

    return (
        <StepContainer>
            {!edit && `${nr}. ${name}`}
            {edit &&
                <StepEditContainer>
                    {`${nr}.`}
                    <StepEditInput value={stepName} onChange={(e) => setStepName(e.target.value)} autoFocus onKeyDown={(e) => editKeyDownHandler(e)} />
                </StepEditContainer>
            }
            {!edit && <StepEditBtn onClick={() => setEdit(true)} />}
            { edit && <StepCheckBtn onClick={editClickHandler} />}
            <StepCloseBtn onClick={() => remove(nr - 1)} />
        </StepContainer >
    )
}


const StepContainer = styled.div`
    width: 100%;
    display: flex;
    background: ${darkBg};
    color: ${green};
    padding: 5px 57.5px 5px 10px; 
    border-radius: 5px;
    margin: 5px auto;
    position: relative;
    line-height: 25px;
    text-align: left;
`

const StepEditContainer = styled.div`
    display: flex;
`;

const StepEditInput = styled.input`
    background: transparent;
    color: ${green};
    outline: none;
    border: none;
    margin-left: 5px;
`

const StepCloseBtn = styled(HighlightOffIcon)`
    width: 20px !important;
    height: 20px !important;
    position: absolute;
    right: 7.5px;
    top: 7.5px;
`
const StepEditBtn = styled(EditIcon)`
    width: 20px !important;
    height: 20px !important;
    position: absolute;
    right: 35px;
    top: 7px;
`

const StepCheckBtn = styled(DoneIcon)`
    width: 25px !important;
    height: 25px !important;
    position: absolute;
    right: 35px;
    top: 5px;
`



export default Step
