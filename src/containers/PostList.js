import { Space } from "antd";
import Post from "../components/Post";
import { createLike, createComment } from '../lib/api';

function PostList({ posts, direction = "horizontal", onChange }) {
  function handleLike(postId) {
    createLike(postId).then(onChange);
  }
  function handleComment(postId, content) {
    createComment(postId, content).then(onChange);
  }

  return (
    <Space direction={direction} wrap>
      {posts.map((post) => 
        <Post 
          key={post._id}
          post={post}
          onLike={handleLike}
          onComment={handleComment}
        />)}
    </Space>
  );
}

export default PostList;