import Input from "./Input";

export default function NewProject(){
    return (
        <div className="w-[32rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-8">
                <li>
                    <button className="text-xl hover:text-stone-700">Cancel</button>
                </li>
                <li>
                    <button className="text-xl px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
                </li>
            </menu>
        <Input title="Title"/>
        <Input title="Description" textarea/>
        <Input title="Due date"/>
        </div>
    )
}