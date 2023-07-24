import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Store/RootLayout";
import Header from "./Components/Layout/Header";
import NavbarCartButton from "./Components/Layout/NavbarCartButton";
import Checkout from "./Components/Section/Checkout";
import Login from "./Components/Section/Login";
import { useStateValue } from "./Components/Cart/StateProvider";
import { useEffect } from "react";
import { auth } from "./Components/Auth/firebase";
function App() {
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
  }, []);
  console.log("user is >>", user);
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
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
