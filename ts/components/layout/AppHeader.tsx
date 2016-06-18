import * as React from "react";
import * as classNames from "classnames";
import {hashHistory} from 'react-router';
import {Icon} from '../index';

export default class AppHeader extends React.Component<any,any> {
    length:number;
    constructor(props){
        super(props);
        this.length = 0;
        hashHistory.listen((L)=>{
            if (L.action === 'POP') {
                this.length = Math.max(--this.length, 0);
            }
            else {
                this.length++;
            }
        })
    }

    componentWillUnmount(){
        //console.log('我卸载了')
    }

    handleGoto(){
        if (this.length == 0 && window.history && window.history.length > this.length) {
            hashHistory.push('/')
            return;
        }
        hashHistory.goBack();
    }

    render():any{
        const {className} = this.props;
        let addClassName = className;
        let Cls = classNames('ui-header ui-border-b',{
            [`${addClassName}`]: className
        });

        return <header className = {Cls}>
                    <div className="ui-go-return" onTouchTap={this.handleGoto.bind(this)}>
                        <Icon type="left"/>
                    </div>
                    <h1>我是标题组件</h1>
                </header>
          
    }
}