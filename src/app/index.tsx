import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/signUp/ui/SignUpPage";
import { EmailLogInPage, LogInPage } from "../pages/logIn/ui";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <div>home</div>,
  },
  { path: "/sign-up", element: <SignUp /> },
  {
    path: "/log-in",
    element: <LogInPage />,
  },
  {
    path: "/log-in/email",
    element: <EmailLogInPage />,
  },
]);
