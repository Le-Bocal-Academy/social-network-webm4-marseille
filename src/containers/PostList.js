import { Space } from "antd";
import Post from "../components/Post";

function PostList({ posts, direction = "horizontal" }) {

  return (
    <Space direction={direction}>
      {posts.map((post) => <Post key={post._id} {...post} />)}
    </Space>
  );
}

export default PostList;