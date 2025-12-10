import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/admin/AdminSidebar";

const Layout = () => {
  return (
    <div className="min-h-screen w-11/12 flex flex-col">
      {/* main flex container */}
      <div className="flex flex-1 pt-16 md:pt-0">
        <AdminSidebar />

        {/* main content */}
        <main className="flex-1 p-4 md:p-6">
          <div className="md:max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
export default Layout;
