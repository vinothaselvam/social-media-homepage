import React, { useEffect, useState } from "react";
import Comment from "./Comment";

const Post = ({ post, userName }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [post.id]);

  return (
    <div className="post">
      <div className="post-header">
        <img
          src={`https://picsum.photos/seed/${post.userId}/50`}
          alt="avatar"
          className="avatar"
        />
        <h3>{userName}</h3>
      </div>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <div className="comments">
        <h5>Comments:</h5>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Post;
