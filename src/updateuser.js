import { useEffect, useState } from "react";
import Form from "./components/forms/Form";

export default function UudateUser() {
  const [name1, setName1] = useState("");
  const [email1, setEmail1] = useState("");

  const id = window.location.pathname.split("/").slice(-1)[0];

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`).then((res) =>
      res.json().then((data) => {
        setName1(data[0].name);
        setEmail1(data[0].email);
      })
    );
  }, []);
  console.log(name1);
  return (
    <div className="content">
      <div className="parent">
        <Form
          btnText="Update"
          submitLink={`http://127.0.0.1:8000/api/user/update/${id}`}
          pathAfterSuccess="/dashboard/users"
          name1={name1}
          email1={email1}
        />
      </div>
    </div>
  );
}
