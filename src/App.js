import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MyPage from "./pages/MyPage";
import Modify from "./pages/Modify";
// import NotFound from "./pages/NotFound";
import axios from "axios";

class App extends React.Component {
  state = {
    isLogin: true,
    userInfo: null,
  };

  async isAuthenticated() {
    try {
      const res = await axios
        .get(
          "http://ec2-3-36-89-52.ap-northeast-2.compute.amazonaws.com/user/signin"
        );
      console.log(res.data);
      this.setState({ userInfo: res.data, isLogin: true });
      this.props.history.push("/");
    } catch (err) {
      if (err.response.status === 401) {
        this.setState({ isLogin: false });
        this.props.history.push("/");
      }
    }
  }

  handleResponseSuccess() {
    this.isAuthenticated();
  }

  handleLogout() {
    axios
      .post(
        "http://ec2-3-36-89-52.ap-northeast-2.compute.amazonaws.com/user/signOut"
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ userInfo: null, isLogin: false });
        this.props.history.push("/");
      });
  }

  handleChange() {
    axios
      .put(
        "http://ec2-3-36-89-52.ap-northeast-2.compute.amazonaws.com/user/editInfo"
      )
      .then((res) => {
        this.setState({ userInfo: res.data });
        this.props.history.push("/");
      });
  }

  render() {
    const { isLogin, userInfo } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={SignIn}
              render={() => (
                <SignIn
                  isLogin={isLogin}
                  handleResponseSuccess={this.handleResponseSuccess.bind(this)}
                />
              )}
            />
            <Route
              exact
              path="/signup"
              component={SignUp}
              render={() => <SignUp isLogin={isLogin} />}
            />
            <Route
              exact
              path="/mypage"
              component={MyPage}
              render={(props) => (
                <MyPage
                  isLogin={isLogin}
                  {...props}
                  handleLogout={this.handleLogout.bind(this)}
                />
              )}
            />

            <Route
              exact
              path="/mypage/modify"
              component={Modify}
              render={() => (
                <Modify
                  userinfo={userInfo}
                  handleChange={this.handleChange.bind(this)}
                />
              )}
            />
            <Route
              exact
              path="/home"
              render={() => {
                if (isLogin) {
                  return (
                    <Home
                      userinfo={userInfo}
                      handleLogout={this.handleLogout.bind(this)}
                    />
                  );
                }
                return <SignIn isLogin={isLogin} />;
              }}
            />
            {/* <Route exact path="/404" component={NotFound} />
            <Redirect from="*" to="/404" /> */}
            {/* <Switch>
              <Route exact path="/" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/mypage" component={MyPage} />
              <Route exact path="/mypage/modify" component={Modify} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/404" component={NotFound} />
              <Redirect from ="*" to="/404" /> */}
            {/* </Switch> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default withRouter(App);
