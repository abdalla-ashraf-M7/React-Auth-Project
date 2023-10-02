import TopBar from "./TopBar";
import "../style2.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="dashfather">
      <TopBar />
      <Sidebar />
      <Outlet />
    </div>
  );
}
