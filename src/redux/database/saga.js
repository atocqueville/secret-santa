import { takeLatest, call } from 'redux-saga/effects';

import { ADD } from './constants';
// import * as databaseActions from './actions';

function* addRequest(action) {
// mutation createChristmasList($data: ChristmasListInput!) {
//   createChristmasList(data: $data) {
//     users
//   }
// }
  try {
    yield call(() => {});
  } catch(e) { }
}

export function* databaseWatcher() {
  yield takeLatest(ADD, addRequest);
}