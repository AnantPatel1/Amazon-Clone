import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Store/RootLayout";
import Header from "./Components/Layout/Header";
import NavbarCartButton from "./Components/Layout/NavbarCartButton";
import Login from "./Components/Section/Login";
import { useStateValue } from "./Components/Cart/StateProvider";
import { useEffect } from "react";
import { auth } from "./Components/Auth/firebase";
import { ProductProvider } from "./Store/ProductContext";
function App() {
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    const check = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      check();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          path: "checkout",
          element: <NavbarCartButton />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
}

export default App;
