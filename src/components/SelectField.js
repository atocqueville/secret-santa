import { Select as MuiSelect, Chip, FormControl, FormHelperText } from '@material-ui/core';
import React, { useState } from 'react';

import { Field } from 'react-final-form';

function SelectWrapper(props) {
	const {
		input: { name, checked, onChange, ...restInput },
    meta,
    list,
		...rest
  } = props;
  
  return (
    <MuiSelect
      variant='outlined'
      color='secondary'
      multiple
      name={name}
      onChange={onChange}
      inputProps={restInput}
      {...rest}
      renderValue={selected => (
        <div>
          {selected.map(value => {
            const person = list[value]
            return <Chip key={person.id} label={person.name} />
          })}
        </div>
      )}
    />
  );
}

export default function SelectField(props) {
	const {
		name,
    list,
		children,
		required,
		fieldProps,
		formControlProps,
		formHelperTextProps,
	} = props;

	const [error, setError] = useState(null);

	return (
		<FormControl required={required} error={!!error} margin="normal" fullWidth={true} {...formControlProps}>
			<Field
				render={fieldRenderProps => {
					const { meta } = fieldRenderProps;
					const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;
					setError(showError ? fieldRenderProps.meta.error : null);
					return <SelectWrapper list={list} {...fieldRenderProps} />;
				}}
				name={name}
				{...fieldProps}
			>
				{children}
			</Field>
			{error ? <FormHelperText style={{position: 'absolute', bottom: '-17px'}} {...formHelperTextProps}>{error}</FormHelperText> : <></>}
		</FormControl>
	);
}

