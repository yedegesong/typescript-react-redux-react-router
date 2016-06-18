import * as React from "react";
import * as ReactDOM from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { AppFooter,Container} from './components/index';

const anUrls = /^\/(|found|element)$/g;
class App extends React.Component<any, any> {

   constructor(props){
        super(props);
   }

  render() {
    const {children,location} = this.props;
    let path = location.pathname.match(anUrls);
    let transition = children.props.transition || 'sfr';
    return (
          <Container>
              <Container transition={transition}>
                      {React.cloneElement(children, {
                          key: location.key
                      })}
                  </Container>
              <AppFooter pathname = {location.pathname} />
          </Container>
    )
  }
}

let mapStateToProps = (state) => {
    return {
        AppReducers: state.AppReducers
    }
}

export default connect(mapStateToProps)(App);




