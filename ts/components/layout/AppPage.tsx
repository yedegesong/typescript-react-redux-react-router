import * as React from "react";
import * as classNames from "classnames";

export default class AppPage extends React.Component<any,any> {

    constructor(props){
        super(props);
        
    }

    render() {
        const {children,className} = this.props;
        let addClassName = className;
        let Cls = classNames('ui-container',{
            [`${addClassName}`]: className
        });
        return (<section className={Cls}>
            {children}
        </section>);
    }

}