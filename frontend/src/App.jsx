import "./App.css";
import About from "./pages/About";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "./layout/MainLayouts";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "services",
          element: <Services />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "thankyou",
          element: <ThankYou />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
};

export default App;
