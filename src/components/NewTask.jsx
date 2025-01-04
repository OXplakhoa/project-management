import { useRef, useState } from "react";
import Modal from "./Modal";

export default function NewTask({onAdd}) {
  const [enterTask, setEnterTask] = useState('');
  const handleChange = (e) => {
    setEnterTask(e.target.value);
  };
  const modal =useRef();
  const handleClick = () => {
    if(enterTask.trim() === ""){
        modal.current.open();
        return;
    }
    onAdd(enterTask);
    setEnterTask('');
  }
  return (
    <>
    <Modal ref={modal} buttonText={"❌"}>
        <h2 className="text-xl font-bold text-stone-600 my-3">Invalid Task! Task field should not be empty!</h2>
    </Modal>
    <div className="flex items-center gap-4">
      <input
        onChange={handleChange}
        type="text"
        className="placeholder:italic placeholder:text-slate-400 w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enterTask}
        placeholder="Enter Task"
      />
      <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add task</button>
    </div>
    </>
  );
}
