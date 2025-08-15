import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

const Layout = () => {
  return (
    <div
      className="
      flex flex-col min-h-screen 
      bg-white dark:bg-gray-900 
      text-gray-900 dark:text-white"
    >
      <AppHeader />
      <main className="flex-1 container mx-auto p-4">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  );
};

export default Layout;
