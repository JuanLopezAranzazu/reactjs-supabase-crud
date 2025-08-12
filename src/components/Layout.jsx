import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
