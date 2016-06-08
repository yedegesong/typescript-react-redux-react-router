import { push} from 'react-router-redux';
/**
 * dispatch(push('/community')) 异步跳转
 * @type {string}
 */
const CHANGE_LIST = 'CHANGE_LIST';

let OnChangeList = (state) => {
    return { type: CHANGE_LIST, state };
}
function changeListAction(data) {
    return (dispatch, getState) => {
        let oldList = getState().HomeReducer.homeList
        let newList = oldList.concat(data);
        dispatch(OnChangeList(newList));

        /**
         * 异步跳转
         */
        //dispatch(push('/community'))
    }
}

export {
    CHANGE_LIST,
    changeListAction
}