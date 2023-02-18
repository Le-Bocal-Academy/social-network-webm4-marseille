import AuthForm from "../components/AuthForm";
import { login } from '../lib/api';

function Login() {
  async function handleSuccess({ email, password }) {
    return login(email, password);
  }

  return (
    <>
      <h1>Se connecter</h1>
      <AuthForm onSubmit={handleSuccess} />
    </>
  )
}

export default Login;