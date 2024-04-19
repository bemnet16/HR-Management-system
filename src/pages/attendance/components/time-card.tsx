import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const TimeCard = () => {
  return (
     <Popover>
          <PopoverTrigger asChild>
            <div className="w-3/4 mr-2 h-5 bg-white border-2 border-slate-300 rounded-md flex justify-center items-center text-slate-400 cursor-pointer ">
              {/*  Time*/}
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-52 ">
            <div className="space-y-2">
              <h4 className="font-medium leading-none text-slate-600">Enter time</h4>
            </div>

            <div className="flex flex-col w-full my-5">
              <Input
                type="time"
                id="m"
                defaultValue="300px"
                className="col-span-2 h-8"
                // onChange={(e) => setMoCheckIn(e.target.value)}
              />
              <Label htmlFor="maxWidth" className="text-sm font-normal p-2">hour : minute</Label>
            </div>

            <div className="w-full flex justify-end">
                <Button variant={"ghost"} className="font-thin text-black">Cancel</Button>
                <Button type="submit" variant={"ghost"} className="font-thin text-black">Ok</Button>
            </div>
          </PopoverContent>
        </Popover>
  )
}

export default TimeCard