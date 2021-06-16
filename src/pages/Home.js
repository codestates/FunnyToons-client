import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
      return (
        <center>
            <ul>
                <li>
                  <Link to='/signup'>회원가입</Link>
                </li>
                <li>
                  <Link to='/signin'>로그인</Link>
                </li>
                <li>
                  <Link to='/'>로그아웃</Link>
                </li>
                <li>
                  <Link to='/mypage'>마이페이지</Link>
                </li>
            </ul>
        </center>
      );
    }
  }
