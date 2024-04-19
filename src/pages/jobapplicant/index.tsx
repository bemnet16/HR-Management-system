import FilterBadge from "@/components/shared/filter-badge";
import SearchHeader from "@/components/shared/search-header";

import ApplicantList from "./components/applicant-list";
import ApplicantLevels from "./components/applicant-levels";

const JobApplicant = () => {
  return (
    <div className="py-4 md:p-4">
      <SearchHeader />
      <div className="w-full flex flex-col zl:flex-row items-center xl:justify-between xl:items-center my-8">
        <div className="flex items w-full  px-6">
          <h1 className="text-[#383E49]/80 text-base mob-L:text-xl font-normal px-1">
            Applicant for
          </h1>
          <span className="bg-[#ECE6F0] px-4 rounded-full py-1 ml-3 text-[#6750A4]">
            Developer
          </span>
        </div>
        <div className="w-full flex justify-end mt-4">
          <FilterBadge />
        </div>
      </div>

      <div className="rounded-lg border-gray-100 border-2 shadow-sm bg-white min-h-96">
        <ApplicantLevels />
        <div className="w-11/12 px-8 h-[2px] mx-auto bg-slate-200/50 my-3" />
        <ApplicantList />
      </div>
    </div>
  );
};

export default JobApplicant;
