import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

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
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar onStartAppProj={handleStartAddProj} />
        {projectState.selectedProjectId === null ? (
          <NewProject />
        ) : (
          <NoProjectSelected onStartAppProj={handleStartAddProj} />
        )}
      </main>
    </>
  );
}

export default App;
