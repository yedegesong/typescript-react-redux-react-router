import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
import { AppFooter} from './components/index';
import {hashHistory} from 'react-router';
import * as ReactCSSTransitionGroup from "react-addons-css-transition-group";
class App extends React.Component<any, any> {

   constructor(props){
        super(props);
   }


  render() {
    const {children,location} = this.props;
  /*<ReactCSSTransitionGroup
          component="div"
          transitionName="page"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {React.cloneElement(children, {
              key:location.pathname
          })}
      </ReactCSSTransitionGroup>**/
    return (
      <div className="appMain">
          <AppFooter  pathname = {location.pathname} />
          {children}
      </div>
    )
  }
}

let mapStateToProps = (state) => {
    return {
        AppReducers: state.AppReducers
    }
}

export default connect(mapStateToProps)(App);




