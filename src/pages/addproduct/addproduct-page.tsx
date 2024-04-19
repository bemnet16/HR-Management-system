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
import FileUploader from "./components/file-uploader";

const formSchema = z.object({
   file: z.custom<File[]>(),
  productName: z.string(),
  productId: z.string(),
  quantity: z.string(),
  unit: z.string(),
    category: z.string(),
    buyingPrice: z.string(),
    date: z.string(),
    purchaserName: z.string(),
});

const intialData = {
  productName: "",
  productId: "",
  quantity: "",
  unit: "",
    category: "",
    buyingPrice: "",
    date: "",
    purchaserName: "",
};

const AddproductPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: intialData,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("lksjfdlkjf");
    console.log(values);
  };

  return (
    <div className="p-6 md:px-2 lg:px-6">
      <div className="flex flex-col p-5 w-full bg-white rounded-md gap-2">
        <h1 className="text-[20px] font-semibold mb-5] text-[#383E49] ">
          New Product
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>

              

                <div className="w-full flex justify-start">
                   <FormField
          control={form.control}
          name="file"
          render={({ field }) => {
            return (
              <FormItem>
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

            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
                
              <div className="w-full p-4 flex flex-col gap-5">
                <FormField
                  name="productName"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Product Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            placeholder="Enter product name"
                            className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  name="productId"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Product ID
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            placeholder="Enter product ID"
                            className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  name="quantity"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Quantity
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="1"
                            step="1"
                            {...field}
                            placeholder="Enter product quantity"
                            className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  name="unit"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Unit
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            placeholder="Enter product unit"
                            className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
              </div>

              <div className="w-full flex flex-col p-4 gap-5">
                <FormField
                  name="category"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Category
                        </FormLabel>
                        <FormControl>
                          <Input
                          type="text"
                            {...field}
                            placeholder="Select product category"
                            className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
                 <FormField
                  name="buyingPrice"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Buying Price
                        </FormLabel>
                        <FormControl>
                          <Input
                          type="number"
                          min="0.01"
                          step="0.01"
                            {...field}
                            placeholder="Enter buying price"
                            className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
               <FormField
                  name="date"
                  control={form.control}
                  render={() => {
                    return (
                      <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Date
                        </FormLabel>
                        <FormControl>
                          <Input
                        //   {...field}
                            type="date"
                            className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  control={form.control}
                  name="purchaserName"
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Purchaser Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="Enter name"
                            className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
              </div>
            </div>

            <div className="w-full py-10 px-3 gap-3 flex justify-end items-center">
              <Link to={"/"}>
                <Button className="bg-white text-[#858D9D] font-[600] text-[18px] border-2 rounded-sm hover:bg-slate-100 ">
                  Discard
                </Button>
              </Link>
              <Button
                type="submit"
                className="bg-[#1570EF] rounded-sm hover:bg-blue-500"
              >
                Add Product
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AddproductPage;
