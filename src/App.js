import { useEffect } from "react";
import "./styles.css";
import { v4 as uuid } from "uuid";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import CreateProject from "./pages/CreateProject/CreateProject";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

export default function App() {
  // useEffect(() => {
  //   localStorage.setItem(
  //     "users",
  //     JSON.stringify([
  //       {
  //         _id: uuid(),
  //         firstName: "test",
  //         lastName: "user",
  //         email: "test@gmail.com",
  //         password: "test123",
  //         projectsApplied: [],
  //         projectsCreated: []
  //       }
  //     ])
  //   );
  // }, []);
  return (
    <div className="App">
      {" "}
      <Routes>
        <Route path="/" element={<h3>home</h3>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/createproject" element={<CreateProject />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
