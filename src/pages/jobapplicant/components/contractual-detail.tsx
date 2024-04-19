import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  startdate: z.date({}),
  schedule: z.string(),
  contract: z.string(),
});

// interface SalaryInfoProps {
//   setActiveTab: (value: string) => void;
// }

const ContractualDetail = () => {

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
      <form onSubmit={form.handleSubmit((data) => console.log("contract", data))}>
        <FormField
          control={form.control}
          name="startdate"
          render={({ field }) => (
            <FormItem className="grid grid-cols-2">
              <FormLabel className="font-normal pt-6 text-slate-600 text-sm mob-L:text-base">
                Start Date{" "}
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "border-0 border-b-[2px] border-slate-500 rounded-none pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? format(field.value, "PPP") : <span></span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="grid grid-cols-2">
              <FormLabel className="font-normal pt-6 text-slate-600 text-sm mob-L:text-base">
                End Date{" "}
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "border-0 border-b-[2px] border-slate-500 rounded-none pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? format(field.value, "PPP") : <span></span>}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="schedule"
          render={({ field }) => (
            <FormItem className="grid grid-cols-2">
              <FormLabel className="font-normal pt-6 text-slate-600 text-sm mob-L:text-base">
                Working schedule{" "}
              </FormLabel>

              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="outline-none  border-0 border-b-[2px] border-slate-500 rounded-none pl-3 text-left font-normal"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contract"
          render={({ field }) => (
            <FormItem className="grid grid-cols-2">
              <FormLabel className="font-normal pt-6 text-slate-600 text-sm mob-L:text-base">
                contract file{" "}
              </FormLabel>

              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="outline-none  border-0 border-b-[2px] border-slate-500 rounded-none pl-3 text-left font-normal"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-end gap-x-4 items-center  mt-8">
          <Button
          onClick={() => navigate(-1)}
            variant="ghost"
            className="text-[#6750A4] border-2 border-[#6750A4] rounded-full h-8"
          >
            Discard
          </Button>
          <Button
          type="button"
            // onClick={() => setActiveTab("salary-info")}
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


export default ContractualDetail;