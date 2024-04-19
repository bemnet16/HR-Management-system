import { Button } from "@/components/ui/button";

const OverallReview = () => {
  return (
    <div className="flex flex-col gap-y-7 px-6">
      <div className="flex justify-between py-2 px-4 max-w-96 bg-gray-200/50 border-2 rounded-lg">
        <h1 className="text-slate-700">Personal Review</h1>
        <h5 className="font-medium">60%</h5>
      </div>
      <div className="flex justify-between py-2 px-4 max-w-96 bg-gray-200/50 border-2 rounded-lg">
        <h1 className="text-slate-700">Project Review</h1>
        <h5 className="font-medium">60%</h5>
      </div>
      <div className="flex justify-between py-2 px-4 max-w-96 bg-gray-200/50 border-2 rounded-lg">
        <h1 className="text-slate-700">Total Apprisal</h1>
        <h5 className="font-medium">60%</h5>
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
          Save
        </Button>
      </div>
    </div>
  );
};

export default OverallReview;
