import { Button, Form, notification } from 'antd';

function FormContainer({ children, onSubmit, onSuccess, showSuccess, ...props }) {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();

  async function onFinish(values) {
    try {
      const res = await onSubmit(values);
      if (res && typeof onSuccess === 'function') onSuccess(res, form);
      if (showSuccess) api.success({
        message: 'Your operation was successful',
        key: 'submit-success',
        duration: 2,
      })
    } catch (err) {
      api.error({
        message: 'An error occurred',
        description: <p>{err.message}</p>,
        key: 'submit-error',
        duration: 5,
      });
    }
  }

  function onFinishFailed(errorInfo) {
    const description = errorInfo.errorFields.map(err => (
      <li key={err.name[0]}>{err.errors[0]}</li>
    ))
    api.error({
      message: 'The form is invalid, please check messages below and try again',
      description: <ul>{description}</ul>,
      key: 'form-error',
      duration: 5,
    });
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      {...props}
    >
      {contextHolder}
      {children}
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

export default FormContainer;