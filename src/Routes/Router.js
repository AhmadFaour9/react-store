import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Product from "../Pages/Product/Product";
import Root from "../Root";
import { Login, SignUp } from "../Pages";
import SingleProduct from "../Pages/CartPage/SingleProduct";
import CardBag from "../Pages/CardBag/CardBag";
import PrivateRoute from "../utils/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/Product",
        element: <Product />,
      },
      {
        path: ":p",
        element: <SingleProduct />,
      },

      {
        path: "/CardBag",
        element: <CardBag />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "/About",
            element: <About />,
          },
        ]
      },
    ],
  },
]);

export default router;
