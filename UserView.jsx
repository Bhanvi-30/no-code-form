import React from "react";

function UserView({ forms }) {
  if (forms.length === 0) {
    return <p className="text-gray-600">No forms created yet.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User - View Forms</h2>
      {forms.map((form, idx) => (
        <div key={idx} className="p-4 mb-4 bg-white rounded shadow">
          <h3 className="text-lg font-semibold mb-2">{form.title}</h3>
          {form.fields.map((field, i) => (
            <div key={i} className="mb-2">
              <label className="block font-medium mb-1">{field.name}</label>
              <input
                type={field.type}
                className="w-full border px-3 py-2 rounded"
                disabled
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default UserView;
