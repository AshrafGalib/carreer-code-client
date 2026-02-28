import { createBrowserRouter } from "react-router";
import Home from "../features/home/Home";
import MainLayout from "../components/layouts/MainLayout";
import Register from "../features/auth/Register";
import Signin from "../features/auth/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, element: <Home /> },
      { path: 'register', element: <Register></Register> },
      { path: 'signin', element: <Signin></Signin> }
    ]
  }
]);

export default router;