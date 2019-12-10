import React from 'react';
import { connect } from 'react-redux';
import { Stepper, Step, StepLabel } from '@material-ui/core';

function StepperCustom({ stepper }) {
  const steps = ['Participants', 'Interdictions', 'Confirmation', 'Merry Christmas! 🎅'];

  return (
    <Stepper activeStep={stepper} alternativeLabel style={{ padding: '24px' }}>
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
