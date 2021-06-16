import React from 'react';
import { Link } from "react-router-dom";

export default function MyPage() {


  return (
    <div>
      <div>
        <form>
          <h1>마이페이지</h1>
          <div>
            <p>닉네임님 안녕하세요.</p>
          </div>
          <div>
            <div className="email">E-mail: </div>
            <div className="nickname">닉네임: </div>
          </div>
        
          <button className="btn-signout">로그아웃</button>
          <Link to="/mypage/modify">
          <button className="btn-modify">수정하기</button>
          </Link>
        </form>
      </div>
    </div>
  );  
}