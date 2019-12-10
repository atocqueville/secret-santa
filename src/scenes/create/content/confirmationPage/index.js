import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography, Button } from '@material-ui/core';

import * as actions from '../../../../redux/app/ducks';

function ParticipantsBlock({ participants }) {
  return(
    <Grid container direction='column' style={{ flex: '1 0 auto', paddingBottom: 40, paddingTop: 30 }}>
      <Grid item style={{ display: 'flex', justifyContent: 'start', paddingBottom: 15 }}>
        <Typography variant="h5">Participants</Typography>
      </Grid>
      <Grid item>
      <Typography>
        Les participants sont
        {participants.map((item, index) => {
          if (index === participants.length - 1) return ` ${item.name}`
          if (index === participants.length - 2) return ` ${item.name} et`
          return ` ${item.name},`
        })}.
      </Typography>
      </Grid>
    </Grid>
  )
}

function RestrictionsBlock({ participants, restrictions }) {
  const list = participants.map(item => item.name)
  return(
    <Grid container direction='column' style={{ flex: '1 0 auto' }}>
      <Grid item style={{ display: 'flex', justifyContent: 'start', paddingBottom: 15 }}>
        <Typography variant="h5">Restrictions</Typography>
      </Grid>
      <Grid item>
        {participants.map((item, indexP) => {
          const forbidden = restrictions[indexP].forbidden;
          return(
            <Typography key={item.name}>
              {item.name} ne doit pas offrir à
              {forbidden.map((id, indexF) => {
                if (indexF === forbidden.length - 1) return ` ${list[id]}`
                if (indexF === forbidden.length - 2) return(` ${list[id]} et`)
                return(` ${list[id]},`)
              })}.
            </Typography>
          )
        })}
      </Grid>
    </Grid>
  )
}

function ConfirmationPage({ participants, restrictions, updateStepper }) {
  return (
    <Grid>
      <ParticipantsBlock participants={participants} />
      <RestrictionsBlock participants={participants} restrictions={restrictions} />
      <Button
          variant="contained"
          color="primary"
          onClick={() => updateStepper(1)}
        >
          Back
        </Button>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  participants: state.app.firstForm.participants,
  restrictions: state.app.secondForm.restrictions,
})

export default connect(mapStateToProps, actions)(ConfirmationPage)
