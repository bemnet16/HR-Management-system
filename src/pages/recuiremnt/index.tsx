import { useState } from "react";

import PostedJobs from "./components/posted-jobs";
import CreateJob from "./components/create-job";
import JobDescription from "./components/job-description";

import SearchHeader from "@/components/shared/search-header";
import FilterBadge from "@/components/shared/filter-badge";


const RecuiremntPage = () => {

  const [steps, setCreateJob] = useState(0);

  return (
    <div className="py-4 md:px-4">
      <SearchHeader />
      <div className="p-2 md:p-4">
        <div className="flex flex-col md:flex-row items-start md:justify-between md:items-center mb-6">
          <h1 className="text-[#383E49] text-xl font-semibold">
            Recuiremnt
          </h1>
          {steps === 0 && (
            <FilterBadge />
          )}
        </div>

      

        {steps === 0 && <PostedJobs onClicked={setCreateJob} />}

        {steps === 1 && <CreateJob onClicked={setCreateJob} />}

        {steps === 2 && <JobDescription onClicked={setCreateJob} />}
      </div>
    </div>
  );
};

export default RecuiremntPage;
