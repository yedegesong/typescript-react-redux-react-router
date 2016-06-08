import * as React from "react";
import { connect } from 'react-redux';
import { changeListAction } from '../../redux/actions/HomeAction';
import { AppPage } from '../../components/index';
export default class CommunityContainer extends React.Component<any, any> {
  
  constructor(props) {
        super(props);
    }
    
  render() {
    return (
      <AppPage>
        <div>
           早起打卡
        </div>
          <div>
              早餐要吃好
          </div>
          <div>
              想和你去兜兜风
          </div>
          <div>
              北京车展
          </div>
      </AppPage>
    )
  }
  
  componentDidMount():void {
      
    }

  componentWillUnmount():void {
      
  }
    
}

