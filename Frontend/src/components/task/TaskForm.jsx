import { useState } from "react";
import "../../styles/task.css";

function TaskForm({ onAddTask }) {
  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [priority, setPriority] =
    useState("Medium");

  const [category, setCategory] =
    useState("Personal");

  const [dueDate, setDueDate] =
    useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    onAddTask({
      title,
      description,
      priority,
      category,
      dueDate,
    });

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setCategory("Personal");
    setDueDate("");
  };

  return (
    <form
      className="task-form"
      onSubmit={submitHandler}
    >
      <h3>➕ Add Task</h3>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <select
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
      >
        <option value="Low">
          Low
        </option>

        <option value="Medium">
          Medium
        </option>

        <option value="High">
          High
        </option>
      </select>

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option value="Study">
          Study
        </option>

        <option value="Placement">
          Placement
        </option>

        <option value="Project">
          Project
        </option>

        <option value="Personal">
          Personal
        </option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) =>
          setDueDate(e.target.value)
        }
      />

      <button type="submit">
        + Add Task
      </button>
    </form>
  );
}

export default TaskForm;