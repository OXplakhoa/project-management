import NewTask from "./NewTask";

export default function Task({ task, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
      <NewTask onAdd={onAdd} />
      {task.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet
        </p>
      )}
      {task.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {task.map((t) => (
            <li key={t.id} className="flex justify-between my-4">
              <span className="text-lg">{t.text}</span>
              <button onClick={() => onDelete(t.id)} className="font-semibold text-stone-700 hover:text-red-500">
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
