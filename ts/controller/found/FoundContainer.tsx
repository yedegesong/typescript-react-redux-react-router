import * as React from "react";
import { connect } from 'react-redux';
import { changeListAction } from '../../redux/actions/HomeAction';
import { AppPage,
    Row,
    Flex,
    Col,
    Carousel,
    Icon,
    Buttons,
    FormGroup,
    FormItems,
    InputText,
    InputSelect,
    InputRadio,
    RadioGroup,
    SwitchCell,
    CheckGroup,
    Dialog,
    Tabs,
    TabPane,
    Tips,
    Toast,
    Tabel,
    Counter,ActionSheet
} from '../../components/index';
export default class FoundContainer extends React.Component<any, any> {
  
  constructor(props) {
        super(props);
        this.state = {
            price:0,
            number:0,
            buy_type:1,
            active:-1,
            toggle:true,
        };
    }

  handleButton(type?:number){
    Tips({
      message:'我是提醒信息',
      type:type
    });
  }

  _dialog(event) {
    let buyConfirm = (modal) => {
      alert('您点击了确定按钮');
      modal.close();
    };
    let buyConfirm1 = (modal) => {
      alert('您点击了取消按钮');
      modal.close();
    };
    let actions = [
      { label: '取消', onClick: buyConfirm1 },
      { label: '确定', onClick: buyConfirm, primary: true }
    ];

    Dialog.show(<div className="aa">你确定要删除吗?</div>, actions);
    event.preventDefault();
    event.stopPropagation();

  }

  _dialog1(event) {
    Dialog.alter('提示您好!');
    event.preventDefault();
    event.stopPropagation();
  }

  _dialog2(event) {
    let buyConfirm = (modal) => {
      Dialog.alter('我回调了!');
      modal.close();
    };

    let actions = [
      { label: '取消' },
      { label: '确定', onClick: buyConfirm, primary: true }
    ];

    Dialog.show(<div>回调哒哒哒!</div>, actions);
    event.preventDefault();
    event.stopPropagation();
  }

  _dialog3(event) {
    let buyConfirm = (modal) => {

      modal.close();
    };
    let actions = [
      { label: '取消' },
      { label: '确定', onClick: buyConfirm, primary: true }
    ];
    Dialog.show(<div><InputText type="text" placeholder="请输入账号"/></div>, actions);
    event.preventDefault();
    event.stopPropagation();
  }

  callback(value, index) {
    console.log(value)
    console.log(index);
  }

  close(){
    console.log('a')
        this.setState({
            toggle:false
        })
    }

  handleToast(type?:number){
    if(type ==1){
      Toast.close();
    }else{
      Toast.open({tips:'图片上传中'});
    }

  }

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
    return (
      <section className="container-scrollable">
      <ActionSheet toggle ={this.state.toggle} isShow = {this.state.toggle} closeCallback={()=>this.close()}>
                    <ul className="pay-status">
                        <li>
                            <div>
                                <h3>我的钱包支付</h3>
                                <p>(钱包余额</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>微信支付</h3>
                                <p>推荐已安装微信的用户使用</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h3>支付宝支付</h3>
                                <p>推荐支付宝用户使用</p>
                            </div>
                        </li>
                    </ul>
                </ActionSheet>
        <div>
          <h3>轮播组件</h3>
          <Carousel {...settings}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
            <div><h3>5</h3></div>
            <div><h3>6</h3></div>
          </Carousel>
        </div>
        <h3>弹框</h3>
        <div>
          <Buttons onClick = {(event) =>  this._dialog(event)  } >普通提示弹框</Buttons>
          <Buttons onClick = {(event) =>  this._dialog1(event) } >单个提示弹框</Buttons>
          <Buttons onClick = {(event) => this._dialog2(event) } >提示弹框回调在弹框</Buttons>
          <Buttons onClick = {(event) => this._dialog3(event) } >提示弹框组件弹框</Buttons>
        </div>
        <h3>面板切换</h3>
        <Tabs onChange = {(value, index) => this.callback(value, index) }>
          <TabPane tab="选项卡一" key="1">选项卡一内容</TabPane>
          <TabPane tab="选项卡二" key="2">选项卡二内容</TabPane>
          <TabPane tab="选项卡三" key="3">选项卡三内容</TabPane>
        </Tabs>
        <h3>全局提示</h3>
        <div>
          <Buttons onClick = {() => this.handleButton() } >显示普通</Buttons>
          <Buttons onClick = {() => this.handleButton(1) } >成功</Buttons>
          <Buttons onClick = {() => this.handleButton(2) } >报错</Buttons>
          <Buttons onClick = {() => this.handleButton(3) } >警告</Buttons>
        </div>
        <h3>提示</h3>
        <div>
          <Buttons onClick = {() => this.handleToast() } >打开加载中</Buttons>
          <Buttons onClick = {() => this.handleToast(1) } >关闭加载中</Buttons>
        </div>
        <h3>计步器</h3>
        <div>
          <Counter />
        </div>
      </section>
    )
  }
  
  componentDidMount():void {
      
    }

  componentWillUnmount():void {
      
  }
    
}

