import React from 'react';

const CommentList = ({ comment }) => (
  <div style={{marginBottom: 10}}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span>{comment.created_at}</span>
    <div>{comment.comment}</div>
    <img src={comment.image} style={{width: 60, height: 60}}></img>
    <button>수정</button>
    <button>삭제</button>
  </div>
)

export default CommentList;