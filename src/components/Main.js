import React from "react";
import propTypes from "prop-types";

function Main({ image, title, author, ratings, ratings_percent, link }) {
  console.log(`https://comic.naver.com/${link}`);
  return (
    <div className="webtoon">
      <img className="webtoon_img" src={image} alt={title} title={title}></img>
      <div className="webtoon_data">
        <h3 className="webtoon_title">{title}</h3>
        <h5 className="webtoon_author">작가: {author}</h5>
        <p className="webtoon_ratings">평점: {ratings}점</p>
        <p className="webtoon_ratings_p">{ratings_percent}</p>
        {/* <Link to={`https://comic.naver.com${link}`} className="webtoon_linkBtn">
          보러가기
        </Link> */}
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
  ratings_percent: propTypes.string.isRequired,
  link: propTypes.string.isRequired,
};

export default Main;
