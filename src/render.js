import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './components/App.js';
import About from './components/About.js';

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={App} />
            <Route path="about" component={About}/>
        </Route>
    </Router>
), document.getElementById('root'))