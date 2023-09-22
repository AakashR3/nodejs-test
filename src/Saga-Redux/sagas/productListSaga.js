// src/sagas/userSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchProductListFailure, fetchProductListSuccess } from '../actions/productActions';


function* fetchProductlistSaga() {
  try {
    const response = yield call(() => axios.get('http://localhost:3510/ProductLists'));
    yield put(fetchProductListSuccess(response.data));
  } catch (error) {
    yield put(fetchProductListFailure(error.message));
  }
}

function* productlistSaga() {
  yield takeEvery('FETCH_PRODUCTLIST_REQUEST', fetchProductlistSaga);
}

export default productlistSaga;
