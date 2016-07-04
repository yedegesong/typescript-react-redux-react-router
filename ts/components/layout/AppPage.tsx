import * as React from "react";
import * as classNames from "classnames";
import * as ReactCSSTransitionGroup from "react-addons-css-transition-group";
/**
 * transition:
 * fadeIn //淡入
 * fadeInLeft//左弹淡入
 * fadeInRight//右弹淡入
 */
export default class AppPage extends React.Component<any,any> {
    static defaultProps = {
        className: '',
        ptr:false,
        ptrTriggerDistance: 44,
        transition: 'fadeInRight',
        transitionTime: '.5s'
    }
    constructor(props){
        super(props);
        
    }

    render() {
        const {children,transition,location,transitionTime,ptr,className} = this.props;
        let addClassName = className;
        let Cls = classNames('ui-container',{
            [`${addClassName}`]: className,
            [`${transition}`]:transition
        });
        let styles = {
            animation: `${transition} ${transitionTime} forwards`
        };
        return (<section className={Cls} style={ ptr ? {}: styles}>
                {children}
            </section>

        )
    }

}