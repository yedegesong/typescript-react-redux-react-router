import * as React from "react";
import * as classNames from "classnames";
import * as ReactCSSTransitionGroup from "react-addons-css-transition-group";
/**
 * transition:
 * fadeIn //淡入
 * fadeInLeft//左弹淡入
 * fadeInRight//右弹淡入
 */

const TRANSITION_TIMEOUT = 500;
export default class Container extends React.Component<any,any> {

    constructor(props){
        super(props);
        
    }

    render() {
        let {
            className,
            children,
            direction,
            align,
            transition,
        } = this.props;
        
        if(transition){
            return (
                    <ReactCSSTransitionGroup
                        component="div"
                        className='views'
                        transitionName={`view-transition-${transition}`}
                        transitionEnterTimeout={TRANSITION_TIMEOUT}
                        transitionLeaveTimeout={TRANSITION_TIMEOUT}
                        {...this.props}
                    >
                        {children}
                    </ReactCSSTransitionGroup>
                )

        }
       
        return (
            <div className="container container-fill container-column" {...this.props}>
                {children}
            </div>
        )
    }

}