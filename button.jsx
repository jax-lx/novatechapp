export function Button({ children, className = "", ...props }) {
  return (
    <button className={`px-4 py-2 rounded font-semibold ${className}`} {...props}>
      {children}
    </button>
  );
}
