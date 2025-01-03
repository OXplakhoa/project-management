import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    let enteredDuedate = dueDate.current.value;
    if (enteredDuedate.trim() === "") {
      enteredDuedate = new Date().toISOString().split("T")[0];
    }
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDuedate,
    });
  };
  return (
    <>
      <Modal ref={modal} buttonText="Close">
        <h2 className="text-xl font-bold text-stone-600 my-3">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops... Looke like you forgot to enter a value.</p>
        <p className="text-stone-600 mb-4">Please make sure you provided a valid value.</p>
      </Modal>
      <div className="w-[32rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-8">
          <li>
            <button onClick={onCancel} className="text-xl hover:text-stone-700">Cancel</button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="text-xl px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} title="Title" />
          <Input ref={description} title="Description" textarea />
          <Input type="date" ref={dueDate} title="Due date" />
        </div>
      </div>
    </>
  );
}
