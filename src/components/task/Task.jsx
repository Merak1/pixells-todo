const Task = ({ taskInfo, removeTask, handleClick }) => {
  const { _id, value } = taskInfo;

  return (
    <div className="  flex border-2 rounded-md  border-slate-600 dark:border-slate-200">
      <div
        className={`p-4 cursor-pointer hover:white w-full hover:bg-slate-500`}
        onClick={() => handleClick(value)}
      >
        {value}
      </div>
      <div
        className={`p-4   cursor-pointer w-[50px] hover:bg-red-400`}
        onClick={() => removeTask(value)}
      >
        ❌
      </div>
    </div>
  );
};

export default Task;
