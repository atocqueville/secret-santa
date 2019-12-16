/**
 * @flow
 * @relayHash b1191decc55d8e4cc479c6ba029f323f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ParticipantInput = {|
  name: string,
  mail: string,
  list?: ?ParticipantListRelation,
  secretSanta?: ?ParticipantSecretSantaRelation,
|};
export type ParticipantListRelation = {|
  create?: ?ChristmasListInput,
  connect?: ?string,
  disconnect?: ?boolean,
|};
export type ChristmasListInput = {|
  title: string,
  key: string,
  participants?: ?ChristmasListParticipantsRelation,
|};
export type ChristmasListParticipantsRelation = {|
  create?: ?$ReadOnlyArray<?ParticipantInput>,
  connect?: ?$ReadOnlyArray<?string>,
  disconnect?: ?$ReadOnlyArray<?string>,
|};
export type ParticipantSecretSantaRelation = {|
  create?: ?SecretSantaInput,
  connect?: ?string,
|};
export type SecretSantaInput = {|
  name: string,
  mail: string,
|};
export type relayCreateParticipantMutationVariables = {|
  data: ParticipantInput
|};
export type relayCreateParticipantMutationResponse = {|
  +createParticipant: {|
    +_id: string,
    +name: string,
  |}
|};
export type relayCreateParticipantMutation = {|
  variables: relayCreateParticipantMutationVariables,
  response: relayCreateParticipantMutationResponse,
|};
*/


/*
mutation relayCreateParticipantMutation(
  $data: ParticipantInput!
) {
  createParticipant(data: $data) {
    _id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "data",
    "type": "ParticipantInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createParticipant",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "data"
      }
    ],
    "concreteType": "Participant",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "relayCreateParticipantMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "relayCreateParticipantMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "relayCreateParticipantMutation",
    "id": null,
    "text": "mutation relayCreateParticipantMutation(\n  $data: ParticipantInput!\n) {\n  createParticipant(data: $data) {\n    _id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f4a01e02be62743e5d09e067bbb544c';
module.exports = node;
