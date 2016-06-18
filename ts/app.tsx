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
    return (
      <div className="viewpager">
              {React.cloneElement(children, {
                  key:location.key
              })}
          <AppFooter  pathname = {location.pathname} />
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




