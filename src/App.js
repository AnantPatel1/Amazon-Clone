import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Store/RootLayout";
import Header from "./Components/Layout/Header";
import NavbarCartButton from "./Components/Layout/NavbarCartButton";
import Checkout from "./Components/Section/Checkout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Header />,
        },
        {
          path: "contact",
          element: <NavbarCartButton />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
