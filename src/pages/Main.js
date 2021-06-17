import React from "react";
import propTypes from "prop-types";

function Main({ image, title, author, ratings, link }) {
  console.log(`https://comic.naver.com/${link}`);
  return (
    <div className="webtoon">
      <img className="webtoon_img" src={image} alt={title} title={title}></img>
      <div className="webtoon_data">
        <h3 className="webtoon_title">{title}</h3>
        <h5 className="webtoon_author">작가: {author}</h5>
        <p className="webtoon_ratings">평점: {ratings}점</p>
        <div className="star-ratings">
          <div
            className="star-ratings-fill"
            style={{ width: Number(`${ratings}` * 10) + "%" }}
          >
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <div className="star-ratings-base">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
        </div>
        <a href={`https://comic.naver.com${link}`} className="webtoon_linkBtn">
          보러가기
        </a>
      </div>
    </div>
  );
}

Main.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
  ratings: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
};

export default Main;
