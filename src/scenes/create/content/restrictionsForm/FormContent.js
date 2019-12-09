import React from 'react';
import { Grid } from '@material-ui/core';
import { FieldArray } from 'react-final-form-arrays'

import PersonSelect from './PersonSelect';
import BottomActions from './BottomActions';

export default function FormContent({ name, list, updateStepper }) {
  return (
    <Grid container>
      <FieldArray name={name}>
        {({ fields }) => fields.map(name => <PersonSelect id={name} key={name} list={list} />)}
      </FieldArray>
      <BottomActions updateStepper={updateStepper} />
    </Grid>
  );
}
