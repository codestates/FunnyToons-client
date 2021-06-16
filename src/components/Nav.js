import React from "react";
import Logo from "../FUNNYTOONS.png"

function Nav() {
  return (
    <div className="nav">
      <div className="header">
          <center>
            <h1 className="title">
              <img src={Logo} alt="logo" />
            </h1>
          </center>
          <center>
            <span className="btn-group">
              <button className="btn signUpBtn">회원가입</button>
              <button className="btn loginBtn">로그인</button>
            </span>
          </center>
      </div>
    </div>
  );
}

export default Nav;
