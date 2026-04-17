import React from "react";
import '../Admin/Admin.css'
import AdminNavbar from "../Admin/Components/Navbar/Navbar";
import Sidebar from "../Admin/Components/SideBar/SideBar";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-css flex min-h-screen ">
      {/* Sidebar - Hidden on small screens */}
      <div className="w-64 hidden md:block ">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col w-full">
        {/* Sticky Navbar */}
        <div className="sticky !top-0 !z-10">
          <AdminNavbar />
        </div>

        {/* Scrollable content area below navbar */}
        <main className="!p-4 w-full !overflow-y-auto flex-1 text-black">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
