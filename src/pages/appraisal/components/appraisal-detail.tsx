import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Compliment from "./compliment";
import PersonalReview from "./personal-review";
import ProjectReview from "./project-review";
import OverallReview from "./overall-review";
import PersonalInfo from "./personal-info";

const AppraisalDetail = () => {
  return (
    <div className="py-4 md:p-4 md:py-6 w-full">
      {/* <SearchHeader /> */}
      {/* <div className="w-full flex flex-col md:flex-row items-center md:justify-between md:items-center my-8">
        <div className="flex items-center  px-6">
          <h1 className="text-[#383E49]/70 text-xl font-normal px-1">
            Employee Appraisal
          </h1>
        </div>
      </div> */}

      <div className="p-2 mx-[2px] sm:p-4 rounded-lg border-gray-100 border-2 shadow-sm bg-white min-h-96">
       <PersonalInfo />


        <div className="w-full ">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className=" bg-white flex gap-x-4 justify-start my-4 overflow-x-auto overflow-y-hidden">
              <TabsTrigger
                value="description"
                className="px-6 rounded-full font-normal text-slate-500 border-2 border-stone-300 data-[state=active]:bg-[#F6F6F6] data-[state=active]:border-[#6750A4] data-[state=active]:text-[#6750A4]"
              >
                compliment
              </TabsTrigger>
              <TabsTrigger
                value="requirement"
                className="px-6 rounded-full font-normal text-slate-500 border-2 border-stone-300 data-[state=active]:bg-[#F6F6F6] data-[state=active]:border-[#6750A4] data-[state=active]:text-[#6750A4]"
              >
                Persoanl review
              </TabsTrigger>
              <TabsTrigger
                value="project-review"
                className="px-6 rounded-full font-normal text-slate-500 border-2 border-stone-300 data-[state=active]:bg-[#F6F6F6] data-[state=active]:border-[#6750A4] data-[state=active]:text-[#6750A4]"
              >
                Project Review
              </TabsTrigger>
              <TabsTrigger
                value="overall-review"
                className="px-6 rounded-full font-normal text-slate-500 border-2 border-stone-300 data-[state=active]:bg-[#F6F6F6] data-[state=active]:border-[#6750A4] data-[state=active]:text-[#6750A4]"
              >
                overall rate
              </TabsTrigger>
            </TabsList>

            <div className="w-[95%] px-8 h-[2px] mx-auto bg-slate-200/50 my-4" />

            <TabsContent value="description">
              <Compliment />
            </TabsContent>

            <TabsContent value="requirement">
              <PersonalReview />
            </TabsContent>

            <TabsContent value="project-review">
              <ProjectReview />
            </TabsContent>

            <TabsContent value="overall-review">
              <OverallReview />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AppraisalDetail;
