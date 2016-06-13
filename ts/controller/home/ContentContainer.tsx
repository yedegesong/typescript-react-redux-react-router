import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { changeListAction } from '../../redux/actions/HomeAction';
import { AppPage } from '../../components/index';
export default class ContentContainer extends React.Component<any, any> {
  
  constructor(props) {
        super(props);
    }

  render() {
    let {params} = this.props;
    return (
      <AppPage transition="fadeInRight">
            <div>我是内容页{params.id}</div>
      </AppPage>
    )
  }
  
  componentDidMount():void {

    }

  componentWillUnmount():void {
      
  }
    
}
