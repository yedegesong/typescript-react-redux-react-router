import * as React from "react";
import { connect } from 'react-redux';
import { changeListAction } from '../../redux/actions/HomeAction';
import { AppPage } from '../../components/index';
export default class FoundContainer extends React.Component<any, any> {
  
  constructor(props) {
        super(props);
    }
    
  render() {
    return (
      <AppPage>
        <div>我是发现页面</div>
      </AppPage>
    )
  }
  
  componentDidMount():void {
      
    }

  componentWillUnmount():void {
      
  }
    
}

