import { useState } from "react";
import Error from "./components/Error";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rPass, setRpass] = useState("");
  const [isAcceptable, changAccetable] = useState(false);
  const [flag, changFlag] = useState(true);

  function Submit(e) {
    e.preventDefault();
    changAccetable(true);
    if (name === "" || email.length < 5 || pass.length < 5 || pass !== rPass) {
      changFlag(false);
    }
    if (flag === false) {
      //send
    }
  }

  return (
    <div className="parent">
      <form onSubmit={Submit}>
        <label htmlFor="1">Name:</label>
        <input
          id="1"
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name === "" && isAcceptable && <Error message="Name cna't be empty" />}
        <label htmlFor="2">Email:</label>
        <input
          id="2"
          type="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {email.length < 5 && isAcceptable && (
          <Error message="email can't be less than 5" />
        )}
        <label htmlFor="3">Password:</label>
        <input
          id="3"
          type="password"
          placeholder="Password..."
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        {pass.length < 5 && isAcceptable && (
          <Error message="Password can't be less than 5" />
        )}

        <label htmlFor="4">Repeat Password:</label>
        <input
          id="4"
          type="password"
          placeholder="Repeat Password..."
          value={rPass}
          onChange={(e) => setRpass(e.target.value)}
        />
        {pass !== rPass && isAcceptable && (
          <Error message="the two passwords should match" />
        )}

        <button type="submit"> Sign Up</button>
      </form>
    </div>
  );
}
