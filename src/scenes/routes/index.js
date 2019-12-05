import React from 'react';
import { Router } from '@reach/router';
import { Grid } from '@material-ui/core';

import FirstPage from './firstPage';
import SecondPage from './secondPage';
import ThirdPage from './thirdPage';

export default function Routes() {
  return (
    <Grid style={{ padding: 20 }}>
      <Router>
        <FirstPage path="/" />
        <SecondPage path="/second" />
        <ThirdPage path="/third" />
      </Router>
    </Grid>
  );
}
