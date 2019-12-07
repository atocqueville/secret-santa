import React from 'react';
import { Grid } from '@material-ui/core';

import Stepper from './stepper';
import StepContent from './content';
import StepButtons from './buttons';

export default function CreatePage() {

  return (
    <Grid>
      <Stepper />
      <StepContent />
      <StepButtons />
    </Grid>
  );
}
