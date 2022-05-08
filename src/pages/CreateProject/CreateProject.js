import { useState } from "react";

const CreateProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const formHandler = (e) => {
    e.preventDefault();
    const projects = JSON.parse(localStorage.getItem("projects"));
    console.log(projects);
  };
  return (
    <>
      <form onSubmit={formHandler}>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <label>Description</label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateProject;
