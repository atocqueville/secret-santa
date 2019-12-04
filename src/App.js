import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {fetchQuery} from 'relay-runtime';
import environment from './helpers/relay';
import { Container } from '@material-ui/core';

import Navbar from './scenes/navbar';
import Stepper from './scenes/stepper';
import StepContent from './scenes/main';

export default function App() {

  const query = graphql`
  query AppExampleQuery {
    findChristmasListByID(id: "2") {
      users {
        mail
        username
      }
    }
  }
`;

const handleClick = () => {
  fetchQuery(environment, query)
  .then(data => {
    console.log(data)
  }).catch(error => {
    console.log(error)
  });
}

  return (
    <Container maxWidth={false} style={{ padding: 0 }}>
      <Navbar />
      <Stepper />
      <StepContent />
    </Container>
  );
}
