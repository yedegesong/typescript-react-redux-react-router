import * as React from "react";
import * as classNames from "classnames";
import  Mask from '../mask/Mask';
import Icon from '../icon/Icon';
export default class ActionSheet extends React.Component<any,any> {

    static defaultProps = {
        type:'default',
        toggle:false,
        isShow:false,
        close:Function
    }

    constructor(props){
        super(props);
    }

    close(){
        console.log('a')
        let { closeCallback} = this.props;
       closeCallback ? closeCallback() : false;
    }
    /**
     *
     */
    render() {
        const {children, className,toggle,isShow} = this.props;
        let addClassName = className;
        let Cls = classNames('ui-actionsheet',{
            'actionsheet-toggle':toggle,
            [`${addClassName}`]: className
        });

        return (
            <div>
                <div className={Cls}>
                    <div className="action-header" onClick = {()=>this.close()}>
                        选择支付方式<Icon type="cross" />
                    </div>
                    <div className="action-content">
                        {children}
                    </div>
                </div>
                <Mask isShow = {isShow} onClick = {()=>this.close()}/>
            </div>

                    );
    }

    componentDidMount():void {

    }
}