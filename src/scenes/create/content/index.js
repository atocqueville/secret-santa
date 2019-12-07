import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import FormCreation from './formCreation'
import RestrictionsForm from './restrictionsForm'
import ConfirmationPage from './confirmationPage'

function StepContent({ stepper }) {

  useEffect(() => {
    switch(stepper) {
      case 0:
        setComponent(FormCreation)
        break;
      case 1:
        setComponent(RestrictionsForm)
        break;
      case 2:
        setComponent(ConfirmationPage)
        break;
      default:
        break;
    }
  }, [stepper]);

  const [Component, setComponent] = useState(FormCreation)
  return (
    <Component />
  );
}

const mapStateToProps = (state) => ({
  stepper: state.app.stepper
})

export default connect(mapStateToProps)(StepContent)
