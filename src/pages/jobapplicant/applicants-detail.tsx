import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SearchHeader from "@/components/shared/search-header";

import ContractualDetail from "./components/contractual-detail";
import SalaryInfo from "./components/salary-info";
import PersonalDocument from "./components/personal-document";
import PersonalInfo from "@/components/shared/personal-info";

const ApplicantsDetail = () => {


  return (
    <div className="py-4 md:p-4">
      <SearchHeader />
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between md:items-center my-8">
        <div className="flex items-center">
          <h1 className="text-[#383E49]/80 mob-L:text-xl font-normal px-1">
            Applicant for
          </h1>
          <span className="bg-[#ECE6F0] px-4 rounded-full py-1 mob-L:py-2 ml-3 leading-4 text-[#6750A4]">
            Developer
          </span>
        </div>
      </div>

      <div className="p-4 rounded-lg border-gray-100 border-2 shadow-sm bg-white min-h-96">
        <PersonalInfo />

        <div className="w-[95%] px-8 h-[2px] mx-auto bg-slate-200/50 my-2" />

        <div className="w-full">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className=" bg-white flex gap-x-4 justify-start my-4 overflow-x-auto overflow-y-hidden">
              <TabsTrigger
                value="description"
                className="px-6 rounded-full font-normal text-slate-500 border-2 border-stone-300 data-[state=active]:bg-[#F6F6F6] data-[state=active]:border-[#6750A4] data-[state=active]:text-[#6750A4]"
              >
                Contract Detail
              </TabsTrigger>
              <TabsTrigger
                value="requirement"
                className="px-6 rounded-full font-normal text-slate-500 border-2 border-stone-300 data-[state=active]:bg-[#F6F6F6] data-[state=active]:border-[#6750A4] data-[state=active]:text-[#6750A4]"
              >
                Salary info
              </TabsTrigger>
              <TabsTrigger
                value="personal-document"
                className="px-6 rounded-full font-normal text-slate-500 border-2 border-stone-300 data-[state=active]:bg-[#F6F6F6] data-[state=active]:border-[#6750A4] data-[state=active]:text-[#6750A4]"
              >
                Personal document
              </TabsTrigger>
           
            </TabsList>

            <TabsContent value="description">
              <ContractualDetail />
            </TabsContent>

            <TabsContent value="requirement">
              <SalaryInfo />
            </TabsContent>

            <TabsContent value="personal-document">
              <PersonalDocument />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsDetail;
