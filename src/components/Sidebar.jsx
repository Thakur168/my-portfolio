import { NavLink } from "react-router-dom";
import {
  FaHouseUser, // Home
  FaLaptopCode, // Skills
  FaBriefcase, // Experience
  FaFolderOpen, // Projects
  FaEnvelopeOpenText, // Contact
  FaCode,
  FaUser,
  FaComments,
  FaHome,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-60 h-screen bg-[#f6f6fc] fixed top-0 left-0 p-6 shadow-lg flex flex-col">
      <h1 className="text-3xl font-cursive mb-12 text-center">Priya Thakur</h1>

      <div className="flex-grow flex flex-col justify-center">
        <nav className="flex flex-col gap-6">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-lg hover:text-cyan-500"
          >
            <FaHome /> Home
          </NavLink>
          <NavLink
            to="/skills"
            className="flex items-center gap-2 text-lg hover:text-cyan-500"
          >
            <FaCode /> Skills
          </NavLink>
          <NavLink
            to="/experience"
            className="flex items-center gap-2 text-lg hover:text-cyan-500"
          >
            <FaUser /> Experience
          </NavLink>
          <NavLink
            to="/projects"
            className="flex items-center gap-2 text-lg hover:text-cyan-500"
          >
            <FaFolderOpen /> Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="flex items-center gap-2 text-lg hover:text-cyan-500"
          >
            <FaComments /> Contact
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}
