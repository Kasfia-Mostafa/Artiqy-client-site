import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import { Form } from "../Components/Form/Form";
import Social from "../Social/Social";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "/home",
    element: <Social />,
    children: [
      {
        path: "main",
        element: <Main></Main>,
      },
    ],
  },
]);
