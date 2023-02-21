import { createHashRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { getAuthUser } from './lib/api';
import Index from './pages/Index';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import App from './App';

const router = createHashRouter(
  createRoutesFromElements(
    <Route id="app" path="/" element={<App />} loader={getAuthUser} shouldRevalidate={() => true}>
      <Route index element={<Index />} />
      <Route path="profile/:id" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="signin" element={<Signin />} />
      <Route path="logout" element={<Logout />} />
    </Route>
  )
);

export default router;
