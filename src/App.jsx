import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import {v4 as uuidv4} from 'uuid';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
  });
  const handleStartAddProj = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };
  const handleAddProj = (projectData) => {
    setProjectState(prev => {
      const newProject = {...projectData, id: uuidv4()}
      return {
        ...prev,
        selectedProjectId: undefined,
        project: [...prev.project, newProject]
      }
    })
  }
  console.log(projectState)
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar onStartAppProj={handleStartAddProj} project={projectState.project} />
        {projectState.selectedProjectId === null ? (
          <NewProject onAdd={handleAddProj}/>
        ) : (
          <NoProjectSelected onStartAppProj={handleStartAddProj} />
        )}
      </main>
    </>
  );
}

export default App;
