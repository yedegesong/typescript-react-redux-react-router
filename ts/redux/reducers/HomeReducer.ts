import Tool from '../../pub/Tool';
import {CHANGE_LIST} from "../actions/HomeAction"
const HomeState =
	{
		
		homeList: [
			{
				title:'标题一',
				content:'今天天气好好，也不知道会不会下雨'
			},
			{
				title:'标题二',
				content:'今天天气好好，也不知道会不会下雨二'
			}
		]
	}

export default function HomeReducers(state = HomeState, action) {
	switch (action.type) {
		case CHANGE_LIST:
			return Tool.assign({}, state, {homeList:action.state});
		default:
			return state
	}
}
