import { Card, Button, Typography, Input, Divider, List } from 'antd';
import { LikeOutlined, LikeFilled, CommentOutlined } from '@ant-design/icons';
import { Link, useRouteLoaderData } from 'react-router-dom';
import { useState } from 'react';

const { Paragraph, Text } = Typography;

function Post({ post, onLike, onComment }) {
  const { title, content, date, firstname, lastname, likes, userId, comments } = post;
  const authUser = useRouteLoaderData("app");
  const [isShowingComments, setIsShowingComments] = useState(false);
  const [newComment, setNewComment] = useState("");

  const userLikesPost = likes.some(like => like.userId === authUser._id);

  function handleCreateComment() {
    if (typeof newComment === "string" && newComment) onComment(post._id, newComment);
    setNewComment("");
  }

  function handleAddLike() {
    if (authUser._id !== post._id) onLike(post._id);
  }

  return (
    <Card
      title={title}
      style={{ width: 420, minHeight: 250 }}
      actions={[
        <Button onClick={userLikesPost ? undefined : handleAddLike}>{userLikesPost ? <LikeFilled /> : <LikeOutlined />} ({likes.length})</Button>,
        <Button onClick={() => setIsShowingComments(!isShowingComments)}><CommentOutlined /> ({comments.length})</Button>,
      ]}>
      <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
        {content}
      </Paragraph>

      <Text italic type="secondary">
        By <Link to={`/profile/${userId}`}>{firstname} {lastname}</Link> on {new Intl.DateTimeFormat("en", { dateStyle: "long", timeStyle: "short" }).format(new Date(date))}
      </Text>

      {isShowingComments
        ? (
          <>
            <Divider>Leave a comment too!</Divider>
            <Input.Group compact style={{ width: '100%', padding: '0 8px 16px', display: 'flex', gap: 4, alignItems: 'center' }}>
              <Input style={{ flexGrow: 1 }} value={newComment} onChange={e => setNewComment(e.target.value)} />
              <Button type="primary" onClick={handleCreateComment}>Comment</Button>
            </Input.Group>
            <List itemLayout="vertical" dataSource={comments} renderItem={(comment) => (
              <List.Item style={{ padding: 8 }}>
                <List.Item.Meta
                  title={comment.content}
                  description={<Text italic type="secondary">By <Link to={`/profile/${comment.userId}`}>{comment.firstname + " " + comment.lastname}</Link></Text>}
                />
              </List.Item>
            )} />
          </>
        ) : null}
    </Card>
  );
}

export default Post;