import { NavLink } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <NavLink
        className={"navlink"}
        activeClassName="active"
        to={"/dashboard/users"}
      >
        <i class="fa-solid fa-users"></i> Users
      </NavLink>

      <NavLink
        className={"navlink"}
        activeClassName="active"
        to={"/dashboard/user/create"}
      >
        <i class="fa-solid fa-user-plus"></i> New User
      </NavLink>
    </aside>
  );
}
