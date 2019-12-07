import React from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from '@material-ui/core';
import { Form } from 'react-final-form';

import TextField from '../../../../components/TextField';
import { updateStepper } from '../../../../redux/app/ducks';

function FormCreation({ stepper, updateStepper }) {
  
  function onSubmit(values) {
    console.log(values)
    updateStepper(1)
  }

  function validate(values) {
    console.log(values)
    if (!values.name) {
      return { name: 'Saying hello is nice.' };
    }
    return;
  }

  return (
    <Grid>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <TextField label="Hello world" name="name" required bite='la' />
            <TextField label="Hello world 2" name="mail" required />
            <pre>{JSON.stringify(values)}</pre>
            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              Next
            </Button>
          </form>
        )}
      />
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  stepper: state.app.stepper
})

const mapDispatchToProps = { updateStepper }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormCreation)
