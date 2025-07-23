import React from 'react';

const modules = [
  'Links','Notes','To-Do List','Weekly Planner','Idea Board','Ask AI','Web Search','Email Writer'
];

export default function Sidebar() {
  return (
    <aside className="w-56 p-4 bg-black/10 border-r border-gray-700 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">sophieAi</h1>
      <div className="flex-grow">
        {modules.map(mod => (
          <button key={mod} className="w-full text-left py-2 px-3 rounded hover:bg-gray-800">
            {mod}
          </button>
        ))}
      </div>
    </aside>
  );
}
