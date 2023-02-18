import { useState, useEffect } from "react";
import PostList from "../containers/PostList";
import { getPosts } from "../lib/api";

function Index() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res.posts));
  }, []);

  return (
    <>
      <h1>Welcome</h1>
      <PostList posts={posts} />
    </>
  )
}

export default Index;