import { Link } from "react-router-dom";

export default function Nav() {
  function handleSignOut() {
    window.localStorage.removeItem("email");
    window.location.pathname = "/login";
  }
  return (
    <nav className="d-flex father">
      <div className="d-flex" style={{ width: "215px" }}>
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
      </div>
      {!window.localStorage.getItem("email") ? (
        <div className="d-flex">
          <Link to={"/signup"} className="button">
            Sign Up
          </Link>
          <Link to={"/login"} className="button">
            Log In
          </Link>
        </div>
      ) : (
        <div className="button" onClick={handleSignOut}>
          Log out
        </div>
      )}
    </nav>
  );
}
