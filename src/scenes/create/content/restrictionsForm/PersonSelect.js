import React from 'react';
import { MenuItem } from '@material-ui/core';

import SelectField from '../../../../components/SelectField';

export default function PersonSelect({ id, list }) {
  return (
    <SelectField name={`${id}.forbidden`}>
      {list.map(name => (
        <MenuItem key={name} value={name}>
          {name}
        </MenuItem>
      ))}
    </SelectField>
  );
}
