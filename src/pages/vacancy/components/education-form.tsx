import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function EducationForm() {
  const [val, setval] = useState<string | null>(null);
  return (
    <Select value={val ? val : ""} onValueChange={(e) => setval(e)}>
      <SelectTrigger className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0">
        <SelectValue placeholder="Employee Type" />
      </SelectTrigger>
      <SelectContent onChange={() => console.log("lkdjf")}>
        <SelectGroup>
          <SelectLabel>education level</SelectLabel>
          <SelectItem value="per">Highest Education Level</SelectItem>
          <SelectItem value="temp">School/University Name</SelectItem>
          <SelectItem value="inter">Degree Obtained</SelectItem>
          <SelectItem value="inter">Bachelor's Degree</SelectItem>
          <SelectItem value="inter">Master's Degree</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
