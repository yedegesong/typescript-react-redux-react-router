import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { IndexRoute,Router,Route,hashHistory,browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer} from 'react-router-redux'
import App from "./app";
import Modeules from './controller/index';
import {BaseStore} from './redux/store/BaseStore';
import URL_CONFIG from './routersConfig';
const store = BaseStore();
const history = syncHistoryWithStore(hashHistory, store);

let appRootComponent = (
    <Provider store = {store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Modeules.HomeContainer}/>
                <Route path = {URL_CONFIG.details(':id')} component={Modeules.ContentContainer}/>
                <Route path = {URL_CONFIG.found()} component={Modeules.FoundContainer}/>
                <Route path = {URL_CONFIG.element()} component={Modeules.ElementContainer}/>
            </Route>
        </Router>
    </Provider>
)

export default appRootComponent;


