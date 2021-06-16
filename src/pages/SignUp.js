import React from "react";
import { Link } from "react-router-dom";

// axios.defaults.withCredentials = true;
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      nickname: "",
      errorMessage: ""
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleSignup = () => {
    const { email, password, nickname } = this.state;
    if (!email || !password || !nickname) {
      this.setState({
        errorMessage: "모든 항목은 필수입니다"
      });
      return;
    }
    else {
      this.setState({
        errorMessage: ""
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>회원가입</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <div>이메일</div>
              <input
                type="email"
                onChange={this.handleInputValue("email")}
              />
            </div>
            <div>
              <div>닉네임</div>
              <input
                type='text'
                onChange={this.handleInputValue("nickname")}
              />
            </div>
            <div>
              <div>비밀번호</div>
              <input
                type="password"
                onChange={this.handleInputValue("password")}
              />
            </div>
            <div>
              <div>비밀번호 확인</div>
              <input
                type="password"
                onChange={this.handleInputValue("password")}
              />
            </div>
            <div>
              <Link to='/signin'>이미 아이디가 있으신가요?</Link>
            </div>
            <button
              className="btn-signup"
              type='submit'
              onClick={this.handleSignup}
            >
              회원가입
            </button>
            {this.state.errorMessage ?
              <div>
                {this.state.errorMessage}
              </div> : ''}
          </form>
        </div>
      </div>
    );
  }
}
