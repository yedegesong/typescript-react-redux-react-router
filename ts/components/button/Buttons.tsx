import * as React from "react";
import * as classNames from "classnames";
export default class Buttons extends React.Component<any,any> {

    static defaultProps = {
        type:'default'
    }

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let {onClick} = this.props;
        if ( onClick) {
            onClick(event);
        }
    }

    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        const {children, type, size,display, className} = this.props;
        let typeButton = 'ui-btn-';
        let addClassName = className;
        let Cls = classNames('ui-btn',{
            [`${typeButton}${type}`] : true,
            'ui-btn-block':display&&display=='block',
            'ui-btn-lg':size&&size=='large',
            'ui-btn-sm':size&&size=='small',
            [`${addClassName}`]: className
        });
        return (<button  {...this.props} className = { Cls }  onClick={(event) => this.handleClick(event) }>
                    {children}
                </button>
                    );
    }

}