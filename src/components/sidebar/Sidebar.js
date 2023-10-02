import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to={"/dashboard/users"}>Users</Link>
      <Link to={"/dashboard/users/create"}>New User</Link>
    </aside>
  );
}
