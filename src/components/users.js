import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setusers] = useState([]);
  const [runUserEffect, setUseEffect] = useState(0);

  async function deleteuser(id) {
    let res = await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
    if (res.status === 200) {
      console.log("ddddddddddddddddd");
      console.log(res);
      setUseEffect((prev) => prev + 1);
    }
  }
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/show")
      .then((res) => res.json())
      .then((data) => setusers(data));
  }, [runUserEffect]);
  const datashow = users.map((user, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        {
          <i
            style={{ color: "blue", cursor: "pointer" }}
            className="fa-solid fa-pen-to-square"
          ></i>
        }
        <i
          onClick={() => deleteuser(user.id)}
          style={{ color: "red", cursor: "pointer", marginLeft: "40px" }}
          className="fa-solid fa-trash"
        ></i>
      </td>
    </tr>
  ));
  return (
    <div className="content">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{datashow}</tbody>
      </table>
    </div>
  );
}
