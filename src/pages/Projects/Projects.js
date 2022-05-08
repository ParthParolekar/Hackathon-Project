import { useEffect, useState } from "react";

// import {  } from "react";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(JSON.parse(localStorage.getItem("projects")));
  }, []);
  console.log(projects);
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
