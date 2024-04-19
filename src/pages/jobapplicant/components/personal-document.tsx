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
import FileUploader from "./file-uploader";
import { useNavigate } from "react-router-dom";

const FormSchema = z.object({
  phoneNo: z.string(),
  education: z.custom<File[]>(),
  nationalId: z.custom<File[]>(),
  photo: z.custom<File[]>(),
  emergencycontact: z.string(),
  emergencytele: z.string(),
});

const PersonalDocument = () => {

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
      <form className="">
        <FormField
          control={form.control}
          name="phoneNo"
          render={({ field }) => (
            <FormItem className="grid grid-cols-3 mob-L:grid-cols-2 items-center gap-2">
              <FormLabel className="font-normal pt-6 col-span-2 mob-L:col-span-1 text-slate-600 text-sm mob-L:text-base">
                Phone Number
              </FormLabel>

              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="outline-none border-0 border-b-[2px] border-slate-400 rounded-none pl-3 text-left font-normal"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="education"
          render={({ field }) => {
            return (
              <FormItem className="grid grid-cols-3 mob-L:grid-cols-2 items-center gap-2">
                <FormLabel className="font-normal pt-6 col-span-2 mob-L:col-span-1 text-slate-600 text-sm mob-L:text-base">
                  Educational document
                </FormLabel>
                <FormControl className="border-none outline-none">
                  <FileUploader
                    fieldChange={field.onChange}
                    // mediaUrl={post?.imageUrl}
                  />
                </FormControl>
                {/* <FormMessage className="text-red-500 text-xs px-2" >
                    there must be a photo!
                </FormMessage> */}
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="nationalId"
          render={({ field }) => {
            return (
              <FormItem className="grid grid-cols-3 mob-L:grid-cols-2 items-center gap-2">
                <FormLabel className="font-normal pt-6 col-span-2 mob-L:col-span-1 text-slate-600 text-sm mob-L:text-base">
                  National ID
                </FormLabel>
                <FormControl className="border-none outline-none">
                  <FileUploader
                    fieldChange={field.onChange}
                    // mediaUrl={post?.imageUrl}
                  />
                </FormControl>
                {/* <FormMessage className="text-red-500 text-xs px-2" >
                    there must be a photo!
                </FormMessage> */}
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) => {
            return (
              <FormItem className="grid grid-cols-3 mob-L:grid-cols-2 items-center gap-2">
                <FormLabel className="font-normal pt-6 col-span-2 mob-L:col-span-1 text-slate-600 text-sm mob-L:text-base">
                  Photo
                </FormLabel>
                <FormControl className="border-none outline-none">
                  <FileUploader
                    fieldChange={field.onChange}
                    // mediaUrl={post?.imageUrl}
                  />
                </FormControl>
                {/* <FormMessage className="text-red-500 text-xs px-2" >
                    there must be a photo!
                </FormMessage> */}
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name="emergencycontact"
          render={({ field }) => (
            <FormItem className="grid grid-cols-3 mob-L:grid-cols-2 items-center gap-2">
              <FormLabel className="font-normal pt-6 col-span-2 mob-L:col-span-1 text-slate-600 text-sm mob-L:text-base">
                Emergency contact
              </FormLabel>

              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="outline-none border-0 border-b-[2px] border-slate-400 rounded-none pl-3 text-left font-normal"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="emergencytele"
          render={({ field }) => (
            <FormItem className="grid grid-cols-3 mob-L:grid-cols-2 items-center gap-2">
              <FormLabel className="font-normal pt-6 col-span-2 mob-L:col-span-1 text-slate-600 text-sm mob-L:text-base">
                Emergency telephone
              </FormLabel>

              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="outline-none border-0 border-b-[2px] border-slate-400 rounded-none pl-3 text-left font-normal"
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

export default PersonalDocument;
