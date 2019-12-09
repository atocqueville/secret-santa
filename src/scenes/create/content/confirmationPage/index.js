import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography, Button } from '@material-ui/core';

import * as actions from '../../../../redux/app/ducks';

function ConfirmationPage({ stepper, updateStepper }) {
  
  return (
    <Grid>
      <Typography>CONFIRMATION PAGE</Typography>
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
  stepper: state.app.stepper
})

export default connect(mapStateToProps, actions)(ConfirmationPage)
