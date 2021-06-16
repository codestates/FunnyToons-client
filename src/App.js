import React from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link  } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn';
import MyPage from './pages/MyPage';
import Modify from './pages/Modify';
import NotFound from './pages/NotFound';

export default class App extends React.Component {
  state = {
    isLogin: true,
    userInfo: null,
  }

  render() {
    return (
      <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/mypage" component={MyPage} />
              <Route exact path="/mypage/modify" component={Modify} />
              <Route exact path="/404" component={NotFound} />
              <Redirect from ="*" to="/404" />
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
  
}