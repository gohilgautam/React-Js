import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

// The Navbar component to provide a consistent header and theme selection.
function Navbar({ themeColor, onThemeChange }) {
  // A small utility component for the icon wrappers to reduce repetition.
  const IconWrapper = ({ color, isInteractive = true }) => {
    return (
      <div className={`p-2 rounded-full ${isInteractive ? 'transition-all duration-300 transform hover:scale-110 hover:shadow-lg' : ''} flex items-center justify-center`}>
        {color}
      </div>
    );
  };

  const themes = [
    { name: "Blue-Purple", class: "bg-gradient-to-r from-blue-500 to-purple-500" },
    { name: "Red-Orange", class: "bg-gradient-to-r from-red-500 to-yellow-500" },
    { name: "Green-Teal", class: "bg-gradient-to-r from-green-500 to-teal-500" },
    { name: "Pink-Purple", class: "bg-gradient-to-r from-pink-500 to-purple-500" },
    { name: "Cyan-Blue", class: "bg-gradient-to-r from-cyan-500 to-blue-500" },
    { name: "Indigo-Violet", class: "bg-gradient-to-r from-indigo-500 to-violet-500" },
    { name: "Orange-Yellow", class: "bg-gradient-to-r from-orange-500 to-yellow-500" },
    { name: "Teal-Green", class: "bg-gradient-to-r from-teal-500 to-green-500" },
    { name: "Purple-Pink", class: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { name: "Blue-Cyan", class: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { name: "Violet-Indigo", class: "bg-gradient-to-r from-violet-500 to-indigo-500" },
    { name: "Yellow-Orange", class: "bg-gradient-to-r from-yellow-500 to-orange-500" },
    { name: 'Ocean Breeze', class: 'bg-gradient-to-r from-cyan-500 to-blue-700' },
    { name: 'Sunset Glow', class: 'bg-gradient-to-r from-pink-500 to-orange-500' },
    { name: 'Forest Walk', class: 'bg-gradient-to-r from-green-500 to-teal-700' },
    { name: 'Lavender Dream', class: 'bg-gradient-to-r from-purple-500 to-pink-700' },
    { name: 'Golden Hour', class: 'bg-gradient-to-r from-yellow-500 to-red-500' },
    { name: 'Midnight City', class: 'bg-gradient-to-r from-gray-800 to-black' },
    { name: 'Rose Gold', class: 'bg-gradient-to-r from-pink-400 to-yellow-400' },
    { name: 'Minty Fresh', class: 'bg-gradient-to-r from-green-400 to-blue-400' },
    { name: 'Coral Reef', class: 'bg-gradient-to-r from-red-400 to-orange-400' },
  ];

  

  const [ThemePickerOpen, setThemePickerOpen] = useState(false);

  return (
    <nav className="bg-slate-900 shadow-xl fixed w-full z-50 border-b border-gray-700/50 transition-all duration-500">
      <div className="w-full flex items-center justify-between py-3 px-6 lg:px-10">
        {/* Logo / Brand Section */}
        <div className="flex items-center space-x-4 min-w-fit">
          <div className={`relative p-3 rounded-full shadow-md border-2 border-gray-700/50 ${themeColor} transition-all duration-300`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-sm">
              To Do App
            </h1>
            <p className="text-xs text-gray-400 hidden sm:block font-medium tracking-wide">
              Advanced Task Management System
            </p>
          </div>
        </div>

        {/* Navigation Links - Center */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#" className="group flex items-center space-x-3 text-white hover:bg-slate-800 px-5 py-3 rounded-xl transition-all duration-300 font-medium">
            <IconWrapper>
              <svg className={`w-5 h-5 ${themeColor} rounded-full p-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5v4m8-4v4" />
              </svg>
            </IconWrapper>
            <span className="text-sm">Dashboard</span>
          </a>

          <a href="#" className="group flex items-center space-x-3 text-white hover:bg-slate-800 px-5 py-3 rounded-xl transition-all duration-300 font-medium">
            <IconWrapper>
              <svg className={`w-5 h-5 ${themeColor} rounded-full p-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </IconWrapper>
            <span className="text-sm">Tasks</span>
          </a>

          <a href="#" className="group flex items-center space-x-3 text-white hover:bg-slate-800 px-5 py-3 rounded-xl transition-all duration-300 font-medium">
            <IconWrapper>
              <svg className={`w-5 h-5 ${themeColor} rounded-full p-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </IconWrapper>
            <span className="text-sm">Settings</span>
          </a>
        </div>

        {/* Right Section - Notifications, Profile, and Theme Picker */}
        <div className="flex items-center space-x-4">
          {/* Theme Picker Dropdown */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => setThemePickerOpen(!ThemePickerOpen)}
              className={`p-3 rounded-full text-white transition-all duration-300 ${themeColor}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a2 2 0 012-2h2a2 2 0 012 2v5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-5z" />
              </svg>
            </button>
            {ThemePickerOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {themes.map(theme => (
                    <button
                      key={theme.name}
                      onClick={() => {
                        onThemeChange(theme.class);
                        setThemePickerOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded-full ${theme.class}`}></div>
                        <span>{theme.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button className="hidden md:flex items-center justify-center p-3 text-white hover:bg-slate-800 rounded-full transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="relative p-3 text-white hover:bg-slate-800 rounded-full transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-3.89-3.89a2.28 2.28 0 000-3.22L15 7v10zM9.12 10.12L15 17H9.12a7.49 7.49 0 010-6.88z" />
            </svg>
            <span className={`absolute top-0 right-0 ${themeColor} border-2 border-slate-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold`}>
              3
            </span>
          </button>
          <div className="group flex items-center space-x-3 text-white hover:bg-slate-800 rounded-full pr-4 py-2 transition-all duration-300 cursor-pointer">
            <div className="relative">
              <div className={`w-9 h-9 ${themeColor} rounded-full flex items-center justify-center shadow-md border-2 border-slate-700`}>
                <span className="text-sm font-bold text-white">GG</span>
              </div>
            </div>
            <div className="hidden lg:block text-left">
              <p className="text-sm font-medium">Gohil Gautam</p>
              <p className="text-xs text-gray-400">Admin</p>

            </div>
            <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <button className="lg:hidden flex items-center justify-center w-10 h-10 text-white hover:bg-slate-800 rounded-full transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

// A Task component to display individual tasks.
const Task = ({ task, onToggle, onDelete, onEdit, themeColor }) => (
  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 flex items-center justify-between shadow-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
    <div className="flex items-center space-x-4 flex-grow">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="form-checkbox h-6 w-6 rounded-full text-blue-500 bg-gray-800 border-gray-600 focus:ring-blue-500/50 checked:bg-blue-500 transition-all duration-300"
      />
      <span className={`text-lg font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-200'}`}>
        {task.text}
      </span>
    </div>
    <div className="flex space-x-2">
      <button onClick={() => onEdit(task)} className={`p-3 rounded-full ${themeColor} text-white hover:opacity-80 transition-opacity duration-300`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </button>
      <button onClick={() => onDelete(task.id)} className="p-3 rounded-full bg-red-500 text-white hover:opacity-80 transition-opacity duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  </div>
);


// The TaskForm component to add and edit tasks.
function TaskForm({ addTask, editingTask, themeColor }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editingTask) {
      setText(editingTask.text);
    } else {
      setText("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTask(text);
    setText("");
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="relative mt-8 max-w-2xl mx-auto px-4">
      <div className={`absolute inset-0 bg-gradient-to-r ${themeColor} blur-xl opacity-20`}></div>
      <form onSubmit={handleSubmit} className="relative z-10">
        <div className="bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden">
          <div className="bg-gray-700/50 px-8 py-6 border-b border-gray-600">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className={`w-12 h-12 ${editingTask ? 'bg-orange-500' : themeColor} rounded-2xl flex items-center justify-center shadow-lg`}>
                  {editingTask ? (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {editingTask ? "Edit Task" : "Create New Task"}
                </h3>
                <p className="text-gray-400 text-sm font-medium">
                  {editingTask ? "Update your task details" : "Add a new task to your list"}
                </p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-r ${themeColor} rounded-2xl opacity-0 group-focus-within:opacity-50 transition-opacity duration-300 blur-sm`}></div>
              <div className="relative">
                <input
                  type="text"
                  value={text}
                  onChange={handleInputChange}
                  placeholder={editingTask ? "Update your task..." : "What needs to be done?"}
                  className="w-full p-6 pr-20 bg-gray-700/50 text-white border-2 border-gray-600 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all duration-300 shadow-xl placeholder-gray-400 text-lg font-medium group-focus-within:shadow-xl"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                <button
                  type="submit"
                  className={`absolute right-3 top-1/2 -translate-y-1/2 ${themeColor} text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl group`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      d="M12 4v16m8-8H4"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{text.length}/100 characters</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <kbd className="px-2 py-1 bg-gray-700 rounded-lg font-mono text-gray-300">Enter</kbd>
                <span>to save</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

// The main App component that holds all state and components.
export default function App() {
  const [tasks, setTasks] = useState(() => {
    // Check if there are tasks in local storage on initial load
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [editingTask, setEditingTask] = useState(null);
  const [themeColor, setThemeColor] = useState("bg-gradient-to-r from-blue-500 to-purple-500");

  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  // Use a useEffect hook to save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    if (editingTask) {
      setTasks(tasks.map((task) => (task.id === editingTask.id ? { ...task, text } : task)));
      setEditingTask(null);
    } else {
      const newTask = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEdit = (task) => {
    setEditingTask(task);
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans antialiased text-gray-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
      <Navbar themeColor={themeColor} onThemeChange={setThemeColor} />
      <main className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <TaskForm addTask={addTask} editingTask={editingTask} themeColor={themeColor} />

          {/* Pending Tasks Section */}
          {pendingTasks.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-center mb-6 text-white drop-shadow-md">Pending Tasks</h2>
              <div className="space-y-4">
                {pendingTasks.map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    onToggle={toggleComplete}
                    onDelete={deleteTask}
                    onEdit={startEdit}
                    themeColor={themeColor}
                  />
                ))}
              </div>
            </div>
          )}
          {pendingTasks.length === 0 && tasks.length > 0 && (
            <div className="mt-8 text-center text-gray-500">
              <p>No pending tasks! All tasks are completed. </p>
            </div>
          )}

          {/* Completed Tasks Section */}
          {completedTasks.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-400 drop-shadow-md">Completed Tasks</h2>
              <div className="space-y-4 opacity-70">
                {completedTasks.map((task) => (
                  <Task
                    key={task.id}
                    task={task}
                    onToggle={toggleComplete}
                    onDelete={deleteTask}
                    onEdit={startEdit}
                    themeColor={themeColor}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>

          
  );
}
