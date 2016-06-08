import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import { Provider, connect} from 'react-redux';
import { AppFooter} from './components/index';
import {hashHistory} from 'react-router';

class App extends React.Component<any, any> {

   constructor(props){
        super(props);
   }


  render() {
    const {children,location} = this.props;
    return (
      <div className="appMain">
            {children}
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




