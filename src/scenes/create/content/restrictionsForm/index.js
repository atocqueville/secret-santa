import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';

function RestrictionForm({ stepper }) {
  
  return (
    <Grid>
      <Typography>RESTRICTION FORM</Typography>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  stepper: state.app.stepper
})

export default connect(mapStateToProps)(RestrictionForm)