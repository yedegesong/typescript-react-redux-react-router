import * as React from "react";
import * as ReactDOM from "react-dom";
import appRootComponent from "./routers";
import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
ReactDOM.render(appRootComponent, document.getElementById('app'));



