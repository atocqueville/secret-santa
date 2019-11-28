import { all } from 'redux-saga/effects';

import { databaseWatcher } from './database/saga';

/**
 * Combine all sagas
 */
export default function* rootSaga() {
    yield all([
        databaseWatcher()
    ]);
}