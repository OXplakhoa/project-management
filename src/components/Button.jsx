export default function Button({ children, ...props }) {
  return (
    <button
      className="text-sm bg-stone-700 text-stone-400 p-2 hover:bg-stone-600 hover:text-stone-100 rounded-r-lg"
      {...props}
    >
      {children}
    </button>
  );
}
