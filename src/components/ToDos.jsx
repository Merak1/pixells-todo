import { useCallback, useEffect, useState } from "react";
import Button from "./inputs/button";
import Input from "./inputs/Input";
import Task from "./task/Task";
import { useNavigate } from "react-router-dom";

let nextId = 0;
const ToDos = () => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (tasks.length > 0) {
      window.localStorage.setItem("TODOS_STATE", JSON.stringify(tasks));
    }
  }, [tasks]);
  useEffect(() => {
    console.log("tasks ", tasks);
  }, [tasks]);
  useEffect(() => {
    const data = window.localStorage.getItem("TODOS_STATE");
    if (data.length !== 0) {
      setTasks(JSON.parse(data));
    }
  }, []);

  const handleClick = (element) => {
    console.log("handle click => ", element);
    navigate(`/${element}`);
  };
  const removeTask = useCallback((taskName) => {
    setTasks((prev) => {
      if (prev) {
        const filteredTasks = prev.filter(
          (element) => element.value !== taskName
        );
        return filteredTasks;
      }
      return prev;
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("value : ", value);
    if (value !== "") {
      setTasks([...tasks, { id: nextId++, value: value }]);
    }

    if (!value) return;
    setValue("");
  };
  return (
    <div>
      <p>Add todo </p>
      <div className="dark:text-black p-3">
        <form onSubmit={handleSubmit}>
          <Input
            type={"text"}
            value={value}
            placeholder={"Add a new tasks"}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button type={"submit"} text={"Create tasks!"} />
        </form>
      </div>

      <div className=" flex flex-col m-auto w-1/2">
        {tasks &&
          tasks.map((element) => {
            return (
              <div key={element.id + element.value}>
                <Task
                  handleClick={handleClick}
                  taskInfo={element}
                  removeTask={removeTask}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ToDos;
