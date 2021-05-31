/**
 * @flow
 * @relayHash 87c9eafde572716e03528736e065c956
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
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
export type ParticipantInput = {|
  name: string,
  mail: string,
  list?: ?ParticipantListRelation,
  giftTo: string,
|};
export type ParticipantListRelation = {|
  create?: ?ChristmasListInput,
  connect?: ?string,
  disconnect?: ?boolean,
|};
export type relayCreateListMutationVariables = {|
  data: ChristmasListInput
|};
export type relayCreateListMutationResponse = {|
  +createChristmasList: {|
    +_id: string,
    +key: string,
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
    _id
    key
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
v1 = [
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
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "key",
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
    "name": "relayCreateListMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "relayCreateListMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "relayCreateListMutation",
    "id": null,
    "text": "mutation relayCreateListMutation(\n  $data: ChristmasListInput!\n) {\n  createChristmasList(data: $data) {\n    _id\n    key\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a904f71a961d72e06ae4832e4a716c3c';
module.exports = node;
