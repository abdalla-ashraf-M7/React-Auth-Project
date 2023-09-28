import { useEffect, useState } from "react";
import Error from "./Error";
import axios from "axios";

export default function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [rPass, setRpass] = useState("");
  const [isAcceptable, changAccetable] = useState(false);
  const [emailEroor, setEmailError] = useState("");
  console.log(name);
  console.log(props.name1);

  useEffect(() => {
    if (props.name1 !== undefined) {
      setName(props.name1);
      setEmail(props.email1);
    }
  }, [props.name1, props.email1]);

  function handleSignup() {
    window.localStorage.setItem("email", email);
    window.location.pathname = props.pathAfterSuccess;
  }
  async function Submit(e) {
    let flag = false;
    e.preventDefault();
    changAccetable(true);
    if (name === "" || email.length < 5 || pass.length < 5 || pass !== rPass) {
      flag = false;
    } else {
      flag = true;
    }

    try {
      if (flag) {
        let res = await axios.post(props.submitLink, {
          name: name,
          email: email,
          password: pass,
          password_confirmation: rPass,
        });
        if (res.status === 200) {
          handleSignup();
        }
      }
    } catch (err) {
      console.log(err.response.request.status);
      setEmailError(err.response.request.status);
    }
  }
  return (
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
      <button type="submit"> {props.btnText} </button>
    </form>
  );
}