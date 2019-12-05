import React from 'react';
import { connect } from 'react-redux';
import { Link } from "@reach/router";
import { Grid, Typography, Button } from '@material-ui/core';
import { updateStepper } from '../../redux/app/ducks';

function StepButtons({ stepper, updateStepper }) {
  return (
    <Grid>
      <div>
        {stepper === 2 ? (
          <div>
            <Typography>All steps completed</Typography>
            <Button
              component={Link}
              to='/'
              onClick={() => updateStepper(0)}
            >
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Button
              component={Link}
              to={stepper === 1 ? '/' : '/second'}
              disabled={stepper === 0}
              onClick={() => updateStepper(stepper -= 1)}
            >
              Back
            </Button>
            <Button
              component={Link}
              to={stepper === 0 ? '/second' : '/third'}
              variant="contained"
              color="primary"
              onClick={() => updateStepper(stepper += 1)}
            >
              {stepper === 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        )}
      </div>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  stepper: state.app.stepper
})

const mapDispatchToProps = { updateStepper }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepButtons)
