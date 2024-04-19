import { Button } from "@/components/ui/button";

const Salaryinfo = () => {
  return (
    <div className="">

      <div className="flex justify-between border-[1px] mob-L:border-2 p-2 mob-L:p-4 rounded-lg border-black/30 items-center text-sm mob-L:text-lg ">
        <h1 className="text-slate-600 font-semibold ">Basic Salay</h1>
        <h4 className="font-bold">Monthly</h4>
        <h5 className="text-center text-slate-700 font-normal italic">
          10000 Birr
        </h5>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-2 py-5">

        <div className="flex flex-col border-[1px] mob-L:border-2 border-black/30 p-2 rounded-lg">

          <h1 className="text-lg text-slate-700 font-semibold">Additions</h1>

          <div className="w-full flex justify-between py-1">
            <h5 className="text-slate-700 font-normal text-sm">Tax (2%)</h5>
            <h5 className="bg-gray-200/10 rounded-md  text-slate-700 text-[14px] font-medium">
              250.00 Birr
            </h5>
          </div>

          <div className="w-full flex justify-between py-1">
            <h5 className="text-slate-700 font-normal text-sm">Tax (2%)</h5>
            <h5 className="bg-gray-200/10 rounded-md  text-slate-700 text-[14px] font-medium">
              250.00 Birr
            </h5>
          </div>

          <div className="w-full flex justify-between py-1">
            <h5 className="text-slate-700 font-normal text-sm">Tax (2%)</h5>
            <h5 className="bg-gray-200/10 rounded-md  text-slate-700 text-[14px] font-medium">
              250.00 Birr
            </h5>
          </div>
          <div className="flex justify-end gap-5 pt-6 items-center">
            <h5 className="text-slate-700 font-normal text-lg">Total sum </h5>
            <h5 className="bg-gray-200/10 rounded-md px-4 font-medium border-2 text-slate-700">
              860.00 Birr
            </h5>
          </div>
        </div>

        <div className="flex flex-col border-[1px] mob-L:border-2 border-black/30 p-2 rounded-lg">
          <h1 className="text-lg text-slate-700 font-semibold pb-2">Deductions</h1>
          <div className="w-full flex justify-between py-1">
            <h5 className="text-slate-700 font-normal text-sm">Tax (2%)</h5>
            <h5 className="bg-gray-200/10 rounded-md  text-slate-700 text-[14px] font-medium">
              300.00 Birr
            </h5>
          </div>
        
            <div className="w-full flex justify-between py-1">
            <h5 className="text-slate-700 font-normal text-sm">Health Insurance (2.5%) </h5>
            <h5 className="bg-gray-200/10 rounded-md  text-slate-700 text-[14px] font-medium">
              154.00 Birr
            </h5>
          </div>
          <div className="w-full flex justify-between py-1">
            <h5 className="text-slate-700 font-normal text-sm">pension </h5>
            <h5 className="bg-gray-200/10 rounded-md  text-slate-700 text-[14px] font-medium">
              154.00 Birr
            </h5>
          </div>

          <div className="flex justify-end gap-5 pt-6 items-center">
            <h5 className="text-slate-700 font-normal text-lg">Total sum </h5>
            <h5 className="bg-gray-200/10 rounded-md px-4 font-medium border-2 text-slate-700">
              860.00 Birr
            </h5>
          </div>
        </div>
      </div>


      <div className="flex justify-between border-[1px] mob-L:border-2 p-2 mob-L:p-4 rounded-lg border-black/30 items-center text-sm mob-L:text-lg ">
        <h1 className="text-slate-600 font-semibold">Calculated (Net) Salay</h1>
       
        <h5 className="text-center text-slate-700 font-normal italic">
          10000 Birr
        </h5>
      </div>
      <div className="w-full flex justify-end gap-x-4 items-center  mt-8">
        <Button
          variant="ghost"
          className="text-[#6750A4] border-2 border-[#6750A4] rounded-full h-8"
        >
          Discard
        </Button>
        <Button
          type="submit"
          variant="ghost"
          className="bg-[#6750A4] text-white hover:text-white rounded-full h-8 font-normal px-6 hover:bg-[#6758AF]"
        >
          Approved
        </Button>
      </div>
    </div>
  );
};

export default Salaryinfo;
