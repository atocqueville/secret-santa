import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography, Button } from '@material-ui/core';

import { updateStepper } from '../../../../redux/app/ducks';

function RestrictionForm({ stepper, updateStepper }) {

  function handleBack() {
    updateStepper(0)
  }
  
  return (
    <Grid>
      <Typography>RESTRICTION FORM</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBack}
      >
        Back
      </Button>
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
)(RestrictionForm)
