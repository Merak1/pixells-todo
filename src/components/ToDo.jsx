import { useNavigate, useParams } from "react-router-dom";
import Button from "./inputs/button";
import Input from "./inputs/Input";
import { useTasks } from "../hooks/useTasks";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ToDo = () => {
  const { id } = useParams();
  const { tasks, editTaskValue, setEditTaskValue, setTasks } = useTasks();
  const [isEdited, setIsEdited] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (editTaskValue !== undefined && editTaskValue !== id) {
      toast.success("Task Updated! ");
      navigate(`/todo/${editTaskValue}`);
      setIsEdited(false);
    }
  }, [isEdited]);

  const handleSubmitEdit = () => {
    setTasks(
      tasks.map((task) => {
        if (task.value === id) {
          setIsEdited(true);
          return { ...task, value: editTaskValue };
        } else {
          return tasks;
        }
      })
    );
  };

  return (
    <div className="mt-8 border-2 rounded-md w-1/2 m-auto text-xl">
      <p className="py-5">
        this is to do : <span className="ml-5 ">{id}</span>
      </p>

      <div className="pb-5 text-slate-800">
        <Input
          type={"text"}
          placeholder={"Edit this task..."}
          onChange={(e) => setEditTaskValue(e.target.value)}
        />

        <button
          className="p-3 rounded-md bg-slate-500 text-white   dark:bg-slate-600 dark:text-white"
          onClick={() => handleSubmitEdit(id)}
        >
          Edit this task
        </button>
      </div>
    </div>
  );
};

export default ToDo;
