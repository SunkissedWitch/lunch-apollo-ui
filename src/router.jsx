import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';

import BaseLayout from "./Layouts/BaseLayout";
import ProtectedRoute from './Layouts/ProtectedRoute';

import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Page_404 from "./Pages/Page_404";
import Users from './Pages/Users';
import Home from './Pages/Home';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<SignUp />} />

      <Route element={<ProtectedRoute />}>
        <Route index path="users" element={<Users />} />
      </Route>
    </Route>

    <Route path="*" element={<Page_404 />} />
  </>
));

export default router;