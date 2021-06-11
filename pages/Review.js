import React from "react";
import { Link, withRouter, View } from "react-router-dom";
import axios from "axios";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      comment: "",
    }
  };

  goReviewPage = () => {
    this.props.history.push('/review')
  }
  
  handleText(e) {
    this.setState({comment: e.target.value})
  }

  handleCommentImage(e) {
    this.setState({image: e.target.value})
  }


  async submitComment () {
    await axios.post('/comment', {
      image: this.state.image,
      comment: this.state.comment
    })
  }

  render() {
    return (
      
      <div style={{width: '80%', height: '80%'}}>
        <input style={{width: 800, height: 300, justifyContent: 'center'}} onChange={this.handleText}></input>
        <div>
          <div style={{flexDirection: 'row'}}>
            <div>  
              <img></img>
              <div>
                <select></select>
                <input></input>
              </div>
            </div> 
            <div>
              <button onClick={this.goReviewPage}>취소</button>
              <button onClick={this.goReviewPage}>작성 완료</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Review);