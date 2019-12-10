import React from 'react';
import { Grid, Typography, MenuItem } from '@material-ui/core';
import { FieldArray } from 'react-final-form-arrays'

import SelectField from '../../../../components/SelectField';
import BottomActions from './BottomActions';

export default function FormContent({ name, list, updateStepper }) {
  return (
    <Grid container direction='column'>
      <FieldArray name={name}>
        {({ fields }) => fields.map((name, index) => {
          const newList = list.slice();
          const personName = newList.splice(index, 1);
          return(
            <Grid item key={name}>
              <Grid
                container
                direction='row'
                style={{ display: 'flex', flex: '1 0 auto', justifyContent: 'start', alignItems: 'center' }}
              >
                <Grid item style={{ paddingRight: '10px' }}>
                  <Typography>{personName[0].name} ne doit pas offrir à :</Typography>
                </Grid>
                <Grid item>
                  <SelectField name={`${name}.forbidden`} list={list}>
                    {newList.map(person => (
                      <MenuItem key={person.name} value={person.id}>
                        {person.name}
                      </MenuItem>
                    ))}
                  </SelectField>
                </Grid>
              </Grid>
            </Grid>
          )
        })}
      </FieldArray>
      <BottomActions updateStepper={updateStepper} />
    </Grid>
  );
}
