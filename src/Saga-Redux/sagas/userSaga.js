// src/sagas/userSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchUsersFailure, fetchUsersSuccess } from '../actions/userActions';


function* fetchUsersSaga() {
  try {
    const response = yield call(() => axios.get('http://localhost:3510/ProductLists'));
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* userSaga() {
  yield takeEvery('FETCH_USERS_REQUEST', fetchUsersSaga);
}

export default userSaga;
