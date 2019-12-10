import React from 'react';
import { MenuItem } from '@material-ui/core';

import SelectField from '../../../../components/SelectField';

export default function PersonSelect({ id, list }) {
  return (
    <SelectField name={`${id}.forbidden`}>
      {list.map(person => (
        <MenuItem key={person.name} value={person.id}>
          {person.name}
        </MenuItem>
      ))}
    </SelectField>
  );
}
