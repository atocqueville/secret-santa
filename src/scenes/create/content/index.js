import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import FormCreation from './formCreation';
import RestrictionsForm from './restrictionsForm';
import ConfirmationPage from './confirmationPage';
import Uploading from './uploading';

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
      case 3:
        setComponent(Uploading)
        break;
      default:
        break;
    }
  }, [stepper]);

  const [Component, setComponent] = useState(FormCreation)
  return (
    <Grid style={{ padding: '0 30px' }}>
      <Component />
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  stepper: state.app.stepper
})

export default connect(mapStateToProps)(StepContent)
