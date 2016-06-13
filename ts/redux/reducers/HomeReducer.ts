import Tool from '../../pub/Tool';
import {CHANGE_LIST} from "../actions/HomeAction"
const HomeState =
	{
		
		homeList: [
			{
				title:'世界最大玻璃观景台来中国了！去的人都吓跪了…',
				cover:'https://img.alicdn.com/bao/uploaded/i1/100000229582992594/TB2RC0DpVXXXXc7XXXXXXXXXXXX_!!0-0-travel.jpg_300x300q75'
			},
			{
				title:'这个被冯小刚赶出娱乐圈的男人，花了120亿造出最美酒店',
				cover:'https://img.alicdn.com/bao/uploaded/i4/100000232957612006/TB2sAR9qXXXXXXQXpXXXXXXXXXX_!!0-0-travel.jpg_300x300q75'
			},
			{
				title:'8张火车票，带你走遍最美中国！',
				cover:'https://img.alicdn.com/bao/uploaded/i2/100000230896053944/TB2JDLcpVXXXXcyXpXXXXXXXXXX_!!0-0-travel.jpg_300x300q75'
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
