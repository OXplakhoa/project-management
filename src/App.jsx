import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import { v4 as uuidv4 } from "uuid";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });
  const handleSelectProj = (id) => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  };
  const handleStartAddProj = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };
  const handleAddProj = (projectData) => {
    setProjectState((prev) => {
      const newProject = { ...projectData, id: uuidv4() };
      return {
        ...prev,
        selectedProjectId: undefined,
        project: [...prev.project, newProject],
      };
    });
  };
  const handleCancelAddProj = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  };
  console.log(projectState);
  const selectedProject = projectState.project.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = <SelectedProject project={selectedProject} />;
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProj} onCancel={handleCancelAddProj} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAppProj={handleStartAddProj} />;
  }
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar
          onStartAppProj={handleStartAddProj}
          projects={projectState.project}
          onSelectProject={handleSelectProj}
        />
        {content}
      </main>
    </>
  );
}

export default App;
