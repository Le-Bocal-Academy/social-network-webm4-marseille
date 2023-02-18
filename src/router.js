import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import App from './App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Index />} />
      <Route path="profile/:id" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="signin" element={<Signin />} />
    </Route>
  )
);

export default router;