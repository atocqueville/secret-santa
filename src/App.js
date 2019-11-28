import React from 'react';
import graphql from 'babel-plugin-relay/macro';
import {fetchQuery} from 'relay-runtime';
import environment from './helpers/relay'
import { Button } from '@material-ui/core'

function App() {

  const query = graphql`
  query AppExampleQuery {
    allLists {
      data {
        users
      }
    }
  }
`;

const handleClick = () => {
  fetchQuery(environment, query)
  .then(data => {
    console.log(data)
  });
}

  return (
    <div>
      Salut
      <Button variant='contained' onClick={handleClick}>
        Bouton
      </Button>
    </div>
  );
}

export default App;
