import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { X } from "lucide-react";

const formSchema = z.object({
  postion: z.string(),
  email: z.string().email({ message: "Invalid email" }),
});

interface createJobProps {
  onClicked: (next: number) => void;
}

const CreateJob = ({ onClicked }: createJobProps) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postion: "",
      email: "",
    },
  });

  return (
    <div className="flex flex-col justify-between p-5 w-full sm:w-4/5 max-w-full min-h-44 rounded-lg border-gray-200 border-2 bg-white">
      
      <div className="flex justify-between mb-3">
        <div>
          <h1 className="font-semibold text-lg">Create Job position</h1>
        </div>
        <Button onClick={() => onClicked(0)} variant="ghost">
          <X className="w-4 h-4" />
        </Button>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => onClicked(2))}>
          <FormField
            name="postion"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-[18px] font-normal">
                    Job Position
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#F6F6F6]" />
                  </FormControl>
                </FormItem>
              );
            }}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-[18px] font-normal text-black">
                    application email
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-[#F6F6F6]" />
                  </FormControl>
                  <FormDescription className="pl-2">
                    <FormMessage className="text-sm font-normal text-red-400" />
                    applicants can send their email by this email
                  </FormDescription>
                </FormItem>
              );
            }}
          />
          <div className="w-full flex justify-end gap-x-4 items-center  mt-8">
            <Button
              onClick={() => onClicked(0)}
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
              Create
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateJob;
