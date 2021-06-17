import React, { Component } from "react";
import Main from "./Main";
import Nav from "./Nav";
import "./Home.css";
import async from "async";
const axios = require("axios");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      userInfo: true,
      isLoading: true,
      webtoons: [],
    };
    this.getToons = this.getToons.bind(this);
  }
  getToons() {
    return axios
      .get("http://ec2-3-36-89-52.ap-northeast-2.compute.amazonaws.com/", {
        "content-type": "application/json",
        credentials: true,
      })
      .then((data) => {
        // console.log("응답", data.status);
        // console.log("데이터실험", data.data);
        this.setState({ webtoons: data.data, isLoading: false });
      });
  }

  componentDidMount() {
    this.getToons();
  }

  async getUserInfo() {
    await axios
      .get(
        "http://ec2-3-36-89-52.ap-northeast-2.compute.amazonaws.com/user/userInfo", {

        },
        {
          "content-type": "application/json",
          credentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        this.props.history.push("/mypage");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { isLoading, webtoons } = this.state;
    return (
      <section className="container">
        {" "}
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div>
            <div>
              {console.log("홈화면:::", this.props.handleLogout)}
              <Nav 
                handleLogout={this.props.handleLogout}
                getUserInfo={this.getUserInfo}
              />
            </div>
            <div className="webtoons">
              {webtoons.map((webtoon, idx) => (
                <Main
                  key={idx}
                  image={webtoon.image}
                  title={webtoon.title}
                  author={webtoon.author}
                  ratings={webtoon.ratings}
                  ratings_percent={webtoon.ratings_percent}
                  link={webtoon.link}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
