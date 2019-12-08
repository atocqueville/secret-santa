import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Form } from 'react-final-form';

import PersonFields from './PersonFields';

import * as actions from '../../../../redux/app/ducks';

function FormCreation({ form, participants, updateStepper, submitCreateForm, addParticipant, removeParticipant }) {
  const [disableRemove, setDisable] = useState(true)

  useEffect(() => {
    setDisable(participants <= 3)
  }, [participants]);

  function onSubmit(values) {
    console.log(values);
    submitCreateForm(values);
    updateStepper(1);
  }

  function validate(values) {
    console.log(values)
    if (!values.mail3) {
      return { mail3: 'Name is required' };
    }
    return;
  }
  
  return (
    <Grid style={{ padding: '0 30px' }}>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={form}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            {[...Array(participants)].map((e, i) => <PersonFields e={e} id={i} key={i} />)}
            <pre>{JSON.stringify(values)}</pre>
            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              Next
            </Button>
            <Fab color="primary" aria-label="add" onClick={addParticipant}>
              <AddIcon />
            </Fab>
            <Fab disabled={disableRemove} color="primary" aria-label="add" onClick={removeParticipant}>
              <RemoveIcon />
            </Fab>
          </form>
        )}
      />
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  form: state.app.form,
  participants: state.app.participants
})

export default connect(
  mapStateToProps,
  actions
)(FormCreation)
