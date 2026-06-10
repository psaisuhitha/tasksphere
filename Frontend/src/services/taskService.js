import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const getConfig = () => {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  return {
    headers: {
      Authorization: `Bearer ${userInfo.token}`,
    },
  };
};

export const getTasks = async () => {
  const response = await axios.get(
    `${API_URL}/tasks`,
    getConfig()
  );

  return response.data;
};

export const createTask = async (
  taskData
) => {
  const response = await axios.post(
    `${API_URL}/tasks`,
    taskData,
    getConfig()
  );

  return response.data;
};
export const deleteTask = async (
  taskId
) => {
  const response = await axios.delete(
    `${API_URL}/tasks/${taskId}`,
    getConfig()
  );

  return response.data;
};
export const updateTask = async (
  taskId,
  taskData
) => {
  const response = await axios.put(
    `${API_URL}/tasks/${taskId}`,
    taskData,
    getConfig()
  );

  return response.data;
};