import * as React from "react";
import * as ReactDOM from "react-dom";
import { bindActionCreators} from 'redux';
import { connect} from 'react-redux';
import { changeListAction } from '../../redux/actions/HomeAction';
import { AppPage ,Container,Carousel,Flex,Col,Row} from '../../components/index';
//import Tool from '../../pub/Tool';
import Tool from 'Tool';

//自己书写的基类
import BaseContainer from '../../common/BaseContainer';
//Tool.push('https://www.baidu.com')
import URL_CONFIG from '../../routersConfig';
let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    lazyLoad:true
};
class HomeContainer extends BaseContainer{
   
  constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            banner:[
                {url:'https://gw.alicdn.com/tps/TB1MdsQJVXXXXbdXVXXXXXXXXXX-750-360.jpg_640x640q90',link:''},
                {url:'https://gw.alicdn.com/tps/TB1vrfiKpXXXXXtXXXXXXXXXXXX-750-360.jpg_640x640q90',link:''},
                {url:'https://gw.alicdn.com/tps/TB1vejcKpXXXXXfXXXXXXXXXXXX-750-360.jpg_640x640q90',link:''}
            ],
            fondData :[
                {url:'https://gw.alicdn.com/tps/TB1NN5TMpXXXXaKXpXXXXXXXXXX-206-206.jpg_300x300q75',link:'',cityName:'杭州'},
                {url:'https://gw.alicdn.com/tps/TB1pheTMpXXXXa.XFXXXXXXXXXX-206-206.jpg_300x300q75',link:'',cityName:'广西'},
                {url:'https://gw.alicdn.com/tps/TB1hOCVMpXXXXcXXXXXXXXXXXXX-206-206.jpg_300x300q75',link:'',cityName:'云南'},
                {url:'https://gw.alicdn.com/tps/TB1Lc9PMpXXXXXlXFXXXXXXXXXX-206-206.jpg_300x300q75',link:'',cityName:'巴厘岛'},
                {url:'https://gw.alicdn.com/tps/TB1i45NMpXXXXbwXVXXXXXXXXXX-206-206.jpg_300x300q75',link:'',cityName:'韩国'}
            ]
        }
    }

    handleGoto(i){
        let url = URL_CONFIG.details(i);
        Tool.push(url)
    }

  render() {
   let {HomeReducer,dispatch} = this.props;
   let list = HomeReducer.homeList;
   let arr = this.state.fondData;
    return (
      <Container>
        <section className="container-scrollable">
            <Carousel {...settings}>
                {this.state.banner.map((v,i)=>{
                    return <div key = {i}>
                        <img src= {v.url} />
                    </div>
                    })}
            </Carousel>
            <div className="module">
                <div className="module-title ui-border-b">
                    热门头条
                </div>
                <ul className="ui-list">
                    {list.map((v,i)=>{
                        return <li  key = {i} onTouchTap={()=>this.handleGoto(i)}>
                            <Flex className="ui-grid-flex ui-grid-flex-mr ui-border-b">
                                <Col flex="1" className="ui-grid-flex-info">
                                    {v.title}
                                </Col>
                                <Col className="ui-grid-flex-img">
                                    <img src = {v.cover} />
                                </Col>
                            </Flex>
                        </li>
                        })}
                </ul>
            </div>
            <div className="module">
                <div className="module-title ui-border-b">
                    热门头条
                </div>
                <ul className="ui-list">
                    {list.map((v,i)=>{
                        return <li  key = {i} onTouchTap={()=>this.handleGoto(i)}>
                            <Flex className="ui-grid-flex ui-grid-flex-mr ui-border-b">
                                <Col className="ui-grid-flex-img">
                                    <img src = {v.cover} />
                                </Col>
                                <Col flex="1" className="ui-grid-flex-info">
                                    {v.title}
                                </Col>
                            </Flex>
                        </li>
                        })}
                </ul>
            </div>
            <div className="module">
                <div className="module-title">
                    发现世界
                </div>
                <div>
                    <Row className="ui-grid">
                        {
                            arr.map((v,i)=>{
                                    return <Col span="33" key = {i}>
                                        <img src={v.url} />
                                        <div className="city-info ui-text-center">
                                            <div className="info-name">{v.cityName}</div>
                                            <div className="ui-text-muted">12.1万人关注</div>
                                        </div>
                                    </Col>
                                })
                            }
                    </Row>
                </div>
            </div>
        </section>
      </Container>
    )
  }
  
  componentDidMount():void {
        let { HomeReducer ,dispatch,history} = this.props;
       dispatch(changeListAction())
    }

  componentWillUnmount():void {
      
  }
    
}


let mapStateToProps = (state) => {
    return {
        routing:state.routing,
        HomeReducer: state.HomeReducer
    }
}

const HomeAppContainer = connect(mapStateToProps)(HomeContainer);
export default HomeAppContainer;

