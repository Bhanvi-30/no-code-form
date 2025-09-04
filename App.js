import React, { useState } from "react";
import AdminView from "./Components/AdminView";
import UserView from "./Components/UserView";

import "./App.css"; 

function App() {
  const [view, setView] = useState("admin"); // default admin view
  const [forms, setForms] = useState(
    JSON.parse(localStorage.getItem("forms")) || []
  );

  const addForm = (form) => {
    const updatedForms = [...forms, form];
    setForms(updatedForms);
    localStorage.setItem("forms", JSON.stringify(updatedForms));
  };

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setView("admin")}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Admin View
        </button>
        <button
          onClick={() => setView("user")}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          User View
        </button>
      </div>

      {view === "admin" ? (
        <AdminView addForm={addForm} />
      ) : (
        <UserView forms={forms} />
      )}
    </div>
  );
}

export default App;
