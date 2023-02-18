import { Card, Button, Typography } from 'antd';
import { LikeOutlined, LikeFilled, CommentOutlined } from '@ant-design/icons';
import { Link, useRouteLoaderData } from 'react-router-dom';

const { Paragraph, Text } = Typography;

function Post({ post, onLike, onComment }) {
  const { title, content, date, firstname, lastname, likes, userId, comments } = post;
  const authUser = useRouteLoaderData("app");
  const userLikesPost = likes.some(like => like.userId === authUser._id);

  function handleCreateComment(content) {
    if (typeof content === "string") onComment(post._id, content);
  }

  function handleAddLike() {
    if (authUser._id !== post._id) onLike(post._id);
  }

  return (
    <Card
      title={title}
      style={{ width: 420, minHeight: 250 }} 
      actions={[
        <Button onClick={userLikesPost ? undefined : handleAddLike}>{userLikesPost ? <LikeFilled /> : <LikeOutlined />} ({ likes.length })</Button>,
        <Button onClick={handleCreateComment}><CommentOutlined /> ({ comments.length })</Button>,
    ]}>
      <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
        {content}
      </Paragraph>

      <Text italic type="secondary">
        By <Link to={`/profile/${userId}`}>{firstname} {lastname}</Link> on {new Intl.DateTimeFormat("en", { dateStyle: "long", timeStyle: "short" }).format(new Date(date))}
      </Text>
    </Card>
  );
}

export default Post;