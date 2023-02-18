import { Form, Input } from "antd";
import FormWrapper from './Form';
import { createPost } from '../lib/api';

function CreatePost(props) {
  async function handleCreatePost({ title, content }) {
    return createPost(title, content);
  }

  return (
    <FormWrapper
      name="post"
      layout="vertical"
      initialValues={{}}
      onSubmit={handleCreatePost}
      onSuccess={props.onPostCreated}
      autoComplete="off"
      style={{
        backgroundColor: 'rgba(0, 0, 0, .05)',
        padding: 16
      }}
    >
      <h3>Write what's on your mind...</h3>
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input a title!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Content"
        name="content"
        rules={[
          {
            required: true,
            message: 'Please make some content!',
          },
        ]}
      >
        <Input.TextArea showCount autoSize={{ minRows: 2 }} />
      </Form.Item>
    </FormWrapper>
  );
}

export default CreatePost;