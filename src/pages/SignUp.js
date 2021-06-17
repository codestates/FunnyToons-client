import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

axios.defaults.withCredentials = true;
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirm: "",
      nickname: "",
      errorMessage: ""
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleSignup = () => {
    const { email, password, password_confirm, nickname } = this.state;
    if (!email || !password || !password_confirm || !nickname) {
      this.setState({
        errorMessage: "모두 입력 하셨나요?"
      });
      return;
    } else if (password !== password_confirm) {
      this.setState({
        errorMessage: "비밀번호가 달라요!"
      });
      return;
    } else {
      this.setState({
        errorMessage: ""
      });
    }
    return axios
      .post("http://ec2-3-36-89-52.ap-northeast-2.compute.amazonaws.com/user/signUp", {
        email: email,
        password: password,
        password_confirm: password_confirm,
        nickname: nickname,
      })
      .then((res) => {
        console.log(res.data);
        this.props.history.push('/');
      })
      .catch((err) => {
        alert("signUp failed");
        console.log(err);
      });
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
                onChange={this.handleInputValue("password_confirm")}
              />
            </div>
            <div>
              <Link to='/'>이미 아이디가 있으신가요?</Link>
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
