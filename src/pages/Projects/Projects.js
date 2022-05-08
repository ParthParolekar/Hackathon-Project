import { useEffect, useState } from "react";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("projects"));
    existing
      ? setProjects(existing)
      : localStorage.setItem("projects", JSON.stringify([]));
  }, []);

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
