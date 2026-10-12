import { Outlet } from "react-router-dom";
import Sidebar from "../Components/UI/Sidebar";
import TopNavbar from "../Components/Navigation/Navbar";

function Layout() {
  return (
    <div className="min-h-screen bg-quaternary/40 font-plex flex">
      {/* Sidebar (Ensure your Sidebar component uses fixed or sticky positioning with h-screen) */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        <TopNavbar />
        
        <main className="flex-1 w-full px-6 py-6 sm:px-8 lg:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;