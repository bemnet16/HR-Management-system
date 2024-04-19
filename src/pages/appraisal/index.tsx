import SearchHeader from "@/components/shared/search-header";
import { Button } from "@/components/ui/button";

import { ChevronLeft, ChevronRight } from "lucide-react";
import AppraisalCard from "./components/appraisal-card";
import FilterBadge from "@/components/shared/filter-badge";

const AppraisalPage = () => {
  return (
    <div className="py-4 md:px-4">
      <SearchHeader />
      <div className="p-2">
        <div className="flex flex-col md:flex-row items-start md:justify-between md:items-center mb-2">
          <h1 className="text-[#383E49]/80 text-xl font-semibold">Appraisal</h1>
          <FilterBadge />
        </div>
      </div>

      <div className="flex justify-between py-4 ">
        <h1 className="text-[#6750A4] text-xl pl-2">Employee List</h1>

        <div className="flex gap-2 items-center">
          <Button
            variant={"ghost"}
            className="rounded-full w-8 h-8 p-0 bg-gray-400/40"
          >
            <ChevronLeft className="w-6 h-6 text-slate-500" />
          </Button>
          <span>1/12</span>
          <Button
            variant={"ghost"}
            className=" rounded-full w-8 h-8 p-0 bg-gray-400/40"
          >
            <ChevronRight className="w-6 h-6 text-slate-500 " />
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-md flex flex-col shadow-sm border-2 border-[#ECECEC] overflow-scroll custom-scrollbar relative ">
        <div className="flex h-full w-fit sticky top-0 z-10 bg-white">
          <div className="border-r-2 mr-2 flex justify-center items-center h-full py-6 min-w-56">
            <h1 className="text-lg text-orange-900/60 font-medium">Employee</h1>
          </div>
          <div className="border-r-2 mr-2 flex justify-center items-center h-full py-6 min-w-36">
            <h1 className="text-lg text-orange-900/60 font-medium">
              Employee ID
            </h1>
          </div>
          <div className="border-r-2 mr-2 flex justify-center items-center h-full py-6 min-w-36">
            <h1 className="text-lg text-orange-900/60 font-medium">Position</h1>
          </div>
          <div className=" mr-2 flex justify-center items-center h-full py-6 min-w-36">
            <h1 className="text-lg text-orange-900/60 font-medium">Status</h1>
          </div>
        </div>

        <div className="p-1 flex flex-col gap-1 h-96">
          {Array.from({ length: 15 }).map((_, idx) => (
            <AppraisalCard key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppraisalPage;
