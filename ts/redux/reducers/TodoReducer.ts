import {combineReducers} from 'redux';
/**
 * 将路由跳转注定到全局
 */
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import HomeReducer from './HomeReducer';
import AppReducer from './AppReducer';

/**
 * 合并reducers
 */
const todoApp = combineReducers({
  HomeReducer,
  AppReducer,
  routing: routerReducer
})

export default todoApp;