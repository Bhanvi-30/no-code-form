import React, { useState } from "react";

function AdminView({ addForm }) {
  const [title, setTitle] = useState("");
  const [fields, setFields] = useState([]);
  const [fieldName, setFieldName] = useState("");
  const [fieldType, setFieldType] = useState("text");

  // Add new field
  const addField = () => {
    if (fieldName.trim() === "") return;
    setFields([...fields, { id: Date.now(), name: fieldName, type: fieldType }]);
    setFieldName("");
  };

  // Delete field
  const deleteField = (id) => {
    setFields(fields.filter((f) => f.id !== id));
  };

  // Edit field (prompt user for new values)
  const editField = (id) => {
    const fieldToEdit = fields.find((f) => f.id === id);
    if (!fieldToEdit) return;

    const newName = prompt("Enter new field name:", fieldToEdit.name);
    const newType = prompt("Enter new field type (text/number/date):", fieldToEdit.type);

    if (newName && newType) {
      setFields(
        fields.map((f) =>
          f.id === id ? { ...f, name: newName, type: newType } : f
        )
      );
    }
  };

  // Submit form
  const handleSubmit = () => {
    if (!title || fields.length === 0) {
      alert("Please enter form title and at least one field.");
      return;
    }

    const newForm = { title, fields };
    addForm(newForm);
    alert("✅ Form Created Successfully!");
    setTitle("");
    setFields([]);
  };

  return (
    <div className="p-6 bg-white rounded shadow max-w-lg">
      <h2 className="text-xl font-bold mb-4">Admin - Create Form</h2>

      <label className="block mb-2 font-medium">Form Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border px-3 py-2 rounded mb-4"
      />

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Field Name"
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
          className="flex-1 border px-3 py-2 rounded"
        />
        <select
          value={fieldType}
          onChange={(e) => setFieldType(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="date">Date</option>
        </select>
        <button
          onClick={addField}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      </div>

      {/* Field List with Edit/Delete */}
      <ul className="mb-4">
        {fields.map((f) => (
          <li key={f.id} className="flex justify-between items-center mb-2">
            <span>
              {f.name} ({f.type})
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => editField(f.id)}
                className="px-3 py-1 bg-yellow-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteField(f.id)}
                className="px-3 py-1 bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button
        onClick={handleSubmit}
        className="px-6 py-2 bg-green-600 text-white rounded"
      >
        Create Form
      </button>
    </div>
  );
}

export default AdminView;
