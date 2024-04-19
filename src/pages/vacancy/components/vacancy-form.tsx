import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FileUploader from "./file-uploader";
import { EducationForm } from "./education-form";
import { GenderForm } from "./gender-form";

const formSchema = z.object({
  file: z.custom<File[]>(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  experiance: z.string(),
  educationLevel: z.string(),
  adderss: z.string(),
  gender: z.string(),
  phoneNumber: z.string(),
  linkedin: z.string(),
});

const intialData = {
  firstName: "",
  lastName: "",
  email: "",
  experiance: "",
  educationLevel: "",
  adderss: "",
  gender: "",
  phoneNumber: "",
  linkedin: "",
};

const VacancyForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: intialData,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("lksjfdlkjf");
    console.log(values);
  };

  return (
    <div className="flex flex-col p-5 w-full bg-white rounded-md gap-2">
      <h1 className="text-[20px] font-semibold mb-5] text-[#383E49] ">
        Apply here
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>

          <div className="flex flex-col msm:flex-row justify-between w-full gap-4">
            <div className="w-full p-4 flex flex-col gap-5">
              <FormField
                name="firstName"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                      <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                        First Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Enter first name"
                          className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <FormField
                name="lastName"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                      <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                        Last Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="Enter last name"
                          className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                        />
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
                    <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                      <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min="1"
                          step="1"
                          {...field}
                          placeholder="Enter your email"
                          className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />

              <FormField
                name="phoneNumber"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                      <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                        Phone N<span className="underline">o</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="+251 ---------"
                          className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <FormField
                name="gender"
                control={form.control}
                render={() => {
                  return (
                    <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                      <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                        Geneder
                      </FormLabel>
                      <FormControl>
                        <GenderForm />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
            </div>

            <div className="w-full flex flex-col p-4 gap-5">
              <FormField
                name="educationLevel"
                control={form.control}
                render={() => {
                  return (
                    <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                      <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                        Education
                      </FormLabel>
                      <FormControl>
                        <EducationForm />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <FormField
                name="adderss"
                control={form.control}
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                      <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                        Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          placeholder="where do you live?"
                          className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />

              <FormField
                control={form.control}
                name="experiance"
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                      <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                        Experiance
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Enter your experiance"
                          className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                      <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                        LinkedIn profile
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          placeholder="Enter your experiance"
                          className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="file"
                render={({ field }) => {
                  return (
                    <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                      <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                        Resume/CV
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
            </div>
          </div>

          <div className="w-full py-10 px-3 gap-3 flex justify-end items-center">
            <Link to={"/"}>
              <Button className="bg-white text-[#858D9D] font-normal text-[18px] border-2 rounded-sm hover:bg-slate-100 ">
                Discard
              </Button>
            </Link>
            <Button
              type="submit"
              className="bg-[#1570EF] rounded-sm hover:bg-blue-500"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default VacancyForm;
