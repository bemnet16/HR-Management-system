import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export function SelectMonth() {
    const [val,setval] = useState<string | null>(null)
  return (
    <Select value={val? val : ""}  onValueChange={(e)=>setval(e)}>
      <SelectTrigger className="w-fit focus-visible:ring-2 border-slate-400">
        <SelectValue placeholder="Select Month" />
      </SelectTrigger>
      <SelectContent onChange={()=>console.log("lkdjf")} >
        <SelectGroup>
          <SelectLabel>Months</SelectLabel>
          <SelectItem value="Sep">Sep</SelectItem>
          <SelectItem value="Oct">Oct</SelectItem>
          <SelectItem value="Nov">Nov</SelectItem>
          <SelectItem value="Dec">Dec</SelectItem>
          <SelectItem value="Jan">Jan</SelectItem>
          <SelectItem value="Feb">Feb</SelectItem>
          <SelectItem value="Mar">Mar</SelectItem>
          <SelectItem value="Apr">Apr</SelectItem>
          <SelectItem value="May">May</SelectItem>
          <SelectItem value="Jun">Jun</SelectItem>
          <SelectItem value="Jul">Jul</SelectItem>
          <SelectItem value="Aug">Aug</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}




export function SelectEmployeeType() {
    const [val,setval] = useState<string | null>(null)
  return (
    <Select value={val? val : ""}  onValueChange={(e)=>setval(e)}>
      <SelectTrigger className="w-fit focus-visible:ring-2 border-slate-400">
        <SelectValue placeholder="Employee Type" />
      </SelectTrigger>
      <SelectContent onChange={()=>console.log("lkdjf")} >
        <SelectGroup>
          <SelectLabel>Employee</SelectLabel>
          <SelectItem value="per">Permanent</SelectItem>
          <SelectItem value="temp">Temporary</SelectItem>
          <SelectItem value="inter">Internship</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
