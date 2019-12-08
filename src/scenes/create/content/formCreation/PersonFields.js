import React from 'react';
import { Grid } from '@material-ui/core';

import TextField from '../../../../components/TextField';

export default function PersonFields({ id }) {
  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <TextField label="Name" name={`name${id}`} required />
      </Grid>
      <Grid item xs={6}>
        <TextField label="E-mail" name={`mail${id}`} required />
      </Grid>
    </Grid>
  );
}
