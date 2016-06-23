import * as React from "react";
import * as classNames from "classnames";
export default class Counter extends React.Component<any,any> {

    static defaultProps = {
        delCount:10,
        step:5,
        minCount:10,
        maxCount:999,
        afterChange:null
    }

    constructor(props){
        super(props);
        this.state = {
            clickCount:props.delCount
        };
    }

    addClick() {
        let maxCount = this.props.maxCount;
        let step = this.props.step;
        this.setState((state) => {
            if(state.clickCount>=maxCount){
                return false;
            }
            return {clickCount: state.clickCount+step};
        });

        this.changeCallback(this.state.clickCount+step > maxCount ? this.state.clickCount : this.state.clickCount+step);
    }

    minusClick() {
        let minCount = this.props.minCount;
        let step = this.props.step;

        this.setState((state) => {
            if(state.clickCount<=minCount){
                return false;
            }
            return {clickCount: state.clickCount - step};
        });

        this.changeCallback(this.state.clickCount - step < minCount ? this.state.clickCount : this.state.clickCount - step);
    }

    changeVal(value):any{
        
        let i = this.props.step;
        let index =value;
        if(index<i){
            return i;
        }
        let a = Math.round(index/i);
        if(index%i==0){
            return a*i;
        }
        return (a+1)*i;
    }

    outChange(event){
        let num = this.changeVal(event.target.value);
        this.setState({clickCount: num });
    }

    handleChange(event){
        let {maxCount,minCount} = this.props;
        //非数字全部转换成
        let num =  parseInt(event.target.value.replace(/[^\d]/g,'1'));
        //最大购买数
        if(num>maxCount){
            console.log('不能再多了');
            num = maxCount;
            this.setState({clickCount: num });
            this.changeCallback(num);
            return false;
        }

        //最小购买数
        if(num === 0){
            console.log('不能再少了');
            num = minCount;
            this.changeCallback(num);
            return false;
        }

        this.setState({clickCount: num });

        this.changeCallback(num);

    }

    /**
     * 存在回调就触发
     * @param num
     */
    changeCallback(num){
        this.props.afterChange ? this.props.afterChange(num) : false;
    }
    /**
     * body 主容器 包括头部和菜单
     */
    render() {
        const {children,className} = this.props;

        let addClassName = className;
        let Cls = classNames('ui-count',{
            [`${addClassName}`]: className
        });
        let value = this.state.clickCount;
        return (
            <div>
                <div className={Cls}>
                    <a href="javascript:void(0);" className="count-min" onTouchTap={this.minusClick.bind(this)} ></a>
                    <input type="number" ref="author" value={this.state.clickCount} className="input-reset count-num" onBlur={this.outChange.bind(this)} onChange={this.handleChange.bind(this)} />
                    <a href="javascript:void(0);" className="count-add" onTouchTap={this.addClick.bind(this)}></a>
                </div>
            </div>
        );
    }

}