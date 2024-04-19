import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function GenderForm() {
  return (
    <RadioGroup  className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 flex items-center gap-10" defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="male" id="r1" />
          <Label htmlFor="r1">Male</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="female" id="r2" />
          <Label htmlFor="r2">Female</Label>
        </div>
    </RadioGroup>
  );
}
