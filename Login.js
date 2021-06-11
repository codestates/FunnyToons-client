import axios from "axios";
// import { Link } from "react-router-dom";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.loginRequestHandler = this.loginRequestHandler.bind(this);
  }

  inputHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  // handleInputValue(key) {
  //   return function (e) {
  //     this.setState({ [key]: e.target.value });
  //   };
  // }

  loginRequestHandler = async () => {
    const { email, password } = this.state;
    if (this.state.email && this.state.password) {
      await axios
        .post(
          "http://url/login",
          { email, password },
          { "content-type": "application/json", credentials: true }
        )
        .then(() => {
          this.props.loginHandler();
          return axios.get("http://get/mainPage", {
            "content-type": "application/json",
            credentials: true,
          });
        })
        .then((data) => {
          this.props.loginHandler(data.data);
          this.props.history.push("/");
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      await alert("이메일 또는 비밀번호를 입력하지 않으셨습니다");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>로그인 페이지</Text>
        <div className="loginContainer">
          <div className="inputField">
            <div>이메일</div>
            <input
              name="email"
              onChange={(e) => this.inputHandler(e)}
              value={this.state.email}
              type="text"
            />
          </div>
          <div className="inputField">
            <div>비밀번호</div>
            <input
              name="password"
              onChange={(e) => this.inputHandler(e)}
              value={this.state.password}
              type="password"
            />
          </div>
          <div>아직 아이디가 없으신가요? 회원가입 화면이랑 연결하기</div>
          {/* <Link to="/spiderman">Spider Man</Link> */}
          <div className="loginBtnContainer">
            <button onClick={this.loginRequestHandler} className="loginBtn">
              로그인
            </button>
          </div>
        </div>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 100,
    backgroundColor: "white",
  },
  text: {
    color: "black",
    fontsize: 60,
  },
});
