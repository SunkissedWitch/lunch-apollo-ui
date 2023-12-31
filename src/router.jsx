import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';

import NavbarLayout from "./Layouts/NavbarLayout";
import ProtectedRoute from './Layouts/ProtectedRoute';

import { authLoader } from './loaders/authLoader';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Page_404 from "./Pages/Page_404";
import Users from './Pages/Users';
import Home from './Pages/Home';
import BasicLayout from './Layouts/BasicLayout';
import Orders from './Pages/Orders';
import Poll from './Pages/Poll';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route element={<BasicLayout />}>
      <Route
        index
        loader={authLoader}
        element={<Navigate to="/login" />}
      />

      <Route
        path="login"
        element={<Login />}
        loader={authLoader}
      />
      <Route
        path="register"
        element={<SignUp />}
        loader={authLoader}
      />
    </Route>

    <Route path="/" element={<NavbarLayout />}>
      <Route element={<ProtectedRoute />}>
        <Route index path="users" element={<Users />} />
        <Route index path="orders" element={<Orders />} />
        <Route index path="poll" element={<Poll />} />
      </Route>
    </Route>

    <Route path="*" element={<Page_404 />} />
  </>
));

export default router;