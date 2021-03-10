import { Field } from 'formik'
import React from 'react'
import { PageInput } from '../../../styles/general'
import Steps from './Steps/Steps'

function StepsInput({ name, id }) {
    return (
        <Field name={name} component="textarea" id={id} type="text">
            {({ field: { name }, form: { setFieldValue } }) => (
                <Steps
                    stepsCount={step => setFieldValue(name, step)}
                />
            )}
        </Field>
    )
}

export default StepsInput
