import { call, put, takeLatest } from 'redux-saga/effects';
import { Api } from '../_apis/users.api';
import { authActions } from '../_store/users.slice';

function* login(action) {
    try {
        const user = yield call(Api.signIn, action.payload);
        yield put(authActions.loginFullfilled(user));
    } catch (err) {
        yield put(authActions.loginRejected(err.message));
    }
}

function* register(action) {
    try {
        const user = yield call(Api.signUp, action.payload);
        yield put(authActions.loginFullfilled(user));
    } catch (err) {
        yield put(authActions.loginRejected(err.message));
    }
}

export function* usersSaga() {
    yield takeLatest(authActions.login().type, login);
    yield takeLatest(authActions.register().type, register);
}
