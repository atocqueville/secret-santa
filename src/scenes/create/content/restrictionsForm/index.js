import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

import * as actions from '../../../../redux/app/ducks';

import validate from './validator';
import FormContent from './FormContent';

function RestrictionForm({
  firstForm,
  secondForm,
  updateStepper,
  submitRestrictionsForm
}) {

  function onSubmit(values) {
    submitRestrictionsForm(values);
    updateStepper(2);
  }

  const emptyIV = () => {
    const initialValues = { restrictions: [] }
    firstForm.participants.forEach(item => initialValues.restrictions.push({ forbidden: [] }))
    return initialValues;
  }
  
  const notEmptyIV = () => {
    while (firstForm.participants.length > secondForm.restrictions.length) {
      secondForm.restrictions.push({ forbidden: [] })
    }
    while (firstForm.participants.length < secondForm.restrictions.length) {
      secondForm.restrictions.pop()
    }
    return secondForm;
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={secondForm ? notEmptyIV() : emptyIV()}
      mutators={{ ...arrayMutators }}
      render={({ handleSubmit }) =>
        <form onSubmit={handleSubmit}>
          <FormContent
            name="restrictions"
            list={firstForm.participants}
            updateStepper={updateStepper}
          />
        </form>
      }
    />
  );
}

const mapStateToProps = (state) => ({
  firstForm: state.app.firstForm,
  secondForm: state.app.secondForm,
})

export default connect(mapStateToProps, actions)(RestrictionForm)
