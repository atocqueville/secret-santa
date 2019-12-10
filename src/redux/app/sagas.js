import { commitMutation } from 'react-relay';
import { environment } from '../../helpers/relay';
import { put, takeLatest, select } from 'redux-saga/effects';
// import * as actions from './ducks';
import { MERGE_FORMS } from './ducks';

import { createChristmasList } from './relay';

const getAppState = (state) => state.app;

function* computeSanta() {
  const { firstForm, secondForm } = yield select(getAppState);
  const finalForm = firstForm.participants.map(
    (person, index) => ({ ...person, ...secondForm.restrictions[index] })
  );
  try {
    const responseFunc = yield fetch('/.netlify/functions/computeSanta', {
      method: 'POST',
      body: JSON.stringify(finalForm)
    });
    const formWithSanta = yield responseFunc.json();
    console.log(formWithSanta)
    const res2 = commitMutation(environment, { mutation: createChristmasList, variables: { data: formWithSanta }});
    console.log(res2)
  } catch (e) { console.log("error", e) }
}

export function* appWatcher() {
  yield takeLatest(MERGE_FORMS, computeSanta);
}
