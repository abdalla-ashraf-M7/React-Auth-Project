import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="d-flex father">
      <div className="d-flex" style={{ width: "215px" }}>
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
      </div>
      <div className="d-flex">
        <Link to={"/signup"} className="button">
          Sign Up
        </Link>
        <Link to={"/login"} className="button">
          Log In
        </Link>
      </div>
    </nav>
  );
}
