import * as React from "react";
import * as classNames from "classnames";
/**
 * 面板组件
 */

export default class SwitchCell extends React.Component<any,any> {

    constructor(props) {
        super(props);
        let {checked} = this.props;
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            checked: checked
        };
    }

    handleChange(event){
        let {onChange} = this.props;
        this.setState({checked: !this.state.checked});
        if(onChange){onChange(event,this)}
    }

    render() {
        let {className} = this.props;
        let addClassName = className;
        let Cls = classNames('ui-switch', { [`${addClassName}`]: className });
        return (
            <label className={Cls}>
                <input
                    {...this.props}
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    type="checkbox"/>
            </label>
        );
    }
    
    /**
     * 解决二次渲染值回填
     */
    componentWillReceiveProps(nextProps) {
        this.setState({ checked: nextProps.checked });
    }
    
}
