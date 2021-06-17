import React from "react";
import Logo from "../FUNNYTOONS.png";
import { Link } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;

function Nav(props) {
  const { userInfo, handleLogout, getUserInfo } = props;
  console.log("마이페이지:::", props.handleLogout);
  console.log("마이페이지2:::", handleLogout);

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
            <button className="btn btn-signout" onClick={handleLogout}>
              로그아웃
            </button>
            <button
              className="btn btn-mypage"
              type="submit"
              onClick={getUserInfo}
            >
              마이페이지
            </button>
          </span>
        </center>
      </div>
    </div>
  );
}

export default Nav;
