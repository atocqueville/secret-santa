import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays'
import { Grid } from '@material-ui/core';

import * as actions from '../../../../redux/app/ducks';

import validate from './validator';
import FormContent from './FormContent';

const buildInitialValues = (participants) => {
  const initialValues = { restrictions: [] }
  participants.forEach(item => initialValues.restrictions.push({ forbidden: [] }))
  return initialValues;
}

const buildNameList = (participants) => {
  return participants.flatMap(item => item.name)
}

function RestrictionForm({ form: { participants }, restrictions, updateStepper, submitRestrictionsForm }) {

  function onSubmit(values) {
    submitRestrictionsForm(values);
    updateStepper(2);
  }

  return (
    <Grid style={{ padding: '0 30px' }}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={restrictions || buildInitialValues(participants)}
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
  form: state.app.form,
  restrictions: state.app.restrictions,
})

export default connect(mapStateToProps, actions)(RestrictionForm)
