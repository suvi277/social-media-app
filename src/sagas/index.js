import { all, fork } from 'redux-saga/effects';
import usersSagas from './users.sagas';

export const rootSaga = function* root() {
    yield all([fork(usersSagas)]);
};
