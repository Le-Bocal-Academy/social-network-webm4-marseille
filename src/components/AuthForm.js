import { Input, Typography, Form } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FormWrapper from './Form';

const { Paragraph } = Typography;

function AuthForm(props) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <FormWrapper
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
      onSubmit={props.onSubmit}
      onSuccess={() => navigate("/")}
      autoComplete="off"
    >
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
    </FormWrapper>
  )
}

export default AuthForm;