import React from 'react';
import { Router } from '@reach/router';
// import graphql from 'babel-plugin-relay/macro';
// import {fetchQuery} from 'relay-runtime';
// import environment from './helpers/relay';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from './scenes/navbar';
import Drawer from './scenes/drawer';
import CreatePage from './scenes/create';
import EditPage from './scenes/edit';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1
  }
}));

// const query = graphql`
//   query AppExampleQuery {
//     findChristmasListByID(id: "2") {
//       users {
//         mail
//         username
//       }
//     }
//   }
// `;

export default function App() {
  const classes = useStyles();

  // const handleClick = () => {
  //   fetchQuery(environment, query)
  //   .then(data => {
  //     console.log(data)
  //   }).catch(error => {
  //     console.log(error)
  //   });
  // }

  return (
    <div className={classes.root}>
      <Navbar />
      <Drawer />
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <Router>
          <CreatePage path='/' />
          <EditPage path='/edit' />
        </Router>
      </div>
    </div>
  );
}
