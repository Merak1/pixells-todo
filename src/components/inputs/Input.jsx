const Input = ({ type, value, placeholder, onChange }) => {
  return (
    <input
      type={type}
      className="border-2 rounded-md p-3"
      value={value}
      placeholder={placeholder ? placeholder : ""}
      onChange={onChange}
    />
  );
};

export default Input;
