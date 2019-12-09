import React from 'react';
import { Grid } from '@material-ui/core';

import TextField from '../../../../components/TextField';

export default function PersonFields({ id }) {
  return (
    <Grid container spacing={6}>
      <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
        <TextField label="Name" name={`${id}.name`} />
      </Grid>
      <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
        <TextField label="E-mail" name={`${id}.mail`} />
      </Grid>
    </Grid>
  );
}
