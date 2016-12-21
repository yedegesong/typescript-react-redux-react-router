import * as React from "react";
import * as ReactDOM from "react-dom";
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { AppFooter, Container } from './components/index';
import { hashHistory } from 'react-router';
class App extends React.Component<any, any> {
    
    constructor(props) {
        super(props);
    }

    render() {
        let {
            location,
            params,
            children,
        } = this.props;
        //let transition = children.props.transition || 'sfr';
       let transition = location.pathname =='/'? 'rfr' : 'sfr';
        return (
            <Container className="container container-fill container-column" id="sk-container">
                <Container transition={transition}>
                    {React.cloneElement(children, {
                        key: location.pathname
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

const IndexApp = connect(mapStateToProps)(App);
export default IndexApp;


