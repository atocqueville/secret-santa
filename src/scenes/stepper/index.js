import React from 'react';
import { connect } from 'react-redux';
import { Stepper, Step, StepLabel } from '@material-ui/core';

function StepperCustom({ stepper }) {
  const steps = ['Add people', 'Specify interdictions', 'Merry Christmas! 🎅'];

  return (
    <Stepper activeStep={stepper} alternativeLabel>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

const mapStateToProps = (state) => ({
  stepper: state.app.stepper
})

export default connect(
  mapStateToProps,
)(StepperCustom)
