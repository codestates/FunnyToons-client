import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default class Modify extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "email",
            password: "",
            password_confirm: "",
            nickname: "nickname",
        }
        this.handleInputValue = this.handleInputValue.bind(this);
    }
    
    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    handleModify = () => {
        const { password, password_confirm, nickname } = this.state;
        if (!password || !password_confirm || !nickname) {
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
      .put("http://ec2-3-36-89-52.ap-northeast-2.compute.amazonaws.com/user/editInfo", {
        password: password,
        password_confirm: password_confirm,
        nickname: nickname,
      })
      .then()
      .catch((err) => {
        alert("Modify failed");
        console.log(err);
      });
      }

    render() {
        return(
            <div>
                <div>
                    <form>
                        <h1>정보수정</h1>
                        <div>
                            <div>email: </div>
                            <div>{this.state.email}</div>
                        </div>
                        <div>
                            <div>닉네임</div>
                            <input
                                type="text"
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
                        <Link to="/mypage">
                            <button className="btn-goback">뒤로가기</button>
                        </Link>
                        <button className="btn-modify"  onClick={this.handleModify}>수정하기</button>
                        {this.state.errorMessage ?
                          <div>
                            {this.state.errorMessage}
                          </div> : ''}
                    </form>
                </div>
            </div>
        )
    }
}