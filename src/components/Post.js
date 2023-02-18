import { Card } from 'antd';

function Post({ title, content }) {
  return (
    <Card title={title} style={{ width: 300 }}>
      <p>{content}</p>
    </Card>
  );
}

export default Post;