exports.handler = (event, context, callback) => {
  console.log(JSON.parse(event.body))

  return fetch('https://graphql.fauna.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': process.env.REACT_APP_FAUNA_SERVER_KEY,
    },
    body: event.body
  }).then(response => {
    return response.json();
  });
}