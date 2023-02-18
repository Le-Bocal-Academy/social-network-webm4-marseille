import { Navigate } from "react-router-dom";
import { logout } from "../lib/api";

function Logout() {
  if (logout()) return <Navigate to="/login" />
  return null;
}

export default Logout;