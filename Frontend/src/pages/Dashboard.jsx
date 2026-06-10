import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import StatsCard from "../components/dashboard/StatsCard";
import TaskCard from "../components/task/TaskCard";
import TaskForm from "../components/task/TaskForm";

import "../styles/dashboard.css";

import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../services/taskService";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] =
    useState("");

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTaskHandler = async (
    taskData
  ) => {
    try {
      await createTask(taskData);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTaskHandler = async (
    taskId
  ) => {
    try {
      await deleteTask(taskId);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const completeTaskHandler =
    async (task) => {
      try {
        await updateTask(task._id, {
          completed: true,
        });

        fetchTasks();
      } catch (error) {
        console.log(error);
      }
    };

  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const pending =
    tasks.length - completed;

  return (
    <div className="dashboard-container">
      <Navbar />

      <h1 className="dashboard-title">
        🚀 Productivity Dashboard
      </h1>

      <div className="stats-container">
        <StatsCard
          title="Total Tasks"
          value={tasks.length}
        />

        <StatsCard
          title="Completed"
          value={completed}
        />

        <StatsCard
          title="Pending"
          value={pending}
        />
      </div>

      <div className="main-content">
        <div className="left-panel">
          <TaskForm
            onAddTask={
              addTaskHandler
            }
          />
        </div>

        <div className="right-panel">
          <h2 className="task-title">
            My Tasks
          </h2>

          <input
            type="text"
            placeholder="🔍 Search tasks..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="search-box"
          />

          {tasks.length === 0 ? (
            <p>No Tasks Found</p>
          ) : (
            tasks
              .filter((task) =>
                task.title
                  .toLowerCase()
                  .includes(
                    search.toLowerCase()
                  )
              )
              .map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onDelete={
                    deleteTaskHandler
                  }
                  onComplete={
                    completeTaskHandler
                  }
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;