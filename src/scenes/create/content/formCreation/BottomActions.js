import React from 'react';
import { Grid, Button, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default function BottomActions({ push, pop, removeDisabled }) {
  return (
    <Grid container style={{ padding: '30px 0' }}>
      <Grid item xs={6} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => push('participants', { name: "", mail: "" })}
        >
          <AddIcon />
        </Fab>
        <Fab
          disabled={removeDisabled}
          color="primary"
          aria-label="remove"
          onClick={() => pop('participants')}
        >
          <RemoveIcon />
        </Fab>
      </Grid>
      <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
}
