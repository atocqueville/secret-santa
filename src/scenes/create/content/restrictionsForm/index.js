import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Grid, Typography, Select, Input, Chip, MenuItem } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import * as actions from '../../../../redux/app/ducks';
import BottomActions from './BottomActions';

const useStyles = makeStyles(theme => ({
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  }
}));

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function RestrictionForm({ form, updateStepper }) {
  console.log(form)
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = event => {
    setPersonName(event.target.value);
  };

  return (
    <Grid style={{ padding: '0 30px' }}>
      <Typography>RESTRICTION FORM</Typography>
      <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map(name => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      <BottomActions updateStepper={updateStepper} />
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  form: state.app.form
})

export default connect(mapStateToProps, actions)(RestrictionForm)
