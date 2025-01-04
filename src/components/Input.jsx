export default function Input({title,textarea,...props}){
    const classes = "placeholder:italic placeholder:text-slate-400 w-full p-1 border-b-2 rounded-sm border-stone-50 bg-stone-200 focus:outline-none focus:border-stone-600"
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-xl font-bold uppercase text-stone-500">
                {title}
            </label>
            {textarea ? (
                <textarea className={classes} {...props}></textarea>
            ) : (
                <input className={classes} {...props}/>
            )}
        </p>
    )
}