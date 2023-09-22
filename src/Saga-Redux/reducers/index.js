// src/reducers/index.js
import { combineReducers } from 'redux';
import productListReducer from './productListReducer';


const rootReducer = combineReducers({
  productlist: productListReducer,
});

export default rootReducer;
