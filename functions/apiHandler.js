import fetch from "node-fetch";

export async function handler(event, context) {
  const b64encodedSecret = Buffer.from(
    process.env.FAUNA_DB_SERVER + ":"
  ).toString("base64")
  const headers = { Authorization: `Basic ${b64encodedSecret}` }
  try {
    const response = await fetch('https://graphql.fauna.com/graphql', {
      method: 'POST',
      headers,
      body: event.body
    });
    const body = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify(body)
    };
  } catch (e) {
    return {
      statusCode: 400,
    };
  }
}