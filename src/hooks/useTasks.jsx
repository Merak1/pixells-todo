import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { pageSize, Paginate } from "../utils/Paginate";

export const TaskContext = createContext(null);

export const TaskContextProvider = (props) => {
  let nextId = 0;
  const [tasks, setTasks] = useState([]);
  const [createNewTaskValue, setCreateNewTaskValue] = useState("");
  const [editTaskValue, setEditTaskValue] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedTasks, setPaginatedTasks] = useState();
  const [totalPages, setTotalPages] = useState(1);

  const pages = Array.from({ length: totalPages }, (value, index) => index + 1);

  useEffect(() => {
    if (tasks.length > 0) {
      window.localStorage.setItem("TODOS_STATE", JSON.stringify(tasks));
    }
  }, [tasks]);
  useEffect(() => {
    console.log("tasks ", tasks);
  }, [tasks]);
  useEffect(() => {
    console.log("createNewTaskValue ", createNewTaskValue);
  }, [createNewTaskValue]);
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

  //   const handleClick = useCallback(
  //     (element) => {
  //       console.log("handle click => ", element);
  //       navigate(`/todo/${element}`);
  //     },
  //     [element]
  //   );

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

  //   const handleSubmit = useCallback(
  //     (e) => {
  //       e.preventDefault();
  //       console.log("createNewTaskValue pn handleSubmit", createNewTaskValue);
  //       if (createNewTaskValue !== "") {
  //         setTasks([...tasks, { id: nextId++, createNewTaskValue: createNewTaskValue }]);
  //       }

  //       if (!createNewTaskValue) return;
  //       setCreateNewTaskValue("");
  //     },
  //     [createNewTaskValue]
  //   );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (createNewTaskValue !== "") {
      console.log("createNewTaskValue pn handleSubmit", createNewTaskValue);

      setTasks([...tasks, { id: nextId++, value: createNewTaskValue }]);
    }

    if (!createNewTaskValue) return;
    setCreateNewTaskValue("");
  };
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    if (createNewTaskValue !== "") {
      console.log("createNewTaskValue pn handleSubmit", createNewTaskValue);

      setTasks([...tasks, { id: nextId++, value: createNewTaskValue }]);
    }

    if (!createNewTaskValue) return;
    setCreateNewTaskValue("");
  };

  //
  const getPages = useCallback(
    (tasks) => {
      if (tasks) {
        const pages = Math.ceil(tasks.length / pageSize);
        setTotalPages(pages);
      }
      return null;
    },
    [tasks]
  );

  const PaginateResults = (tasks) => {
    if (tasks) {
      const result = Paginate(tasks, currentPage, pageSize);
      setPaginatedTasks(result);
    }
  };

  const handlePageChange = useCallback(
    (page) => {
      console.log("page from hook", page);
      setCurrentPage(page);
    },
    [currentPage]
  );

  const value = {
    removeTask,
    handleSubmit,
    getPages,
    PaginateResults,
    handlePageChange,
    pages,
    tasks,
    createNewTaskValue,
    currentPage,
    paginatedTasks,
    totalPages,
    setCreateNewTaskValue,
  };

  return <TaskContext.Provider value={value} {...props} />;
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (context === null) {
    throw new Error("TaskContext must be used within a TaskContext");
  }

  return context;
};
