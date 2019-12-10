/**
 * @flow
 * @relayHash d6176e384229f71c34cc118fe7134586
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ParticipantInput = {|
  name: string,
  mail: string,
  forbidden: $ReadOnlyArray<?number>,
  secretSanta: SecretSantaInput,
|};
export type SecretSantaInput = {|
  name: string,
  mail: string,
|};
export type relayCreateListMutationVariables = {|
  data: $ReadOnlyArray<ParticipantInput>
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
  $data: [ParticipantInput!]!
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
    "type": "[ParticipantInput!]!",
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
    "text": "mutation relayCreateListMutation(\n  $data: [ParticipantInput!]!\n) {\n  createChristmasList(data: $data) {\n    participants {\n      name\n      secretSanta {\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eb25957158c7945191ddb0dcb0d8ded5';
module.exports = node;
