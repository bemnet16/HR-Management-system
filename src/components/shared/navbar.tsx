import MobileSidebar from "./mobile-sidebar";
import NavbarRoutes from "./navbar-routes";

export const Navbar = () => {
  return (
    <div className="p-3 border-b flex items-center justify-between w-full h-full bg-white shadow-sm">
      <div>
        <MobileSidebar />
      </div>
      <div>
        <NavbarRoutes />
      </div>
    </div>
  );
};
