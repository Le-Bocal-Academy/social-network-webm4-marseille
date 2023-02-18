import AuthForm from "../components/AuthForm";
import { login, signin } from "../lib/api";

function Signin() {
  async function handleSuccess({ email, password, firstname, lastname }) {
    const success = await signin(email, password, firstname, lastname);
    if (success) return login(email, password);
  }

  return (
    <>
      <h1>Créer un compte</h1>
      <AuthForm onSubmit={handleSuccess} />
    </>
  )
}

export default Signin;