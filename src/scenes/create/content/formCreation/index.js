import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import { Grid } from '@material-ui/core';

import PersonFields from './PersonFields';
import validate from './validator';
import * as actions from '../../../../redux/app/ducks';

import TextField from '../../../../components/TextField';
import BottomActions from './BottomActions';

function FormCreation({ firstForm, updateStepper, submitCreateForm }) {

  function onSubmit(values) {
    submitCreateForm(values);
    updateStepper(1);
  }
  
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      initialValues={firstForm}
      mutators={{ ...arrayMutators }}
      render={({
        handleSubmit,
        form: { mutators: { push, pop } },
        values
      }) =>
        <form onSubmit={handleSubmit}>
          <Grid style={{ display: 'flex', justifyContent: 'center', paddingBottom: 10 }}>
            <TextField label="Nom du groupe" name="listName" />
          </Grid>
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
  );
}

const mapStateToProps = (state) => ({
  firstForm: state.app.firstForm
})

export default connect(mapStateToProps, actions)(FormCreation)
