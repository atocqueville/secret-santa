/**
 * @flow
 * @relayHash bd6bda6a6858a2b71bbb905dab73e9ac
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppExampleQueryVariables = {||};
export type AppExampleQueryResponse = {|
  +allLists: {|
    +data: $ReadOnlyArray<?{|
      +users: $ReadOnlyArray<string>
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
  allLists {
    data {
      users
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allLists",
    "storageKey": null,
    "args": null,
    "concreteType": "ChristmasListPage",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "data",
        "storageKey": null,
        "args": null,
        "concreteType": "ChristmasList",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "users",
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
    "text": "query AppExampleQuery {\n  allLists {\n    data {\n      users\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ac763f33a2efc41bb80a76dc52963ad6';
module.exports = node;
