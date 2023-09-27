import { useState } from "react";
import Error from "./components/Error";
import axios from "axios";
import Nav from "./components/Nav";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isAcceptable, changAccetable] = useState(false);
  const [emailEroor, setEmailError] = useState("");

  function handleLogin() {
    window.localStorage.setItem("email", email);
    window.location.pathname = "/";
  }

  async function Submit(e) {
    let flag = false;
    e.preventDefault();
    changAccetable(true);
    if (email.length < 5 || pass.length < 5) {
      flag = false;
    } else {
      flag = true;
    }
    try {
      if (flag) {
        let res = await axios.post("http://127.0.0.1:8000/api/login", {
          email: email,
          password: pass,
        });
        if (res.status === 200) {
          handleLogin();
        } else {
          console.log(emailEroor);
          console.log(res);
        }
      }
    } catch (err) {
      console.log(err);
      setEmailError(err.response.request.status);
    }
  }

  return (
    <>
      <Nav />
      <div className="parent">
        <form onSubmit={Submit}>
          <label htmlFor="2">Email:</label>
          <input
            id="2"
            type="email"
            placeholder="Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {email.length < 8 && isAcceptable && (
            <Error message="email can't be less than 5" />
          )}
          {emailEroor === 422 && isAcceptable && (
            <Error message="email has already been taken" />
          )}
          <label htmlFor="3">Password:</label>
          <input
            id="3"
            type="password"
            placeholder="Password..."
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          {pass.length < 8 && isAcceptable && (
            <Error message="Password can't be less than 5" />
          )}
          <button type="submit"> Log In</button>
        </form>
      </div>
    </>
  );
}
