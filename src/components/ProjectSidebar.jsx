import Button from "./Button";

export default function ProjectSidebar({ onStartAppProj }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-semibold md:text-2xl text-stone-300 uppercase">
        Your Project
      </h2>
      <div>
        <Button onClick={onStartAppProj}>+ Add Project</Button>
        <ul></ul>
      </div>
    </aside>
  );
}
