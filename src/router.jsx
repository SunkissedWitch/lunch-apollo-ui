import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';

import NavbarLayout from "./Layouts/NavbarLayout";
import ProtectedRoute from './Layouts/ProtectedRoute';

import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Page_404 from "./Pages/Page_404";
import Users from './Pages/Users';
import Home from './Pages/Home';
import BasicLayout from './Layouts/BasicLayout';
import Orders from './Pages/Orders';
import Pool from './Pages/Pool';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<BasicLayout />}>
      <Route index element={<Navigate to="/login" />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<SignUp />} />
    </Route>

    <Route path="/" element={<NavbarLayout />}>
      <Route element={<ProtectedRoute />}>
        <Route index path="users" element={<Users />} />
        <Route index path="orders" element={<Orders />} />
        <Route index path="pool" element={<Pool />} />
      </Route>
    </Route>

    <Route path="*" element={<Page_404 />} />
  </>
));

export default router;