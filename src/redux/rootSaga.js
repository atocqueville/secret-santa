import { all } from 'redux-saga/effects';

import { appWatcher } from './app/sagas';

/**
 * Combine all sagas
 */
export default function* rootSaga() {
    yield all([
        appWatcher()
    ]);
}