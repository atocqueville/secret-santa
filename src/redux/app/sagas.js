import { commitMutation } from '../../helpers/relay';
import { put, takeLatest, select } from 'redux-saga/effects';
import * as actions from './ducks';
import { MERGE_FORMS } from './ducks';

import { createChristmasList, createParticipant } from './relay';
import ID from '../../helpers/generatorID';

const getAppState = (state) => state.app;

function* computeSanta() {
  const { firstForm, secondForm } = yield select(getAppState);
  const finalForm = firstForm.participants.map(
    (person, index) => ({ ...person, ...secondForm.restrictions[index] })
  );

  try {
    // COMPUTE SECRET SANTA WITH NETLIFY FUNCTION
    yield put(actions.updateLoading(true, "Attribution des pères Noël..."))
    const responseFunc = yield fetch('/.netlify/functions/computeSanta', {
      method: 'POST',
      body: JSON.stringify(finalForm)
    });
    const formWithSanta = yield responseFunc.json();


    // CREATION DE LA LISTE + RECUPERATION ID AND KEY
    yield put(actions.updateLoading(true, "Creation d'une nouvelle liste de Noël..."))
    const { createChristmasList: list } = yield commitMutation({ mutation: createChristmasList, variables:
      { data: { title: firstForm.listName, key: ID() } }
    });
    yield put(actions.updateListKey(list.key))


    // AJOUT PARTICIPANTS DANS DB AVEC ID LIST
    for (const participant of formWithSanta) {
      yield put(actions.updateLoading(
        true, `Enregistrement dans la base de données... ${formWithSanta.indexOf(participant) + 1}/${formWithSanta.length}`
      ));
      yield commitMutation({ mutation: createParticipant, variables:
        { data: {
          ...participant,
          list: { connect: list._id },
        }}
      });
    }


    // SEND EACH PARTICIPANTS IN NETLIFY FUNCTION MAILING
    for (const participant of formWithSanta) {
      yield put(actions.updateLoading(
        true, `Envoi des mails aux pères Noël... ${formWithSanta.indexOf(participant) + 1}/${formWithSanta.length}`
      ))
      yield fetch('/.netlify/functions/sendMail', {
        method: 'POST',
        body: JSON.stringify(participant)
      });
      // const resMail = yield resJSON.json();
    }

    yield put(actions.updateLoading(false, ""))
  } catch (e) { console.log("error", e) }
}

export function* appWatcher() {
  yield takeLatest(MERGE_FORMS, computeSanta);
}
