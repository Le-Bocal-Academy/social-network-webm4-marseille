import { Button, Form, Input, notification, Typography } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const { Paragraph } = Typography;

function AuthForm(props) {
  const navigate = useNavigate();

  const location = useLocation();
  const [api, contextHolder] = notification.useNotification();

  async function onFormSubmit(values) {
    const success = await props.onSubmit(values).catch(err => api.error({
      message: 'An error occurred',
      description: <p>{err.message}</p>,
      key: 'auth-server',
      duration: 5,
    }));
    if (success) navigate("/");
  }

  function onFormError(errorInfo) {
    const description = errorInfo.errorFields.map(err => (
      <li key={err.name[0]}>{err.errors[0]}</li>
    ))
    api.error({
      message: 'An error occurred',
      description: <ul>{description}</ul>,
      key: 'auth-form',
      duration: 2000,
    });
  }

  return (
    <Form
      name="auth"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
        textAlign: 'center'
      }}
      initialValues={props.initialValues ?? {}}
      onFinish={onFormSubmit}
      onFinishFailed={onFormError}
      autoComplete="off"
    >
      {contextHolder}
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

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {location.pathname === '/signin' ? (
        <>
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
          <Paragraph>
            Already have an account? <Link to="/login">Login now!</Link>
          </Paragraph>
        </>
      ) : (
        <Paragraph>
          No account yet? <Link to="/signin">Sign up now!</Link>
        </Paragraph>
      )}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AuthForm;