import { Field } from 'formik'
import React from 'react'
import Tags from './Tags/Tags'

function TagsInput({ name }) {
    const fieldName = name;
    return (
        <Field name={fieldName} id={fieldName} type="text">
            {({ field: { value }, form: { setFieldValue } }) => {
                console.log(value);
                return (<Tags
                    tagsValue={value}
                    tagsCount={tag => setFieldValue(name, tag)}
                />)
            }}
        </Field>
    )
}

export default TagsInput
