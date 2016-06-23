import * as React from "react";
import * as ReactDOM from "react-dom";
import * as classNames from "classnames";
const _messageHolder = document.createElement('div');
document.body.appendChild(_messageHolder);

 class Tips extends React.Component<any,any> {

    static defaultProps = {
        timeout:2000,
        type:0,
        showTime:50
    }

    constructor(props){
        super(props);
        this.state = {
            show: false,
            showTime:props.showTime,
            message: props.message,
            timeout: props.timeout,
            type: props.type
        };
    }

    componentDidMount() {
        let {timeout,onFinish} = this.props;
        //延迟显示
        this.setState({showTime: setTimeout(()=>{
            this.setState({ show: true});
        },this.state.showTime)});
        //隐藏并且删除
        if(timeout){
            this.setState({timeout: setTimeout(()=>{
                this.setState({ show: false});
                if(onFinish){onFinish(this)};
                setTimeout(() => {
                    ReactDOM.unmountComponentAtNode(_messageHolder);
                }, 500);
            },this.state.timeout)})
        }
    }

    componentWillUnmount(){
        clearTimeout(this.state.showTime);
        clearTimeout(this.state.timeout);
    }

    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        let className = classNames('ui-poptips', {
            'show': this.state.show,
            'ui-poptips-success': this.state.type == 1,
            'ui-poptips-info': this.state.type == 2,
            'ui-poptips-warn': this.state.type == 3
        });

        return (
            <div className={ className }>
                <div className="ui-poptips-cnt">
                    <p>{this.state.message}</p>
                </div>
            </div>
        );
    }

}

export default function (config?:any):any {
    ReactDOM.render(
        <Tips {...config} />,
        _messageHolder
    );
}