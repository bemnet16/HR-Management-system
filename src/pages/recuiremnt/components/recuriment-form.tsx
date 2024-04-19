import { useState } from "react";
import { Link } from "react-router-dom";

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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Plus } from "lucide-react";

import RecuritersAvatar from "./recuriters-avatar";

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

interface recurimentFormProps {
  onClicked: (next: number) => void;
}

const RecurimentForm = ({ onClicked }: recurimentFormProps) => {
  const [isDescription, setIsDescription] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: intialData,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="w-full md:px-2">
      <div className="flex flex-col w-full bg-white rounded-md gap-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row justify-between w-full gap-4">
              <div className="w-full flex flex-col gap-5">
                <FormField
                  name="productName"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-col items-start justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Departemnet
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            className="text-[16px] text-[#5D6679] w-full bg-[#F6F6F6] border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0 h-8"
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
                      <FormItem className="flex flex-col items-start justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Branch
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            className="text-[16px] text-[#5D6679] w-full bg-[#F6F6F6] border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0 h-8"
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
                      <FormItem className="flex flex-col items-start justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Job Location
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            className="text-[16px] text-[#5D6679] w-full bg-[#F6F6F6] border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0 h-8"
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
              </div>

              <div className="w-full flex flex-col gap-5">
                <FormField
                  name="buyingPrice"
                  control={form.control}
                  render={({ field }) => {
                    return (
                      <FormItem className="flex flex-col items-start justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Expected employess
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="1"
                            step="1"
                            {...field}
                            className="text-[16px] text-[#5D6679] w-full bg-[#F6F6F6] border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0 h-8"
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
                      <FormItem className="flex flex-col items-start justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Interview Form
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            {...field}
                            className="text-[16px] text-[#5D6679] w-full bg-[#F6F6F6] border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0 h-8"
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
                      <FormItem className="flex flex-col items-start justify-between">
                        <FormLabel className="text-[16px] font-[500] text-[#5D6679]">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            className="text-[16px] text-[#5D6679] w-full bg-[#F6F6F6] border-2 focus-visible:ring-2 focus-visible:ring-red-50 focus-visible:ring-opacity-0 h-8"
                          />
                        </FormControl>
                      </FormItem>
                    );
                  }}
                />
              </div>
            </div>

            <div className="w-full flex justify-between flex-col sm:flex-row ">
              <div className=" my-3 ">
                <h1 className="text-[16px] font-[500] text-[#5D6679] mb-3">
                  Job type
                </h1>
                <div className="w-full ">
                  <RadioGroup
                    onValueChange={(e) => console.log(e)}
                    className="flex flex-col gap-x-5"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        className="text-[#6750A4] border-2 border-[#6041b6]"
                        value="one"
                        id="r1"
                      />
                      <Label className="text-slate-600 " htmlFor="r1">
                        Permanent
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        className="text-[#6750A4] border-2 border-[#6041b6]"
                        value="two"
                        id="r2"
                      />
                      <Label className="text-slate-600 " htmlFor="r2">
                        Contractual
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        className="text-[#6750A4] border-2 border-[#6041b6]"
                        value="three"
                        id="r3"
                      />
                      <Label className="text-slate-600 " htmlFor="r3">
                        Freelancer
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className=" w-fit flex flex-col justify-center items-center mt-4">
                <span
                  onClick={() => setIsDescription(!isDescription)}
                  className="rounded-full p-2 cursor-pointer bg-sky-500/30"
                >
                  <Plus className="w-4 h-4" />
                </span>
                <p className="text-slate-500">Add description</p>
              </div>
            </div>

            {isDescription && (
              <div className="my-4">
                <Textarea
                  placeholder="write job description..."
                  className="bg-[#F6F6F6]"
                />
              </div>
            )}

            <div className="w-fit  gap-4 mt-6">
              <h2 className="font-medium text-slate-800">Recuriter</h2>
              <RecuritersAvatar />
            </div>

            <div className="w-full flex justify-end gap-x-4 items-center  mt-8">
              <Button
                onClick={() => {
                  onClicked(0);
                }}
                variant="ghost"
                className="text-[#6750A4] border-2 border-[#6750A4] rounded-full h-8"
              >
                Discard
              </Button>
              <Link to="/recuiremnt">
                <Button
                  onClick={() => {
                    onClicked(0);
                  }}
                  type="submit"
                  variant="ghost"
                  className="bg-[#6750A4] text-white hover:text-white rounded-full h-8 font-normal px-6 hover:bg-[#6758AF]"
                >
                  Save
                </Button>
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RecurimentForm;
