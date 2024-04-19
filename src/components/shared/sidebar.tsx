import SidebarRoutes from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full  shadow-slate-500 flex flex-col items-start overflow-y-auto bg-white rounded-r-2xl">
      <div className="p-4 py-2">
        <img height={150} width={150} alt="logo svg" src="/assets/logo-1.svg" />
      </div>
      <div className="flex flex-col w-full h-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
