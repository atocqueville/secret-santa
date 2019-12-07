import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';

function ConfirmationPage({ stepper }) {
  
  return (
    <Grid>
      <Typography>CONFIRMATION PAGE</Typography>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  stepper: state.app.stepper
})

export default connect(mapStateToProps)(ConfirmationPage)
