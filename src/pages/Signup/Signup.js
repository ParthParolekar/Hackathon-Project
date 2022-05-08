import { useState } from "react";
import { v4 as uuid } from "uuid";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const signupHandler = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("users"));
    const userExists = existing.some((user) => user.email === email);
    console.log(userExists);

    if (!userExists) {
      const newUser = {
        email,
        password,
        firstName,
        lastName,
        _id: uuid(),
        projectsApplied: [],
        projectsOrganized: []
      };
      const addUser = existing.concat(newUser);
      localStorage.setItem("users", JSON.stringify(addUser));
    } else {
      console.log("user already exists");
    }
  };

  return (
    <>
      <form onSubmit={signupHandler}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <label>Email</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <label>Email</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        ></input>
        <label>Email</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        ></input>
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};

export default Signup;
