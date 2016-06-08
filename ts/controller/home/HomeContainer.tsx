import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { changeListAction } from '../../redux/actions/HomeAction';
import { AppPage } from '../../components/index';
import Tool from '../../pub/Tool';
import URL_CONFIG from '../../routersConfig';
class HomeContainer extends React.Component<any, any> {
  
  constructor(props) {
        super(props);
    }

    handleGoto(i){
        let url = URL_CONFIG.details(i);
        Tool.push(url)
    }

  render() {
   let {HomeReducer,dispatch} = this.props;
   let list = HomeReducer.homeList;
    return (
      <AppPage>
        <div>
          <ul className = "ui-list ui-list-link ui-border-tb">
                  {list.map((v,i)=>{
                    return <li className="ui-border-t" key = {i} onTouchTap={()=>this.handleGoto(i)}>
                        <div className="ui-list-img">

                        </div>
                        <div className="ui-list-info">
                            <h4 className="ui-nowrap">这是标题，加ui-nowrap可以超出长度截断</h4>
                            <p className="ui-nowrap">这是内容，加ui-nowrap可以超出长度截断</p>
                        </div>
                    </li>
                  })}
          </ul>
        </div>
      </AppPage>
    )
  }
  
  componentDidMount():void {
       let { HomeReducer ,dispatch,history} = this.props;
       let Updata = [{
          title:'标题三',
          content:'今天天气好好，也不知道会不会下雨三'
			  }]
       //dispatch(changeListAction(Updata))
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

export default connect(mapStateToProps)(HomeContainer);