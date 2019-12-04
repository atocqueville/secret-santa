/**
 * @flow
 * @relayHash eebaf8ceb8ac5bc1409c5650973efb19
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppExampleQueryVariables = {||};
export type AppExampleQueryResponse = {|
  +findChristmasListByID: ?{|
    +users: $ReadOnlyArray<{|
      +mail: string,
      +username: string,
    |}>
  |}
|};
export type AppExampleQuery = {|
  variables: AppExampleQueryVariables,
  response: AppExampleQueryResponse,
|};
*/


/*
query AppExampleQuery {
  findChristmasListByID(id: "2") {
    users {
      mail
      username
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "findChristmasListByID",
    "storageKey": "findChristmasListByID(id:\"2\")",
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": "2"
      }
    ],
    "concreteType": "ChristmasList",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "mail",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "username",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppExampleQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppExampleQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AppExampleQuery",
    "id": null,
    "text": "query AppExampleQuery {\n  findChristmasListByID(id: \"2\") {\n    users {\n      mail\n      username\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f11c1bbea329d6f814f5fdde24211602';
module.exports = node;
