import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

function fetchQuery(operation, variables) {
  return fetch('/.netlify/functions/apiHandler', {
    method: 'POST',
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json()
  ).then(data => {
    console.log(data)
    if (data.errors) throw data.errors;
    return data
  });
}

export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),  
});
