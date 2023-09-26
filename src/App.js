import { Route, Routes } from "react-router-dom";
import SignUp from "./Signup";
import Nav from "./components/Nav";
import LogIn from "./LogIn";

export default function App() {
  return (
    <div>
      {" "}
      <Nav />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}
