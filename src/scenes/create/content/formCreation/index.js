import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';

function FormCreation({ stepper }) {
  
  return (
    <Grid>
      <Typography>FORM CREATION</Typography>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  stepper: state.app.stepper
})

export default connect(mapStateToProps)(FormCreation)
