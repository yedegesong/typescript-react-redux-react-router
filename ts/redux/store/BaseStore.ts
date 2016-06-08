import { createStore, combineReducers, applyMiddleware} from 'redux';
import { hashHistory,browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware, push } from 'react-router-redux'
import Tool from '../../pub/Tool';
const middleware = routerMiddleware(hashHistory)
//监听全局数据
import TodoReducer from '../reducers/TodoReducer';

export function BaseStore() {
	const Reducers = TodoReducer;
	const store = createStore(
		Reducers,
		applyMiddleware(thunkMiddleware,middleware)
	);
	return store;
}