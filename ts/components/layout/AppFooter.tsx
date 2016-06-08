import * as React from "react";
import * as classNames from "classnames";
import {hashHistory} from 'react-router';
/**
 * 哪些路由路径相匹配显示尾部菜单
 * @type {RegExp}
 */
const ShowAppFooterUrls = /^\/(|destination)$/g;

export default class AppFooter extends React.Component<any,any> {
    static defaultProps = {
        visible:true
    }
    constructor(props){
        super(props);
        this.state = {
            visible:props.visible,
            active:props.pathname,
            links:[
                {title: '首页', url: '/'},
                {title: '旅行头条', url: '/hot'},
                {title: '目的地', url: '/destination'}
            ]
        }

        let EventArr = [
            'createLink'
        ].forEach((method) => this[method] = this[method].bind(this));

    }
    handleGoto(element){

        hashHistory.push({pathname:element.url});
    }

    componentWillUnmount(){
        //console.log('我卸载了')
    }

    /**
     * 属性发生变化后调用
     * @param nextProps
     */
    componentWillReceiveProps(nextProps){
       let path = nextProps.pathname.match(ShowAppFooterUrls);
       if(path != null){
           this.setVisible(true,nextProps.pathname)
       }else{
           this.setVisible(false,nextProps.pathname)
       }
    }

    setVisible(visible,pathname) {
        this.setState({
            visible: visible,
            active:pathname
        });
    }
    
    createLink(){
        return this.state.links.map((element,keys) => {
            return <li onTouchTap={()=>this.handleGoto(element)} key = {keys}
                className = {this.state.active === element.url ? 'active' : ''}>
                        <div>{element.title}</div>
                    </li>
        });
    }
    
    render():any{
        if (!this.state.visible) {
            return false;
        }
        const {className} = this.props;
        let addClassName = className;
        let Cls = classNames('ui-footer ui-footer-stable ui-border-t',{
            [`${addClassName}`]: className
        });
        return <footer className = {Cls}>
            <ul className="ui-tiled">
                {this.createLink()}
            </ul>
          </footer>
          
    }
}