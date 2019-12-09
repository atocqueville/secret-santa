import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography, Button } from '@material-ui/core';

import * as actions from '../../../../redux/app/ducks';

function ParticipantsBlock({ participants }) {
  const list = participants.map(person => person.name)
  return(
    <Grid container>
      <Typography>
        Les participants sont
        {list.map((item, index) => {
          if (index === participants.length - 1) return ` et ${item}.`
          return ` ${item},`
        })}
      </Typography>
    </Grid>
  )
}

function ConfirmationPage({ form, restrictions, updateStepper }) {
  return (
    <Grid>
      <ParticipantsBlock participants={form.participants} />
      <pre>{JSON.stringify(restrictions)}</pre>
      <Button
          variant="contained"
          color="primary"
          onClick={() => updateStepper(1)}
        >
          Back
        </Button>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  form: state.app.form,
  restrictions: state.app.restrictions,
})

export default connect(mapStateToProps, actions)(ConfirmationPage)
