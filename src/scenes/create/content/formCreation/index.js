import React from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'

import PersonFields from './PersonFields';
import validate from './validator';
import * as actions from '../../../../redux/app/ducks';

const initialValues = {
  participants: [
    { name: "", mail: "" },
    { name: "", mail: "" },
    { name: "", mail: "" },
  ]
};

function FormCreation({ form, updateStepper, submitCreateForm }) {

  function onSubmit(values) {
    console.log(values);
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
          form: {
            mutators: { push, pop }
          },
          values
        }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FieldArray name="participants">
                {({ fields }) => fields.map(name => <PersonFields id={name} key={name} />)}
              </FieldArray>
              <Fab color="primary" aria-label="add" onClick={() => push('participants', { name: "", mail: "" })}>
                <AddIcon />
              </Fab>
              <Fab
                disabled={values.participants.length <= 3}
                color="primary"
                aria-label="remove"
                onClick={() => pop('participants')}
              >
                <RemoveIcon />
              </Fab>
              <Button
                variant="contained"
                color="primary"
                type="submit"
              >
                Next
              </Button>
            </form>
          )
        }}
      />
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  form: state.app.form
})

export default connect(mapStateToProps, actions)(FormCreation)
