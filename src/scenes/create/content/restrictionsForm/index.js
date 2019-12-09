import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import { Grid, MenuItem } from '@material-ui/core';

import * as actions from '../../../../redux/app/ducks';
import BottomActions from './BottomActions';
import SelectField from '../../../../components/SelectField';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function RestrictionForm({ form, updateStepper }) {
  console.log('form init', form)

  function onSubmit(values) {
    console.log('submit', values)
    // updateStepper(2);
  }

  function validate(values) {
    console.log('validate', values)
  }

  return (
    <Grid style={{ padding: '0 30px' }}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{ restrictions: [] }}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <SelectField name='restrictions'>
                {names.map(name => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </SelectField>
            </form>
          )
        }}
      />

      <BottomActions updateStepper={updateStepper} />
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  form: state.app.form
})

export default connect(mapStateToProps, actions)(RestrictionForm)
