import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="barfather">
      <div style={{ fontSize: "35px" }}>Store</div>
      <Link to={"/"} className="button">
        GO To Website
      </Link>
    </div>
  );
}
