import React, { Component } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import "./App.css";
const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      webtoons: [],
    };
    this.getToons = this.getToons.bind(this);
  }
  getToons() {
    return axios
      .get("http://ec2-13-124-157-37.ap-northeast-2.compute.amazonaws.com/", {
        "content-type": "application/json",
        credentials: true,
      })
      .then((data) => {
        console.log("응답", data.status);
        console.log("데이터실험", data.data);
        this.setState({ webtoons: data.data, isLoading: false });
      });
  }

  componentDidMount() {
    this.getToons();
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
              <Nav />
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

export default App;