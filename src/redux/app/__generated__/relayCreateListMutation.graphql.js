/**
 * @flow
 * @relayHash b81d1311c07facf581acfc081d314dec
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ChristmasListInput = {|
  participants: $ReadOnlyArray<string>
|};
export type relayCreateListMutationVariables = {|
  data: ChristmasListInput
|};
export type relayCreateListMutationResponse = {|
  +createChristmasList: {|
    +participants: $ReadOnlyArray<{|
      +name: string,
      +secretSanta: {|
        +name: string
      |},
    |}>
  |}
|};
export type relayCreateListMutation = {|
  variables: relayCreateListMutationVariables,
  response: relayCreateListMutationResponse,
|};
*/


/*
mutation relayCreateListMutation(
  $data: ChristmasListInput!
) {
  createChristmasList(data: $data) {
    participants {
      name
      secretSanta {
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "data",
    "type": "ChristmasListInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createChristmasList",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "data"
      }
    ],
    "concreteType": "ChristmasList",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "participants",
        "storageKey": null,
        "args": null,
        "concreteType": "Participant",
        "plural": true,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "secretSanta",
            "storageKey": null,
            "args": null,
            "concreteType": "SecretSanta",
            "plural": false,
            "selections": [
              (v1/*: any*/)
            ]
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
    "name": "relayCreateListMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "relayCreateListMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "relayCreateListMutation",
    "id": null,
    "text": "mutation relayCreateListMutation(\n  $data: ChristmasListInput!\n) {\n  createChristmasList(data: $data) {\n    participants {\n      name\n      secretSanta {\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9f2f2939da467fcc0069e617bea191f9';
module.exports = node;
