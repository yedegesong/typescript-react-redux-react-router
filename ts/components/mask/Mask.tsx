import * as React from "react";
import * as ReactDOM from "react-dom";
interface MaskProps {
    isShow?: boolean;
    onClick?:Function;
}

export default class Mask extends React.Component<MaskProps, any> {

    static defaultProps = {
        isShow: true
    }

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    close(event){
        let {onClick} = this.props;
        if(onClick){
            onClick(event)
        }
    }
    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        let style = {display:this.props.isShow ? 'block' : 'none'}
        return (
            <div className="ui-mask" style = {style} onClick = {this.close}></div>
        );
    }

}
