import React from 'react';
import Home from './components/home.js'
import Market from './components/market.js';
import Navbars from './components/navbar.js';
import Login from './components/login.js';
import Register from './components/register.js';
import FeedBack from './components/feedback.js';
import Mypage from './components/mypage.js';
import Ranking from './components/ranking.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <Router>
      <div>
        <Navbars/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/market" component={Market}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/feedback" component={FeedBack}/>
          <Route exact path="/mypage" component={Mypage}/>
          <Route exact path="/ranking" component={Ranking}/>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
