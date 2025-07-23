import React from 'react';

export default function Panel({ id, title, children }) {
  return (
    <div id={`${id}-panel`} className="panel absolute min-w-[380px] max-w-lg bg-black/70 backdrop-blur-lg border border-gray-800 rounded-xl">
      <div className="panel-header flex justify-between items-center p-4 cursor-move border-b border-gray-800">
        <h2 className="panel-title text-lg font-medium text-white">{title}</h2>
        <div className="flex gap-2">
          <button>−</button>
          <button>✖</button>
        </div>
      </div>
      <div className="panel-body p-6 overflow-y-auto">{children}</div>
    </div>
  );
}
