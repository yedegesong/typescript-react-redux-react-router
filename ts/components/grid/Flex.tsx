import * as React from "react";
import * as classNames from "classnames";
export default class Flex extends React.Component<any,any> {
    /**
     * 盒子删格布局容器
     */
    render() {
        const {children,className} = this.props;
        let addClassName = className;
        let Cls = classNames('ui-row-flex', {
            [`${addClassName}`]: className
        });
        return (<div className = {Cls} >
                    {children}
                </div>
                    );
    }

}