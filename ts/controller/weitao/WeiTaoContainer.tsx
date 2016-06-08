import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { changeListAction } from '../../redux/actions/HomeAction';
import { AppPage } from '../../components/index';
export default class WeiTaoContainer extends React.Component<any, any> {
  
  constructor(props) {
        super(props);
    }
    
  render() {
    
   let {HomeReducer,dispatch} = this.props;
   let list = HomeReducer.homeList;
    return (
      <AppPage>
        <div>
            我是微淘
        </div>
      </AppPage>
    )
  }
  
  componentDidMount():void {

    }

  componentWillUnmount():void {
      
  }
    
}
