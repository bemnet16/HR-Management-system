import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ContractInfo from "./contract";
import Salaryinfo from "./salaryinfo";
import PersonalInfo from "./personal-info";

const PayrollDetail = () => {
  return (
    <div className="py-4 md:p-4">
      {/* <SearchHeader /> */}
      {/* <div className="w-full flex flex-col md:flex-row items-center md:justify-between md:items-center mb-4">
        <div className="flex items-center  px-6">
          <h1 className="text-[#383E49]/60 text-xl font-normal px-1">
            Payroll
          </h1>
        </div>
      </div> */}

      <div className="p-4 rounded-lg border-gray-100 border-2 shadow-sm bg-white min-h-96">
        <PersonalInfo />

        <div className="w-[95%] px-8 h-[2px] mx-auto bg-slate-200/50 my-2" />

        <div className="w-full">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className=" bg-white flex gap-x-4 justify-start my-4">
              <TabsTrigger
                value="description"
                className="px-6 rounded-full font-normal text-slate-500 border-2 border-stone-300 data-[state=active]:bg-[#F6F6F6] data-[state=active]:border-[#6750A4] data-[state=active]:text-[#6750A4]"
              >
                Contract
              </TabsTrigger>
              <TabsTrigger
                value="requirement"
                className="px-6 rounded-full font-normal text-slate-500 border-2 border-stone-300 data-[state=active]:bg-[#F6F6F6] data-[state=active]:border-[#6750A4] data-[state=active]:text-[#6750A4]"
              >
                Salary Info.
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description">
              <ContractInfo />
            </TabsContent>

            <TabsContent value="requirement">
              <Salaryinfo />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PayrollDetail;
