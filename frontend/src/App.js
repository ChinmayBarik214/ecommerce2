import { Counter } from "./features/counter/Counter";
import "tailwindcss/tailwind.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Cart from "./features/cart/Cart";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  { // only for testing - page will be added
    path: "cart",
    element: <Cart />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
