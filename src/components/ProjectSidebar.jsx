import Button from "./Button";

export default function ProjectSidebar({ onStartAppProj, project }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-semibold md:text-2xl text-stone-300 uppercase">
        Your Project
      </h2>
      <div>
        <Button onClick={onStartAppProj}>+ Add Project</Button>
        <ul className="mt-8">
          {project.map((p) => (
            <li key={p.id}>
              <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
                {p.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
