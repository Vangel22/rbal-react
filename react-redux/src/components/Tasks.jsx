import { useState } from "react";
import { useReducer } from "react";

let nextIndex = 3;
const initialTasks = [
  {
    id: 0,
    text: "Visit museum",
    done: true,
  },
  {
    id: 1,
    text: "Visit zoo",
    done: false,
  },
  {
    id: 2,
    text: "Visit bank",
    done: true,
  },
];

// state is the intialTasks
// action is what we send through the dipatch function and its going to be an object
// dispatch({ ...our data })
const tasksReducer = (state, action) => {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case "add": // adding a new task in the initialTasks array
      return [
        ...state, // all the previous tasks
        { id: action.id, text: action.text, done: action.done },
      ];
    case "toggle": // is going to replace the whole task with the new body
      return state.map((task) =>
        task.id === action.task.id ? action.task : task
      );
    case "update": // going to update only the text of the task
      return state.map((task) =>
        task.id === action.id ? { ...task, text: action.text } : task
      );
    case "delete":
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
};

export const Tasks = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const [newTaskText, setNewTaskText] = useState("");
  const [editTask, setEditTask] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();

    if (newTaskText.trim() === "") return;

    dispatch({ type: "add", id: nextIndex++, text: newTaskText, done: false });
    setNewTaskText("");
  };

  const handleToggleTask = (task) => {
    dispatch({ type: "toggle", task: { ...task, done: !task.done } });
  };

  const handleUpdateTask = (id) => {
    dispatch({ type: "update", id, text: editText });
    setEditText("");
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: "delete", id });
  };

  console.log("edit", editTask);

  return (
    <div>
      <h1>Tasks</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Enter name of task"
        />
        <button type="submit">Add new task</button>
      </form>

      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => handleToggleTask(task)}
          />

          {editTask === task.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleUpdateTask(task.id)}>Save</button>
              <button onClick={() => setEditTask(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>{task.text}</span>
              <button
                onClick={() => {
                  setEditTask(task.id);
                  setEditText(task.text);
                }}
              >
                Edit
              </button>
            </>
          )}
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
