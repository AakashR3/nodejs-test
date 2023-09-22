// src/store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import productlistSaga from './sagas/productListSaga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(productlistSaga); // Run your userSaga

export default store;
