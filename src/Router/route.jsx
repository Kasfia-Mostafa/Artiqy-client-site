import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import { Form } from "../Components/Form/Form";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
    children: [
     {
      path: 'home',
      element: <Main />
     }
    ]
  },
]);
