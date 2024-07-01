import { useCallback, useEffect, useState } from "react";
import Button from "./inputs/button";
import Input from "./inputs/Input";
import Task from "./task/Task";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";

let nextId = 0;
const ToDos = () => {
  const {
    removeTask,
    handleSubmit,
    getPages,
    PaginateResults,
    handlePageChange,
    pages,
    tasks,
    createNewTaskValue: value,
    currentPage,
    paginatedTasks,
    totalPages,
    setCreateNewTaskValue,
  } = useTasks();
  const navigate = useNavigate();

  const handleClick = (element) => {
    console.log("handle click => ", element);
    navigate(`/todo/${element}`);
  };

  useEffect(() => {
    if (tasks) {
      PaginateResults(tasks);
      getPages(tasks);
    }
  }, [tasks]);

  useEffect(() => {
    if (tasks) {
      console.log("task  becouse currentPage is changing");
      console.log("currentPage ", currentPage);
      PaginateResults(tasks);
    }
  }, [currentPage]);

  //   const handleEditSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("createNewTaskValue : ", createNewTaskValue);
  //     if (createNewTaskValue !== "") {
  //       setTasks([
  //         ...tasks,
  //         { id: nextId++, createNewTaskValue: createNewTaskValue },
  //       ]);
  //     }

  //     if (!createNewTaskValue) return;
  //     setValue("");
  //   };

  return (
    <div>
      <p>Add todo </p>
      <div className="dark:text-black p-3">
        <form onSubmit={handleSubmit}>
          <Input
            type={"text"}
            value={value}
            placeholder={"Add a new tasks"}
            onChange={(e) => setCreateNewTaskValue(e.target.value)}
          />
          <Button type={"submit"} text={"Create tasks!"} />
        </form>
      </div>

      <div className=" flex flex-col m-auto w-1/2 min-h-[67vh] ">
        {paginatedTasks &&
          paginatedTasks.map((element) => {
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
