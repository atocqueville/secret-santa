import { commitMutation } from '../../helpers/relay';
import { put, takeLatest, select } from 'redux-saga/effects';
// import * as actions from './ducks';
import { MERGE_FORMS } from './ducks';

import { createChristmasList, createParticipant } from './relay';
import ID from '../../helpers/generatorID';

function IDgen () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

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
    console.log('form final', formWithSanta)

    // CREATION DE LA LISTE + RECUPERATION ID
    const { createChristmasList: list } = yield commitMutation({ mutation: createChristmasList, variables:
      { data: { title: "Test" + IDgen(), key: ID() } }
    });

    // AJOUT PARTICIPANTS DANS DB AVEC ID LIST
    for (const participant of formWithSanta) {
      console.log('part', participant)
      const { createParticipant: res} = yield commitMutation({ mutation: createParticipant, variables:
        { data: {
          ...participant,
          list: { connect: list._id },
          secretSanta: {
            create: participant.secretSanta
          }
        }}
      });
      console.log('relay response', res)
    }

  } catch (e) { console.log("error", e) }
}

export function* appWatcher() {
  yield takeLatest(MERGE_FORMS, computeSanta);
}
