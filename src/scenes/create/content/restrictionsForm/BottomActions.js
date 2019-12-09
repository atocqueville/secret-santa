import React from 'react';
import { Grid, Button } from '@material-ui/core';

export default function BottomActions({ updateStepper }) {
  return (
    <Grid container style={{ padding: '30px 0' }}>
      <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => updateStepper(0)}
        >
          Back
        </Button>
      </Grid>
      <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          type='submit'
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
}
