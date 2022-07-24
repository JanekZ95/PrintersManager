import { call, put, takeEvery } from "redux-saga/effects";
import {
  setErrorMessage,
  setToken,
} from "../features/printersSearchView/printersSearchViewSlice";
import * as Api from "./requests/userRequests";

function* signIn(user) {
  try {
    const token = yield call(Api.signIn, user);
    yield put(setToken(token));
  } catch (err) {
    yield put(setErrorMessage(err.message));
  }
}

function* signUp(user) {
  try {
    const token = yield call(Api.signUp, user);
    yield put(setToken(token));
  } catch (err) {
    yield put(setErrorMessage(err.message));
  }
}

function* usersSaga() {
  yield takeEvery("USER_LOGGED_IN", signIn);
  yield takeEvery("USER_REGISTERED", signUp);
}

export default usersSaga;
