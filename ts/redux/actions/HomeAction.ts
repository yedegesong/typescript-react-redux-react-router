import { push} from 'react-router-redux';
import Api from '../../pub/Api';
/**
 * dispatch(push('/community')) 异步跳转
 * @type {string}
 */
const CHANGE_LIST = 'CHANGE_LIST';

let OnChangeList = () => {
    return { type: CHANGE_LIST};
}
function changeListAction() {
    return (dispatch, getState) => {
        Api.queryContent().then((data)=>{
           //console.log(data)
        })
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