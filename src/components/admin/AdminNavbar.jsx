import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-900 border-b border-gray-700 flex items-center px-6 z-50">
      <Link to="/" className="text-white font-heading text-3xl tracking-wide">
        CineMatrix
      </Link>
    </nav>
  );
};
export default AdminNavbar;
