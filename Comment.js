import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <strong>{comment.name}</strong>
      <p>{comment.body}</p>
    </div>
  );
};

export default Comment;
