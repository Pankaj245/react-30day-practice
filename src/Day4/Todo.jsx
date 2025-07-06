import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Todo = () => {
  const [taskValue, setTaskValue] = useState("");
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const handleOnclick = () => {
    let id = Math.floor(Math.random() * 10000000);
    taskValue === ""
      ? alert("Please enter the Task")
      : setTaskList([...taskList, { name: taskValue, id: id }]);
    setTaskValue("");
  };
  const handleOnChange = (e) => {
    setTaskValue(e.target.value);
  };
  const handleOnDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  const handleOnEdit = (id) => {
    setTaskValue(taskList.filter((task) => task?.id === id)[0].name);
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h3>ToDo List</h3>
      <div className="input-container">
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Enter the Task"
          value={taskValue}
          onChange={handleOnChange}
        />
        <button onClick={handleOnclick}>Add Task</button>
      </div>
      {taskList?.length > 0 && (
        <div className="task-details">
          <h4>Task Details</h4>
          {taskList?.map((task) => (
            <div className="task-container" key={task?.id}>
              <div className="task">{task?.name}</div>
              <div className="actions">
                <div
                  className="delete-icon"
                  onClick={() => handleOnDelete(task?.id)}
                >
                  <DeleteIcon />
                </div>
                <div
                  className="edit-icon"
                  onClick={() => handleOnEdit(task?.id)}
                >
                  <EditIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Todo;
