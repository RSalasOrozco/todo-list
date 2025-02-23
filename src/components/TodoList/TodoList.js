"use client"; // Necesario para usar hooks de React

import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Iconos de React Icons

export default function TodoList() {
  // Estado para almacenar la lista de tareas
  const [tasks, setTasks] = useState([]);
  // Estado para almacenar la nueva tarea (input)
  const [newTask, setNewTask] = useState("");
  // Estado para almacenar la fecha de la tarea
  const [newDate, setNewDate] = useState("");
  // Estado para editar una tarea
  const [editIndex, setEditIndex] = useState(null); // Índice de la tarea en edición
  const [editTask, setEditTask] = useState(""); // Texto de la tarea en edición
  const [editDate, setEditDate] = useState(""); // Fecha de la tarea en edición

  // Función para agregar una nueva tarea
  const addTask = () => {
    if (newTask.trim() !== "" && newDate !== "") {
      setTasks([...tasks, { task: newTask, date: newDate }]); // Agrega la nueva tarea con fecha
      setNewTask(""); // Limpia el campo de entrada
      setNewDate(""); // Limpia el campo de fecha
    }
  };

  // Función para eliminar una tarea
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Filtra la tarea eliminada
    setTasks(updatedTasks); // Actualiza el estado
  };

  // Función para editar una tarea
  const startEdit = (index) => {
    setEditIndex(index); // Establece el índice de la tarea en edición
    setEditTask(tasks[index].task); // Establece el texto de la tarea en edición
    setEditDate(tasks[index].date); // Establece la fecha de la tarea en edición
  };

  // Función para guardar los cambios de la edición
  const saveEdit = () => {
    if (editTask.trim() !== "" && editDate !== "") {
      const updatedTasks = tasks.map((task, i) =>
        i === editIndex ? { task: editTask, date: editDate } : task
      ); // Actualiza la tarea editada
      setTasks(updatedTasks); // Actualiza el estado
      setEditIndex(null); // Termina la edición
      setEditTask(""); // Limpia el campo de edición
      setEditDate(""); // Limpia el campo de fecha de edición
    }
  };

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 "
      style={{ maxWidth: "600px", margin: "100px auto" }}
    >
      {/* Título */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">To-Do List</h2>

      {/* Input y botón para agregar tareas */}
      <div className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Agregar
        </button>
      </div>

      {/* Lista de tareas */}
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm"
          >
            {/* Tarea y fecha */}
            <div className="flex-1">
              <span className="text-gray-800">{task.task}</span>
              <span className="block text-sm text-gray-500">{task.date}</span>
            </div>

            {/* Botones de editar y eliminar */}
            <div className="flex gap-2">
              {/* Botón de editar */}
              <button
                onClick={() => startEdit(index)}
                className="text-blue-500 hover:text-blue-700 focus:outline-none"
              >
                <FaEdit />
              </button>

              {/* Botón de eliminar */}
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Formulario de edición (si hay una tarea en edición) */}
      {editIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Editar tarea</h3>
            <input
              type="text"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
              placeholder="Editar tarea"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={editDate}
              onChange={(e) => setEditDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={saveEdit}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Guardar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
