import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="/Sign-Up" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
