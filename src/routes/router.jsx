import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import TodoListPage from "../pages/TodoListPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>
  },
  {
    path: "/signin",
    element: <SignInPage/>,
  },
  {
    path: "/signup",
    element: <SignUpPage/>,
  },
  {
    path: "/todo",
    element: <TodoListPage/>,
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
]);