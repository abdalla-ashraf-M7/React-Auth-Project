import TopBar from "./TopBar";
import "../style2.css";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashfather">
      <TopBar />
      <aside className="sidebar">
        <Link to={"/dashboard/users"}>users</Link>
      </aside>
      <Outlet />
    </div>
  );
}
