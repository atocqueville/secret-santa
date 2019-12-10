import { fetchQuery } from 'relay-runtime';
import { environment } from '../../helpers/relay';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import * as actions from './ducks';
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
    console.log(createChristmasList)
    // const responseFauna = yield call(fetchQuery, environment, createChristmasList, { data: formWithSanta });
    const res2 = fetchQuery(environment, createChristmasList, { data: formWithSanta });
    console.log(res2)
  } catch (e) { console.log("error", e) }
}

export function* appWatcher() {
  yield takeLatest(MERGE_FORMS, computeSanta);
}
