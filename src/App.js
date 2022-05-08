import { useEffect } from "react";
import "./styles.css";
import { v4 as uuid } from "uuid";
import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import CreateProject from "./pages/CreateProject/CreateProject";

export default function App() {
  useEffect(() => {
    localStorage.setItem(
      "users",
      JSON.stringify({
        _id: uuid(),
        firstName: "test",
        lastName: "user",
        email: "test.gmail.com",
        password: "test123"
      })
    );
    localStorage.setItem(
      "projects",
      JSON.stringify([
        {
          _id: uuid(),
          name: "google",
          description: "search engine"
        }
      ])
    );
  }, []);
  return (
    <div className="App">
      {" "}
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/createproject" element={<CreateProject />} />
      </Routes>
    </div>
  );
}
