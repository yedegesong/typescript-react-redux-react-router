import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from "classnames";
const _toastHolder = document.createElement('div');
document.body.appendChild(_toastHolder);
 class Toast extends React.Component<any,any> {

    static defaultProps = {
        tips: '正在加载中...',
        autoClose:false
    }

    constructor(props){
        super(props);
    }

    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        let {tips} = this.props;
        return(
            <div className="ui-loading-block">
                <div className="ui-loading-cnt">
                    <i className="ui-loading-bright"></i>
                    <p>{tips}</p>
                </div>
            </div>
        );
    }

}

export default {

    open(config?:any) {
        ReactDOM.render(
            <Toast {...config} />,
            _toastHolder
        );
    },

    close() {
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(_toastHolder);
        }, 15);
    }

};