import React from 'react';
import Sidebar from './components/Sidebar';
import Panel from './components/Panel';

export default function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div id="workspace-canvas" className="flex-grow relative overflow-hidden"></div>
    </div>
  );
}
