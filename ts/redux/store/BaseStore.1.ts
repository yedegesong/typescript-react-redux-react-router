import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import Tool from '../../pub/Tool';
//数据监听
import HomeReducer from '../reducers/HomeReducer';
import AppReducer from '../reducers/AppReducer';

export function BaseStore(reducers?:any) {
	let _reducers = Tool.assign(reducers,{AppReducer,HomeReducer});
	//合并所有要监听reducers 派生器
	const Reducers = combineReducers(_reducers);
	const store = createStore(
		Reducers,
		applyMiddleware(thunkMiddleware)
	);
	return store;
}