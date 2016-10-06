"use strict"

import React from "react"
import ReactDOM from "react-dom"
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import { Router , Route, browserHistory } from "react-router"
import HCardBuilder from "./pages/HCardBuilder"

/* Performance analysis  production guard*/
/* TODO need production guard */
if(process.env.NODE_ENV !== "production") {
  window.ReactPerf = require("react-addons-perf");
}

ReactDOM.render(
    <Router history={ browserHistory }>
      <Route path="/" component={ HCardBuilder } />
    </Router>
  ,document.getElementById("app-container")
)
