import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


axios.defaults.withCredentials = true;
function MyPage(props) {
  const { userInfo, handleLogout, handleChange } = props;
  console.log(props)

  return (userInfo ?
    <div>
      <div>
        <form>
          <h1>마이페이지</h1>
          <div>
            <p>님 안녕하세요.</p>
            <Link to="/home">
              웹툰보러가기
            </Link>
          </div>
          <div />
          <div>
            <div className="email">E-mail: </div>
            <div></div>
            <div className="nickname">닉네임: </div>
            <div></div>
          </div>
        
          <button className="btn btn-signout" onClick={handleLogout}>로그아웃</button>
          <Link to="/mypage/modify">
          <button className="btn btn-modify" onClick={handleChange}>수정하기</button>
          </Link>
        </form>
      </div>
    </div>
    : "");
}  

export default MyPage