import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App'
import {TeamList, ScoreList} from './components'

import './index.css'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={TeamList} />
      <Route path='/' component={TeamList} />
      <Route path='/ScoreList' component={ScoreList} />
    </Route>
  </Router>),
  document.getElementById('root')
);
