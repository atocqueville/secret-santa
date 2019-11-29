exports.handler = (event, context, callback) => {
  console.log("ici")
  console.log(JSON.parse(event.body))

  return fetch('https://graphql.fauna.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': process.env.FAUNA_CLIENT_SECRET,
    },
    body: event.body
  }).then(response => {
    return response.json();
  });
}