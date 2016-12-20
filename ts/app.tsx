import * as React from "react";
import * as ReactDOM from "react-dom";
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { AppFooter,Container} from './components/index';
import { hashHistory} from 'react-router';
import * as ReactCSSTransitionGroup from "react-addons-css-transition-group";
let transition = 'sfr';
class App extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render() {
        const {children, location} = this.props;
        console.log(children)
        return (
            <Container className="container container-fill container-column">
                <Container transition={transition}>
                        {React.cloneElement(children, {
                            key: location.key
                        })}
                </Container>
                <AppFooter pathname={location.pathname} />
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




