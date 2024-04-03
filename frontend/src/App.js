import { Counter } from "./features/counter/Counter";
import "tailwindcss/tailwind.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Signup from "./features/auth/components/Signup";
function App() {
  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;
