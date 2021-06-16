import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class Modify extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "a",
            password: "a",
            nickname: "a",
        }
        this.handleInputValue = this.handleInputValue.bind(this);
    }
    
    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    render() {
        return(
            <div>
                <div>
                    <form>
                        <h1>정보수정</h1>
                        <div>
                            <div>email: </div>
                        </div>
                        <div>
                            <div>비밀번호</div>
                            <input
                                type="password"
                                onChange={this.handleInputValue("password")}
                            />
                        </div>
                        <div>
                            <div>닉네임</div>
                            <input
                                type="text"
                                onChange={this.handleInputValue("nickname")}
                            />
                        </div>
                        <button className="btn-modify" type="submit">수정하기</button>
                        <Link to="/mypage">
                            <button className="btn-goback">뒤로가기</button>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}