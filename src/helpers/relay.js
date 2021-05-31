import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { commitMutation as commitMutationRelay } from 'react-relay';

function fetchQuery(operation, variables) {
  return fetch('/.netlify/functions/apiHandler', {
    method: 'POST',
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json()
  ).then(data => {
    if (data.errors) throw data.errors;
    return data
  });
}

export const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),  
});

export function commitMutation(options) {
  return new Promise((resolve, reject) => {
    commitMutationRelay(environment, {
      ...options,
      onError: (error) => { reject(error) },
      onCompleted: (response) => { resolve(response) }
    });
  });
}