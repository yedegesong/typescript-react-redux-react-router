import * as React from "react";
import { connect } from 'react-redux';
import {
  AppPage,
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
  Counter, ActionSheet, Container,PullLoad
} from '../../components/index';
import Tool from '../../pub/Tool';
import './couponslist.css';
const cData = [
    "http://img1.gtimg.com/15/1580/158031/15803178_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803179_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803181_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803182_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803183_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803184_1200x1000_0.jpg",
    "http://img1.gtimg.com/15/1580/158031/15803186_1200x1000_0.jpg"
]
export default class FoundContainer extends React.Component<any, any> {
  refreshResolve:any;
  constructor(props) {
    super(props);
    this.refreshResolve = null //用于保存刷新或者加载更多的resolve函数
    this.loadMore = this.loadMore.bind(this);
    this.refresh = this.refresh.bind(this);
    this.state ={
      hasMore: true,
      data: cData
    }
  }
  //刷新
  refresh(resolve, reject) {
    setTimeout(()=>{
      this.setState({
        data: cData
      });
      resolve();
    },3000)
  }
 //加载更多
  loadMore(resolve){
    setTimeout(()=>{
      this.setState({
        data: [...this.state.data, cData[0], cData[0]]
      });
      resolve();
    },3000)
  }

  render() {
    const {data, hasMore} = this.state
    return (
      <Container>
        <header className="ui-header">
          <h1>拉动滚动加载</h1>
        </header>
        <section className="container-scrollable">
          <PullLoad downEnough={150} onRefresh={this.refresh.bind(this)} onLoadMore={this.loadMore.bind(this)} hasMore={hasMore}>
            {
              data.map( (str, index )=>{
                return  <div className="ui-row-flex box-align ui-grid-flex-list" key={index}>
                <div className="ui-col ui-grid-flex-img">
                     <img src="https://gw.alicdn.com/tps/TB1i45NMpXXXXbwXVXXXXXXXXXX-206-206.jpg_300x300q75" />
                 </div>
                 <div className="ui-col ui-col-1 ui-grid-flex-info">
                     <div className="qq-list-title">桥亭活鱼三周年店庆大礼包</div>
                     <div className="qq-location"><i className="iconfont icon-fujin"></i> 800m ｜ 桥亭活鱼五四路店</div>
                     <div className="ui-row-flex box-align">
                         <div className="qq-price"><span className="qq-yh">{index}</span> <span className="qq-yj">¥256</span></div>
                         <div className="ui-col ui-col-1 ui-text-right">
                             <button className="ui-btn qq-btn-default">马上抢</button>
                         </div>
                     </div>
               </div>  
          </div>
              })
            }
        </PullLoad>
        </section>
      </Container>
    )
  }

  componentDidMount(): void {

  }

  componentWillUnmount(): void {

  }

}

