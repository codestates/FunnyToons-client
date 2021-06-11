import React, { useState } from 'react';
import axios from 'axios';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import PageviewIcon from '@material-ui/icons/Pageview';

const data = async () => {
  const dataed = await axios.get('/')
}

function RestInfoList({ restaurantInfo }) {
  const [isLike, setIsLike] = useState(false);

  const toggleLike = () => {
    if (isLike === false) {
      setIsLike(true);
      return;
    }
    setIsLike(false);
  }
  
    return (
    <div style={{width: '50%'}}>
      <div style={{flexDirection: 'row'}}>
        <img src={restaurantInfo[0].image} style={{width: 200, height: 200}}></img>
        <div style={{flexDirection: 'row'}}>
          <div onClick={toggleLike} style={{cursor:'pointer'}}>
            { isLike === false ? <FavoriteIcon color="primary" /> : <FavoriteIcon color="secondary" />} 
            {restaurantInfo[0].total_likes}
          </div>
          <div>
            <CommentIcon />
            {restaurantInfo[0].total_comments}
          </div>
          <div>
            <PageviewIcon />
            {restaurantInfo[0].views}
          </div>
        </div>
      </div>  
      <div>{restaurantInfo[0].text}</div>
    </div>)
}

export default RestInfoList;