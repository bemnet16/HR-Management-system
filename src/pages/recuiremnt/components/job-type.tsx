import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


// ! will be a map to iterate over the job type

const JobType = () => {
  return (
    <RadioGroup
      onValueChange={(e) => console.log(e)}
      className="flex flex-col gap-y-5 pl-4"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#6750A4] border-2 border-[#6f6390]"
          value="one"
          id="r1"
        />
        <Label className="text-slate-600 " htmlFor="r1">
          User experience designer
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#6750A4] border-2 border-[#6f6390]"
          value="two"
          id="r2"
        />
        <Label className="text-slate-600 " htmlFor="r2">
          Support specialist
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#6750A4] border-2 border-[#6f6390]"
          value="three"
          id="r3"
        />
        <Label className="text-slate-600 " htmlFor="r3">
          Computer programmer
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#6750A4] border-2 border-[#6f6390]"
          value="four"
          id="r4"
        />
        <Label className="text-slate-600 " htmlFor="r4">
          Quality assurance tester
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#6750A4] border-2 border-[#6f6390]"
          value="five"
          id="r5"
        />
        <Label className="text-slate-600 " htmlFor="r5">
          Web developer
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          className="text-[#6750A4] border-2 border-[#6f6390]"
          value="six"
          id="r6"
        />
        <Label className="text-slate-600 " htmlFor="r6">
          IT technician
        </Label>
      </div>
    </RadioGroup>
  );
};

export default JobType;
