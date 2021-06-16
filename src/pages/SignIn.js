import React from 'react';
import { Link } from "react-router-dom";


export default class Signin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    }
    this.handleInputValue = this.handleInputValue.bind();
  }

  handleInputValue = (key) => (e) => {
    this.setState({
      [key]: e.target.value
    });
  }

  handleSignin = () => {
    const { handleResponseSuccess } = this.props;
    const { email, password } = this.state;

    if(!email || !password) {
      this.setState({
        errorMessage: "이메일과 비밀번호를 확인하세요"
      });
      return;
    } else {
      this.setState({
        errorMessage: ""
      });
    }
  }

  render() {
    return(
      <div>
        <div>
          <h1>로그인</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>E-mail</div>
            <input 
              type="email"
              onChange={this.handleInputValue("email")}
            />
            <div>비밀번호</div>
            <input
              type="password"
              onChange={this.handleInputValue("password")}
            />
            <div />
            <button className="btn-signin" type="submit" onClick={this.handleSignin}>
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
    )
  }
}