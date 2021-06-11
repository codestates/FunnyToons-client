import React from "react";
import { Link, withRouter } from "react-router-dom";
import { review } from "../dummy/dummyReview"
import RestInfoList from "../components/RestInfoList"
import CommentList from "../components/CommentList"
import MenuList from "../components/MenuList"
import { Text, View, StyleSheet } from 'react-native';
import axios from "axios";



class RestaurantInfo extends React.Component {
  constructor(props) {
    super(props);   
  };

  goCommentPage = () => {
    this.props.history.push('/comment')
  }

  async upLike () {
    await axios.post('/review', {})
  }

  render() {
    return (
      <View style={{width: '80%'}}>
        <View style={{flexDirection: 'row', width: '80%', justifyContent: 'space-around', marginBottom: 60}}>
          {review.restaurantInfo.map(el => <MenuList restaurantInfo={el}
          style={{width: 100, height: 100}}/>)}
        </View>
        <View style={{flexDirection: 'row', width: '80%'}}>
          <RestInfoList restaurantInfo={review.restaurantInfo}/>
          <View style={{width: '40%'}}>
            <View style={{alignItems: 'flex-end'}}>
              <button style={{width: 100}} onClick={this.goCommentPage}>리뷰 작성</button>
            </View>
            {review.comment.slice(0,3).map(el => <CommentList comment={el}/>)}
          </View>
        </View>
      </View>  
    )
  }
}

const styled = {
  menuStyle: {
    width: 150,
    height: 150
  }
}

export default withRouter(RestaurantInfo);
