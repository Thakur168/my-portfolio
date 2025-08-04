import { Link, NavLink } from "react-router-dom";
import {
  FaFolderOpen,
  FaCode,
  FaUser,
  FaComments,
  FaHome,
  FaTimes,
} from "react-icons/fa";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 bottom-0 left-0 z-50 w-60 bg-[#f6f6fc] shadow-lg p-6 flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:z-auto
        `}
      >
        {/* Close button for mobile */}
        <div className="flex justify-between items-center mb-8 md:hidden">
          <h1 className="text-2xl font-bold text-purple-700">Priya</h1>
          <button onClick={onClose}>
            <FaTimes className="text-xl text-purple-600" />
          </button>
        </div>

        {/* Title (desktop) */}
        <Link to="/">
          <h1 className="hidden md:block text-3xl font-cursive mb-12 text-center text-purple-700 cursor-pointer">
            Priya Thakur
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col gap-6 text-lg">
          <NavLink
            to="/"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-2 transition ${
                isActive
                  ? "text-purple-600 font-bold"
                  : "text-gray-700 hover:text-purple-600"
              }`
            }
          >
            <FaHome /> Home
          </NavLink>

          <NavLink
            to="/skills"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-2 transition ${
                isActive
                  ? "text-purple-600 font-bold"
                  : "text-gray-700 hover:text-purple-600"
              }`
            }
          >
            <FaCode /> Skills
          </NavLink>

          <NavLink
            to="/experience"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-2 transition ${
                isActive
                  ? "text-purple-600 font-bold"
                  : "text-gray-700 hover:text-purple-600"
              }`
            }
          >
            <FaUser /> Experience
          </NavLink>

          <NavLink
            to="/projects"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-2 transition ${
                isActive
                  ? "text-purple-600 font-bold"
                  : "text-gray-700 hover:text-purple-600"
              }`
            }
          >
            <FaFolderOpen /> Projects
          </NavLink>

          <NavLink
            to="/contact"
            onClick={onClose}
            className={({ isActive }) =>
              `flex items-center gap-2 transition ${
                isActive
                  ? "text-purple-600 font-bold"
                  : "text-gray-700 hover:text-purple-600"
              }`
            }
          >
            <FaComments /> Contact
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
