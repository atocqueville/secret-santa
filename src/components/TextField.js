import React from 'react';

import { Field } from 'react-final-form';
import { TextField as MuiTextField } from '@material-ui/core';

function TextFieldWrapper(props) {
	const {
		input: { name, onChange, value, type = 'text', ...restInput },
		meta,
		...rest
	} = props;

  const { ...lessrest } = rest;
  const showError = meta.error && meta.touched;
  
	return (
		<MuiTextField
      helperText={showError ? meta.error : undefined}
      FormHelperTextProps={{style: {position: 'absolute', bottom: '-17px'}}}
			error={showError}
			onChange={onChange}
			name={name}
			value={value}
			margin="normal"
			type={type}
			InputLabelProps={{ shrink: !!value }}
			{...lessrest}
			inputProps={restInput}
		/>
	);
}

export default function TextField({ name, ...rest }) {
	return (
		<Field
			name={name}
      render={({ input, meta }) => <TextFieldWrapper input={input} meta={meta} {...rest} />}
		/>
	);
}