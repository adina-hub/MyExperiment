import { Field } from 'formik'
import React from 'react'
import Tags from './Tags/Tags'

function TagsInput({ name, id }) {

    return (
        <Field name={name} id={id} type="text">
            {({ field: { name }, form: { setFieldValue } }) => (
                <Tags
                    tagsCount={tag => setFieldValue(name, tag)}
                />
            )}
        </Field>
    )
}

export default TagsInput
