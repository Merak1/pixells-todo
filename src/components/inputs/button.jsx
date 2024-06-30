const Button = ({ text, type }) => {
  return (
    <button
      className="p-3 rounded-md bg-slate-500 text-white   dark:bg-slate-600 dark:text-white"
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
