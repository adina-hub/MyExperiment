import { Form, Formik } from 'formik'
import React from 'react'
import { darkBg, green } from '../../../styles/general'
import StepsInput from '../../Elements/StepsInput/StepsInput'

function Test() {
    return (
        <div style={{ background: "#272640", height: "100vh", paddingTop: "50px" }}>
            <Formik onSubmit={(values) => console.log(values.steps)}
                initialValues={{ steps: [] }}>
                <Form>
                    <StepsInput name="steps" id="steps" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div >
    )
}

export default Test
