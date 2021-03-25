import { Field } from 'formik';
import React from 'react';
import Tags from './Tags/Tags';

function TagsInput({ name }) {
<<<<<<< HEAD
	const fieldName = name;
	return (
		<Field name={fieldName} id={fieldName} type="text">
			{({ field: { value }, form: { setFieldValue } }) => {
				return (
					<Tags
						tagsValue={value}
						tagsCount={(tag) => setFieldValue(name, tag)}
					/>
				);
			}}
		</Field>
	);
=======
    const fieldName = name;
    return (
        <Field name={fieldName} id={fieldName} type="text">
            {({ field: { value }, form: { setFieldValue } }) => {
                return (<Tags
                    tagsValue={value}
                    tagsCount={tag => setFieldValue(name, tag)}
                />)
            }}
        </Field>
    )
>>>>>>> a20b9673291d079d350244587b2a87ce74a661a4
}

export default TagsInput;
