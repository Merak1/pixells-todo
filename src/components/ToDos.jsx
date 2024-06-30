import { useEffect, useState } from "react";
import Button from "./inputs/button";
import Input from "./inputs/Input";
import { plugin } from "postcss";
import Task from "./task/Task";

const ToDos = () => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("value : ", value);
    if (value !== "") {
      setTasks([...tasks, value]);
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
            return <Task taskInfo={element} />;
          })}
      </div>
    </div>
  );
};

export default ToDos;
