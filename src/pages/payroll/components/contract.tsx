"use client";

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

const FormSchema = z.object({
  jobtype: z.string(),
  schedule: z.string(),
  contract: z.string(),
});

const ContractInfo = () => {
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
      <form className="">
        <FormField
          control={form.control}
          name="schedule"
          render={({ field }) => (
            <FormItem className="w-full grid grid-cols-2 items-center gap-3">
              <FormLabel className="font-normal pt-6 text-slate-600 text-base">
                Job type
              </FormLabel>

              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="outline-none border-0 border-b-[2px] border-slate-500 rounded-none pl-3 text-left font-normal"
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
            <FormItem className="w-full grid grid-cols-2 items-center gap-3">
              <FormLabel className="font-normal pt-6 text-slate-600 text-base">
                Agreement date
              </FormLabel>

              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="outline-none border-0 border-b-[2px] border-slate-500 rounded-none pl-3 text-left font-normal"
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
            <FormItem className="w-full grid grid-cols-2 items-center gap-3">
              <FormLabel className="font-normal pt-6 text-slate-600 text-base">
                Pay requency
              </FormLabel>

              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="outline-none border-0 border-b-[2px] border-slate-500 rounded-none pl-3 text-left font-normal"
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
            <FormItem className="w-full grid grid-cols-2 items-center gap-3">
              <FormLabel className="font-normal pt-6 text-slate-600 text-base">
                contract file{" "}
              </FormLabel>

              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="outline-none border-0 border-b-[2px] border-slate-500 rounded-none pl-3 text-left font-normal"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
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
      </form>
    </Form>
  );
};

export default ContractInfo;
