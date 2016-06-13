import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { changeListAction } from '../../redux/actions/HomeAction';
import { AppPage,Row,Flex,Col,Carousel} from '../../components/index';

export default class ElementContainer extends React.Component<any, any> {
  
  constructor(props) {
        super(props);
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
      <AppPage>
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
          <div>
            <h3>浮动布局</h3>
            <Row>
                <Col span="10">10%</Col>
                <Col span="90">90%</Col>
            </Row>
            <Row>
                <Col span="20">20%</Col>
                <Col span="80">80%</Col>
            </Row>
            <Row>
                <Col span="25">25%</Col>
                <Col span="75">75%</Col>
            </Row>
            <Row>
                <Col span="33">33%</Col>
                <Col span="67">67%</Col>
            </Row>
            <Row>
                <Col span="50">50%</Col>
                <Col span="50">50%</Col>
            </Row>
          </div>
          <div>
            <h3>盒子布局</h3>
            <Flex>
                <Col flex="1">平均分</Col>
                <Col flex="1">平均分</Col>
            </Flex>
            <Flex>
                <Col flex="2">2/3</Col>
                <Col flex="1">1/3</Col>
            </Flex>
            <Flex>
                <Col flex="3">3/4</Col>
                <Col flex="1">1/4</Col>
            </Flex>
            <Flex>
                <Col flex="3">3/5</Col>
                <Col flex="2">2/5</Col>
            </Flex>
          </div>
      </AppPage>
    )
  }
  
  componentDidMount():void {

    }

  componentWillUnmount():void {
      
  }
    
}
