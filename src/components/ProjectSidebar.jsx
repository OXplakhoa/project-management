export default function ProjectSidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-semibold md:text-2xl text-stone-300 uppercase">
        Your Project
      </h2>
      <div>
        <button className="text-sm bg-stone-700 text-stone-400 p-2 hover:bg-stone-600 hover:text-stone-100 rounded-r-lg">
          + Add Project
        </button>
        <ul></ul>
      </div>
    </aside>
  );
}
