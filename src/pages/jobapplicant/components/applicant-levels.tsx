
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// import { Minus, Plus } from "lucide-react";

const ApplicantLevels = () => {
  return (
    <RadioGroup
          className="w-full flex flex-col justify-between py-3  "
          onValueChange={(e) => console.log(e)}
        >
          <div className="grid grid-cols-2 tablet:grid-cols-4 sm:grid-cols-4  px-4">
            {/* <div className="flex flex-1 flex-col sm:flex-row"> */}
              <div className="flex flex-col w-full items-center justify-center min-h-24 gap-y-2 border-r-2 border-slate-300">
                <RadioGroupItem
                  className="text-[#6750A4] border-2 border-[#6041b6]"
                  value="one"
                  id="r1"
                />
                <Label className="text-slate-600 text-xs text-center pr-1" htmlFor="r1">
                  Initial qualfication
                </Label>
                {/* <div className="w-full flex my-3 justify-between px-4">
                  <Minus className="w-5 h-5 bg-red-600 rounded-full text-white" />
                  <span className="rounded-full p-[5px] bg-sky-500/30">
                    <Plus className="w-3 h-3" />
                  </span>
                </div> */}
              {/* </div> */}
            </div>

            {/* <div className="flex flex-1 flex-col sm:flex-row"> */}
              <div className="flex flex-col w-full min-h-24 items-center justify-center gap-y-2 sm:border-r-2 border-slate-300">
                <RadioGroupItem
                  className="text-[#6750A4] border-2 border-[#6041b6] "
                  value="two"
                  id="r2"
                />
                <Label className="text-slate-600 text-xs" htmlFor="r2">
                  First interview
                </Label>
                {/* <div className="w-full flex my-3 justify-between px-4">
                  <Minus className="w-5 h-5 bg-red-600 rounded-full text-white" />
                  <span className="rounded-full p-[5px] bg-sky-500/30">
                    <Plus className="w-3 h-3" />
                  </span>
                </div> */}
              {/* </div> */}
            </div>
            {/* <div className="flex flex-1 flex-col sm:flex-row"> */}
              <div className="flex flex-col w-full min-h-24 items-center justify-center gap-y-2 border-r-2 border-slate-300">
                <RadioGroupItem
                  className="text-[#6750A4] border-2 border-[#6041b6] "
                  value="exam"
                  id="r3"
                />
                <Label className="text-slate-600 text-xs" htmlFor="r3">
                  Exam
                </Label>
                {/* <div className="w-full flex my-3 justify-between px-4">
                  <Minus className="w-5 h-5 bg-red-600 rounded-full text-white" />
                  <span className="rounded-full p-[5px] bg-sky-500/30">
                    <Plus className="w-3 h-3" />
                  </span>
                </div> */}
              {/* </div> */}
            </div>
            {/* <div className="flex flex-1 flex-col sm:flex-row"> */}
              <div className="flex flex-col w-full min-h-24 items-center justify-center gap-2">
                <RadioGroupItem
                  className="text-[#6750A4] border-2 border-[#6041b6] "
                  value="three"
                  id="r3"
                />
                <Label className="text-slate-600 text-xs text-center pl-1" htmlFor="r3">
                  contract proposal
                </Label>
                {/* <div className="w-full flex my-3 justify-between px-4">
                  <Minus className="w-5 h-5 bg-red-600 rounded-full text-white" />
                  <span className="rounded-full p-[5px] bg-sky-500/30">
                    <Plus className="w-3 h-3" />
                  </span>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </RadioGroup>
  )
}

export default ApplicantLevels