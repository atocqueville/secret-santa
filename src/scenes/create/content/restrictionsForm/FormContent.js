import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { FieldArray } from 'react-final-form-arrays'

import PersonSelect from './PersonSelect';
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
                style={{ display: 'flex', flex: '1 0 auto', justifyContent: 'center', alignItems: 'center' }}
              >
                <Grid item style={{ paddingRight: '10px' }}>
                  <Typography>{personName} ne doit pas offrir à :</Typography>
                </Grid>
                <Grid item>
                  <PersonSelect
                    id={name}
                    name={personName}
                    list={newList}
                  />
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
