import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

function fetchQuery(
  operation,
  variables,
) {
  return fetch('https://graphql.fauna.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': process.env.REACT_APP_FAUNA_API_KEY,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),  
});

export default environment;