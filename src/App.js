import { Route, Routes } from "react-router-dom";
import SignUp from "./Signup";
import LogIn from "./LogIn";
import Home from "./Home";
import Dashboard from "./components/Dashborad";
import Users from "./components/users";
import UudateUser from "./updateuser";
import NewUser from "./NewUsers";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UudateUser />} />
          <Route path="users/create" element={<NewUser />} />
        </Route>
      </Routes>
    </div>
  );
}
