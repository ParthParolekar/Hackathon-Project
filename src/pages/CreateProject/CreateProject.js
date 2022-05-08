import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useAuth } from "../../context/AuthContext/AuthContext";

const CreateProject = () => {
  const [authState] = useAuth();
  console.log(authState);
  const navigate = useNavigate();

  useEffect(() => {
    !authState._id && navigate("/login");
  }, []);

  const [createProject, setCreateProject] = useState({
    name: "",
    description: "",
    _id: uuid(),
    stack: "",
    difficulty: "",
    time: "",
    availableRoles: [],
    totalCapacity: "",
    currentMembers: [],
    applications: []
  });

  const addToTotalProjects = () => {
    const projects = JSON.parse(localStorage.getItem("projects"));
    const newProjects = projects.concat(createProject);
    localStorage.setItem("projects", JSON.stringify(newProjects));
  };

  const addToUserProjects = () => {
    const users = JSON.parse(localStorage.getItem("users"));
    const updatedUserDetails = users.map(
      (user) =>
        user._id === authState._id && {
          ...user,
          projectsCreated: user.projectsCreated.concat(createProject)
        }
    );
    console.log(updatedUserDetails);
  };
  const formHandler = (e) => {
    e.preventDefault();
    addToTotalProjects();
    addToUserProjects();
  };
  return (
    <>
      <form onSubmit={formHandler}>
        <label>Name</label>
        <input
          value={createProject.name}
          onChange={(e) =>
            setCreateProject({ ...createProject, name: e.target.value })
          }
        />
        <label>Description</label>
        <input
          value={createProject.description}
          onChange={(e) =>
            setCreateProject({ ...createProject, description: e.target.value })
          }
        />
        <label>Stack</label>
        <input
          value={createProject.stack}
          onChange={(e) =>
            setCreateProject({ ...createProject, stack: e.target.value })
          }
        />
        <label>Time</label>
        <input
          value={createProject.time}
          onChange={(e) =>
            setCreateProject({ ...createProject, time: e.target.value })
          }
        />
        <label>Total Capacity</label>
        <input
          value={createProject.totalCapacity}
          onChange={(e) =>
            setCreateProject({
              ...createProject,
              totalCapacity: e.target.value
            })
          }
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateProject;
