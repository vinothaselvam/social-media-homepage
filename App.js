import React, { useEffect, useState } from "react";
import Post from "./components/Post";
import users from "./assets/users.json";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const getUserName = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Anonymous";
  };

  return (
    <div className="app">
      <h1>Social Media Homepage</h1>
      <div className="posts">
        {posts.map((post) => (
          <Post key={post.id} post={post} userName={getUserName(post.userId)} />
        ))}
      </div>
    </div>
  );
};

export default App;
