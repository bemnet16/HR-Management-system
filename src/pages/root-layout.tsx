import { Outlet } from "react-router-dom";

import { Navbar } from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import NotficationBar from "@/components/shared/notfication-bar";


const RootLayout = () => {
  return (
    <div className="h-full w-full">
      <div className="h-[90px] md:hidden fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="h-full hidden md:flex flex-col w-60 fixed inset-y-0 border-r z-50 rounded-r-2xl">
        <Sidebar />
      </div>

      <div className="flex w-full bg-gray-50/25 p-0 m-0">
        {/*  pt-[90px] */}
        <main className="w-full min-h-screen msm:w-3/4 md:pl-60 pt-[95px] md:pt-0"> 
          <Outlet />
        </main>

        <div className="msm:w-1/4 hidden items-center py-6 pr-1 msm:flex msm:flex-col">
          <NotficationBar />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
