import Tool from '../../pub/Tool';
const CHANGE_NAV = 'CHANGE_NAV';
const AppState =
	{
		
		showNav : false
	}

export default function AppReducer(state = AppState, action) {
	switch (action.type) {
		case CHANGE_NAV:
			return state;
		default:
			return state
	}
}
