import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import * as actions from '../../../../redux/app/ducks';

function ConfirmationPage({ finalForm }) {
  return (
    <Grid>
      <pre>{JSON.stringify(finalForm, 0, 2)}</pre>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  finalForm: state.app.finalForm,
})

export default connect(mapStateToProps, actions)(ConfirmationPage)
