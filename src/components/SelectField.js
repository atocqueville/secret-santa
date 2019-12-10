import React from 'react';
import { connect } from 'react-redux';
import { Select as MuiSelect, FormControl, Chip } from '@material-ui/core';
import { Field } from 'react-final-form';

function SelectWrapper(props) {
	const {
		input: { name, checked, onChange, ...restInput },
    meta,
    firstForm: { participants },
		...rest
  } = props;

  return (<MuiSelect
    variant='outlined'
    color='secondary'
    name={name}
    onChange={onChange}
    inputProps={restInput}
    {...rest}
    multiple
    renderValue={selected => (
      <div>
        {selected.map(value => {
          const person = participants[value]
          return <Chip key={person.id} label={person.name} />
        })}
      </div>
    )}
  />)
}

function SelectField(props) {
	const {
    name,
    firstForm,
		children,
		required,
		fieldProps,
		formControlProps,
  } = props;
  
	return (
		<FormControl required={required} margin="normal" fullWidth={true} {...formControlProps}>
			<Field
				render={fieldRenderProps => <SelectWrapper firstForm={firstForm} {...fieldRenderProps} />}
				name={name}
				{...fieldProps}
			>
				{children}
			</Field>
		</FormControl>
	);
}

const mapStateToProps = (state) => ({
  firstForm: state.app.firstForm,
})

export default connect(mapStateToProps)(SelectField)
