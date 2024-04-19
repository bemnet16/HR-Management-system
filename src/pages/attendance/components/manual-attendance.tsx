import SearchHeader from "@/components/shared/search-header";

import AttendanceCard from "./card-manualatt";
import { Link } from "react-router-dom";
import FilterBadge from "@/components/shared/filter-badge";

const ManualAttendance = () => {
  return (
    <div className="py-4 md:px-4">
      <SearchHeader />
      <div className="p-2">
        <div className="flex flex-col md:flex-row items-start md:justify-between md:items-center">
          <h1 className="text-[#383E49] text-base mob-L:text-xl font-semibold mb-5">
            Attendance
            <span className="text-[#6750A4]/80"> {">"} Manual Attendance </span>
          </h1>
        </div>
        <FilterBadge />
      </div>

      <div className="h-[2px] bg-slate-400/15 mb-6" />

      <div className=" bg-white rounded-md flex flex-col shadow-sm border-2 border-[#ECECEC] overflow-scroll relative custom-scrollbar">

        <div className="flex h-20 p-1 bg-white sticky top-0 z-10 w-fit">

          <div className="border-r-2 mr-2 flex justify-center items-center h-full py-6 min-w-56">
            <h1 className="text-lg text-orange-900/60 font-medium">Employee</h1>
          </div>

          <div className="flex flex-col items-center border-r-2 pr-2  min-w-44">
            <h1 className="text-orange-900/60 py-1">Morining</h1>

            <div className="w-full h-[1.5px] bg-gray-100 " />
            <div className="flex justify-around w-full h-full">
              <h5 className="pt-2 text-orange-900/60 font-medium">Chek in</h5>
              <div className="h-full w-[1.5px] bg-gray-100" />
              <h5 className="pt-2 text-orange-900/60 font-medium">check out</h5>
            </div>
          </div>

          <div className="flex flex-col items-center border-r-2 pr-2 min-w-44">
            <h1 className="text-orange-900/60 py-1">Afternoon</h1>

            <div className="w-full h-[1.5px] bg-gray-100 " />
            <div className="flex justify-around w-[90%] h-full">
              <h5 className="pt-2 text-orange-900/60 font-medium">Chek in</h5>
              <div className="h-full w-[1.5px] bg-gray-100" />
              <h5 className="pt-2 text-orange-900/60 font-medium">
                check out
              </h5>
            </div>
          </div>

          <div className="flex justify-center items-center min-w-44">
            <h1 className="text-lg text-orange-900/60 font-medium">
              Work hour
            </h1>
          </div>
        </div>

        <div className="w-full p-1 flex flex-col gap-1 h-96">
          {Array.from({ length: 15 }).map((_, idx) => (
            <AttendanceCard key={idx} />
          ))}
        </div>

      </div>
        <div className="flex justify-end px-4 py-6">
          <Link
            to="/attendance/monthly"
            className="bg-indigo-600/75 text-white px-4 py-2 rounded-full"
          >
            Attendance Sheet
          </Link>
        </div>
    </div>
  );
};

export default ManualAttendance;
