import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays'
import { Grid } from '@material-ui/core';

import * as actions from '../../../../redux/app/ducks';

import FormContent from './FormContent';

const buildInitialValues = (participants) => {
  const initialValues = { restrictions: [] }
  participants.forEach(item => initialValues.restrictions.push({ forbidden: [] }))
  return initialValues;
}

const buildNameList = (participants) => {
  return participants.flatMap(item => item.name)
}

function RestrictionForm({ form: { participants }, updateStepper }) {

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
        initialValues={buildInitialValues(participants)}
        mutators={{ ...arrayMutators }}
        render={({ handleSubmit }) =>
          <form onSubmit={handleSubmit}>
            <FormContent
              name="restrictions"
              list={buildNameList(participants)}
              updateStepper={updateStepper}
            />
          </form>
        }
      />
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  form: state.app.form
})

export default connect(mapStateToProps, actions)(RestrictionForm)
