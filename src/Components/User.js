import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((Error) => console.log(Error));
  }, []);
  console.log(users);
  return (
    <div
      style={{
        display: "flex",
        gap: "5rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {users.map((e) => (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{e.name}</Card.Title>
              <Card.Text>{e.email}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default User;
