import { useCallback, useEffect, useState } from "react";
import Button from "./inputs/button";
import Input from "./inputs/Input";
import Task from "./task/Task";
import { useNavigate } from "react-router-dom";
import { pageSize, Paginate } from "../utils/Paginate";

let nextId = 0;
const ToDos = () => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const [entries, setEntries] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedEntries, setpaginatedEntries] = useState();

  const [totalPages, setTotalPages] = useState(1);

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

  useEffect(() => {
    if (tasks) {
      PaginateResults(tasks);
      getPages(tasks);
    }
  }, [tasks]);

  useEffect(() => {
    if (tasks) {
      PaginateResults(tasks);
    }
  }, [currentPage]);

  const handleClick = (element) => {
    console.log("handle click => ", element);
    navigate(`/todo/${element}`);
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

  const getPages = (entries) => {
    if (entries) {
      const pages = Math.ceil(entries.length / pageSize);
      setTotalPages(pages);
    }
    return null;
  };

  const PaginateResults = (entriesToDisplay) => {
    if (entriesToDisplay) {
      const result = Paginate(entriesToDisplay, currentPage, pageSize);
      setpaginatedEntries(result);
    }
  };
  const pages = Array.from({ length: totalPages }, (value, index) => index + 1);
  const handlePageChange = (page) => setCurrentPage(page);

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

      <div className=" flex flex-col m-auto w-1/2 min-h-[67vh] ">
        {paginatedEntries &&
          paginatedEntries.map((element) => {
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
      <div className="flex flex-row text-center w-1/10 justify-center">
        {pages.map((page) => {
          return (
            <div
              className={`cursor-pointer rounded-sm m-2 w-[30px] h-[30px] ${
                page === currentPage
                  ? "bg-sky-500 text-slate-50 "
                  : "bg-sky-900 text-slate-200"
              }`}
              onClick={() => handlePageChange(page)}
              key={page}
            >
              {page}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDos;
