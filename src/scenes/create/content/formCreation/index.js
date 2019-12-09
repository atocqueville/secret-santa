import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'

import PersonFields from './PersonFields';
import validate from './validator';
import * as actions from '../../../../redux/app/ducks';
import BottomActions from './BottomActions';

const initialValues = {
  participants: [
    { name: "", mail: "" },
    { name: "", mail: "" },
    { name: "", mail: "" },
  ]
};

function FormCreation({ form, updateStepper, submitCreateForm }) {

  function onSubmit(values) {
    submitCreateForm(values);
    updateStepper(1);
  }
  
  return (
    <Grid style={{ padding: '0 30px' }}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={form || initialValues}
        mutators={{ ...arrayMutators }}
        render={({
          handleSubmit,
          form: { mutators: { push, pop } },
          values
        }) =>
          <form onSubmit={handleSubmit}>
            <FieldArray name="participants">
              {({ fields }) => fields.map(name => <PersonFields id={name} key={name} />)}
            </FieldArray>
            <BottomActions
              push={push}
              pop={pop}
              removeDisabled={values.participants.length <= 3}
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

export default connect(mapStateToProps, actions)(FormCreation)
