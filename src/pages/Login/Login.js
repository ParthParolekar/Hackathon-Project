import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [authState, authDispatch] = useAuth();

  const loginHandler = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem("users"));
    const userExists = existing.find(
      (user) => user.email === email && user.password === password
    );
    if (userExists) {
      console.log(userExists);
      navigate("/projects");
      authDispatch({ type: "HANDLE_USER_AUTH", payload: userExists });
    } else {
      navigate("/signup");
    }
  };
  return (
    <>
      <form onSubmit={loginHandler}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
