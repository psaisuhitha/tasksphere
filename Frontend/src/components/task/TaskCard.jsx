import "../../styles/task.css";

function TaskCard({
  task,
  onDelete,
  onComplete,
}) {
  const priorityColor = {
    High: "#ef4444",
    Medium: "#f59e0b",
    Low: "#22c55e",
  };

  const categoryColor = {
    Study: "#3b82f6",
    Placement: "#f97316",
    Project: "#8b5cf6",
    Personal: "#22c55e",
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <div className="badge-container">
        <span
          className="badge"
          style={{
            background:
              priorityColor[
                task.priority
              ],
          }}
        >
          {task.priority}
        </span>

        <span
          className="badge"
          style={{
            background:
              categoryColor[
                task.category
              ],
          }}
        >
          {task.category}
        </span>
      </div>

      {task.dueDate && (
        <p className="due-date">
          📅 Due:
          {" "}
          {new Date(
            task.dueDate
          ).toLocaleDateString()}
        </p>
      )}

      <p className="status">
        {task.completed
          ? "✅ Completed"
          : "⏳ Pending"}
      </p>

      {!task.completed && (
        <button
          className="task-btn complete-btn"
          onClick={() =>
            onComplete(task)
          }
        >
          Complete
        </button>
      )}

      <button
        className="task-btn delete-btn"
        onClick={() =>
          onDelete(task._id)
        }
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;