import { Input, Form, InputNumber } from 'antd';
import FormWrapper from './Form';

function ProfileForm(props) {
  return (
    <FormWrapper
      name="profile"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      onSubmit={props.onSubmit}
      onSuccess={props.onSuccess}
      initialValues={props.profile}
      autoComplete="off"
    >
      <Form.Item
        label="First Name"
        name="firstname"
        rules={[
          {
            required: true,
            message: 'Please input your first name!'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastname"
        rules={[
          {
            required: true,
            message: 'Please input your last name!'
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input type="email" />
      </Form.Item>

      <Form.Item label="Age" name="age">
        <InputNumber />
      </Form.Item>

      <Form.Item label="Job" name="occupation">
        <Input />
      </Form.Item>

    </FormWrapper>
  )
}

export default ProfileForm;