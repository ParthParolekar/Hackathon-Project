import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [authState] = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("projects"));
    existing
      ? setProjects(existing)
      : localStorage.setItem("projects", JSON.stringify([]));
  }, []);

  useEffect(() => {
    !authState._id && navigate("/login");
  }, [authState._id]);

  return (
    <>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h1>{project.name}</h1>
            <h3>{project.description}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Projects;
