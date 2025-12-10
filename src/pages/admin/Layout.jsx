import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top navbar */}
      {/* <AdminNavbar /> */}

      <div className="flex flex-1">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 md:ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default Layout;
