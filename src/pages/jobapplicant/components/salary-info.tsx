import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  schedule: z.string(),
  contract: z.string(),
});

// interface SalaryInfoProps {
//   setActiveTab: (value: string) => void;

// }


const SalaryInfo = () => {


  const navigate = useNavigate()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  //   function onSubmit(data: z.infer<typeof FormSchema>) {
  //     toast({
  //       title: "You submitted the following values:",
  //       description: (
  //         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //         </pre>
  //       ),
  //     })
  //   }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => console.log("Salary", data))}>
        <FormField
          control={form.control}
          name="contract"
          render={({ field }) => (
            <FormItem className="grid grid-cols-2">
               <FormLabel className="font-normal pt-6 text-slate-600 text-base">
                Salary Type
              </FormLabel>

              <FormControl>
                <Select {...field}>
                  <SelectTrigger className="outline-none border-0 border-b-[2px] border-slate-400 rounded-none text-left font-normal">
                    <SelectValue placeholder="Salary Type" />{" "}
                    <ChevronDown className="w-5 h-5" />
                  </SelectTrigger>
                  <SelectContent onChange={() => console.log("lkdjf")}>
                    <SelectGroup>
                      <SelectLabel>salary type</SelectLabel>
                      <SelectItem value="per">Monthly</SelectItem>
                      <SelectItem value="temp">Per hour</SelectItem>
                      <SelectItem value="inter">Per project</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="schedule"
          render={({ field }) => (
            <FormItem className="grid grid-cols-2">
               <FormLabel className="font-normal pt-6 text-slate-600 text-base">
                Basic Salary
              </FormLabel>

              <FormControl>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  {...field}
                  className="outline-none border-0 border-b-[2px] border-slate-400 rounded-none text-left font-normal"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-2 py-5">
          
          <div className="flex flex-col border-[2px] rounded-md p-2">
            <h1 className="font-bold text-slate-700">Additions</h1>
            <div className="w-full p-6 py-0">
              <div className="grid grid-cols-2 py-5">
                <div className="font-normal text-slate-500 text-base">Over Time</div>
                <span className="text-center    outline-none border-0   font-normal">
                  2 %
                </span>
              </div>
            </div>
            <div className="w-full flex items-center justify-start pl-8 ">
              <Button className=" bg-white hover:bg-white">
                <Plus className="bg-indigo-400 rounded-full  w-7 h-7 p-2" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col border-[2px] rounded-md p-2">
            <h1 className="font-bold text-slate-700">Deduction</h1>
            <div className="w-full p-6 py-0">
              <div className="grid grid-cols-2 py-5">
                <div className="font-normal text-slate-500 text-base">Tax</div>
                <span className="outline-none border-0  text-center  font-normal">
                  15 %
                </span>
              </div>
            </div>

            <div className="w-full flex items-center justify-start pl-8">
              <Button className=" bg-white hover:bg-white">
                <Plus className="bg-indigo-400 rounded-full  w-7 h-7 p-2" />
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end gap-x-4 items-center   mt-8  pt-8">
          <Button
          onClickCapture={() => navigate(-1)}
            variant="ghost"
            className="text-[#6750A4] border-2 border-[#6750A4] rounded-full h-8"
          >
            Discard
          </Button>
          <Button
          type="button"
            // onClick={() => {
            //       setActiveTab((prev) => "personal-document");
            //     }}
            variant="ghost"
            className="bg-[#6750A4] text-white hover:text-white rounded-full h-8 font-normal px-6 hover:bg-[#6758AF]"
          >
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
}


export default SalaryInfo;