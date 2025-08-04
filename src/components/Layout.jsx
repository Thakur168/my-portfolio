import Sidebar from './Sidebar';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function Layout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Content */}
      <div className="flex-1">
        {/* Mobile Nav */}
        <div className="md:hidden p-4 bg-white shadow-md flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-purple-700 text-xl"
          >
            <FaBars />
          </button>
          <h1 className="font-bold text-lg text-purple-700">Priya Thakur</h1>
        </div>

        <main className="p-4 md:p-10 bg-[#f1f1f7]">{children}</main>
      </div>
    </div>
  );
}
