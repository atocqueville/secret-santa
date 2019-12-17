import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography, CircularProgress } from '@material-ui/core';

function ConfirmationPage({ loading, listKey }) {
  return (
    <Grid style={{ paddingTop: 50 }}>
      {loading.on &&
        <Grid container direction="column">
          <Grid item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 40 }}>
            <CircularProgress size={60} />
          </Grid>
          <Grid item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h5">{loading.text}</Typography>
          </Grid>
        </Grid>
      }
      {!loading.on && listKey &&
        <Grid container direction="column">
          <Grid item>
            <Typography variant="body1">
              Voici ton code secret afin de pouvoir plus tard modifier les adresses mails des participants
              ou renvoyer le mail s'ils ne l'ont pas recu. Il ne sera écrit qu'une seule fois, il est donc 
              conseillé de le noter maintenant:
            </Typography>
          </Grid>
          <Grid item style={{ display: 'flex',  justifyContent: 'center', paddingTop: 30 }}>
            <Typography variant="h4">
              {listKey}
            </Typography>
          </Grid>
        </Grid>
      }
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  loading: state.app.loading,
  listKey: state.app.listKey
})

export default connect(mapStateToProps)(ConfirmationPage)
