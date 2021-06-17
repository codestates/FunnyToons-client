import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      nickname: "",
      password: "",
      password_confirm: "",
      errorMessage: "",
    };
    this.handleInputValue = this.handleInputValue.bind();
  }

  handleInputValue = (key) => (e) => {
    this.setState({
      [key]: e.target.value,
    });
  };

  handleSignin = async () => {
    const { email, password } = this.state;

    if (!email || !password ) {
      this.setState({
        errorMessage: "이메일과 비밀번호가 틀렸어요~!",
      });
      return;
    } else {
      await axios
      .post(
        "http://ec2-3-36-89-52.ap-northeast-2.compute.amazonaws.com/user/signIn",
        {
          email: email,
          password: password,
        },
        {
          "Content-Type": "application/json"
        }
      )
      .then((res) => {
        this.props.history.push("/home");
      })
      .catch((err) => {
        alert("SignIn failed");
        console.log(err);
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <h1>로그인</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>E-mail</div>
            <input type="email" onChange={this.handleInputValue("email")} />
            <div>비밀번호</div>
            <input
              type="password"
              onChange={this.handleInputValue("password")}
            />
            <div />
            <button
              className="btn btn-signin"
              type="submit"
              onClick={this.handleSignin}
            >
              로그인
            </button>
            <span className="join">
              <Link to="/signup">
                <button className="btn-to-signup">회원가입</button>
              </Link>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

// export default Signin;
export default withRouter(Signin);
