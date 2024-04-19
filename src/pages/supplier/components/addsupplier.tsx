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

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
//   DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import FileUploader from "./file-uploader";
import { Link } from "react-router-dom";

export function Addsupplier() {

    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: intialData,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("lksjfdlkjf");
    console.log(values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"  className="bg-[#1570EF] rounded-sm font-normal text-white hover:bg-blue-500 hover:text-white">Add supplier</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-[#383e49] text-[20px]">New Supplier</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className=" w-full">
          <div className="w-full ">
           




 <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>

              

                <div className="w-full flex flex-col justify-center items-center">
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

            <div className="flex flex-col justify-between w-full gap-4">
                
                <FormField
                  name="productName"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Supplier Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            placeholder="Enter supplier name"
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
                          Product
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            placeholder="Enter product"
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
                          Category
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="1"
                            step="1"
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
                  name="unit"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Buying Price
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            placeholder="Enter Buying Price"
                            className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />

                <FormField
                  name="category"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Contact Number
                        </FormLabel>
                        <FormControl>
                          <Input
                          type="text"
                            {...field}
                            placeholder="Enter Contact Number"
                            className="text-[16px] text-[#5D6679] w-full sm:w-2/3 md:w-full lg:w-2/3 pr-6 border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0"
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />

</div>

</form>
</Form>



          </div>
        </div>
        <DialogFooter>
         <div className="w-full py-10 px-6 gap-3 flex justify-end items-center">
              <Link to={"/"}>
                <Button className="bg-white text-[#858D9D] font-medium text-[16px] border-2 rounded-sm hover:bg-slate-100 ">
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
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
