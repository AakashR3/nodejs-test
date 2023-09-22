// src/store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import userSaga from './sagas/userSaga';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(userSaga); // Run your userSaga

export default store;
