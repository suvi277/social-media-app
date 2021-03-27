import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { usersLoaded, usersRejected } from '@app/actions/users/users';
import { API_ENDPOINT } from '@app/constants/endpoint';
import { REQUEST_USERS } from '@app/constants/actionTypes';

function getData(params) {
    return axios.get(API_ENDPOINT, {params});
}

function* getUsersSaga(params) {
    try {
        const response = yield call(() => getData(params.value));
        yield put(usersLoaded(response.data.results));
    } catch (error) {
        yield put(usersRejected(error));
    }
}

export default function* usersSagas() {
    yield takeEvery(REQUEST_USERS, getUsersSaga);
}
