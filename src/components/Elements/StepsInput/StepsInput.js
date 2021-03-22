import { Field } from 'formik'
import React from 'react'
import Steps from './Steps/Steps'

function StepsInput({ name }) {
    const fieldName = name;
    return (
        <Field name={fieldName} component="textarea" id={fieldName} type="text">
            {({ field: { value }, form: { setFieldValue } }) => (
                <Steps
                    stepsCount={step => setFieldValue(name, step)}
                    stepsValue={value}
                />
            )}
        </Field>
    )
}

export default StepsInput
