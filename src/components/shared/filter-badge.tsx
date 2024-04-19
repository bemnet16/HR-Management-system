import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy, Filter } from "lucide-react";

const FilterBadge = () => {
  return (
     <div className="flex bg-gray-400/20 rounded-full w-fit h-6 tablet:h-8 ml-auto mt-1 mr-1">
            <Select onValueChange={(e) => console.log(e)}>
              <SelectTrigger className="px-5 bg-gray-400/0 text-slate-600 text-[14px] tablet:text-base font-[400] h-full hover:bg-slate-100 border-none rounded-none">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter">Filter</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Filter</SelectLabel>
                  <SelectItem value="filter1">Fitler Item 1</SelectItem>
                  <SelectItem value="filter2">Fitler Item 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <div className="w-[6px] h-4/5 my-auto bg-black/70" />

            <Select>
              <SelectTrigger className="px-4 bg-gray-400/0 text-slate-600 text-[14px] tablet:text-base font-[400] h-full hover:bg-slate-100 border-none rounded-none">
                <Copy className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Group">Group </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Group</SelectLabel>
                  <SelectItem value="group1">Group 1</SelectItem>
                  <SelectItem value="group2">Group 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
  )
}

export default FilterBadge