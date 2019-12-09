import React from 'react';
import { Select as MuiSelect, FormControl, Chip } from '@material-ui/core';
import { Field } from 'react-final-form';

function SelectWrapper(props) {
	const {
		input: { name, checked, onChange, ...restInput },
		meta,
		...rest
	} = props;

  return (<MuiSelect
		variant='outlined'
    name={name}
    onChange={onChange}
    inputProps={restInput}
    {...rest}
    multiple
    renderValue={selected => (
      <div>
        {selected.map(value => (
          <Chip key={value} label={value} />
        ))}
      </div>
    )}
  />)
}

export default function SelectField(props) {
	const {
		name,
		children,
		required,
		fieldProps,
		formControlProps,
  } = props;
  
	return (
		<FormControl required={required} margin="normal" fullWidth={true} {...formControlProps}>
			<Field
				render={fieldRenderProps => <SelectWrapper {...fieldRenderProps} />}
				name={name}
				{...fieldProps}
			>
				{children}
			</Field>
		</FormControl>
	);
}
