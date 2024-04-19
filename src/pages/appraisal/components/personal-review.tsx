"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  motivation: z.string(),
  improvement: z.string(),
  ontime: z.string(),
  communication: z.string(),
})

const PersonalReview = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

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
      <form  className="">
        <FormField
          control={form.control}
          name="motivation"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3 mb-1">
              <FormLabel className="text-base font-normal w-40 text-slate-500">Motivation (%) </FormLabel>
          
                  <FormControl className="relative ">
                  <Input className="w-24 h-8 pl-8 text-base bg-gray-200 text-slate-600 font-medium" type="number" min={"0"} max={"100"} step={"1"} {...field} />
                  
                  </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="improvement"
          render={({ field }) => (
           <FormItem className="flex items-center gap-3 mb-1">
              <FormLabel className="text-base font-normal w-40 text-slate-500">Improvement (%) </FormLabel>
          
                  <FormControl className="relative ">
                  <Input className="w-24 h-8 pl-8 text-base bg-gray-200 text-slate-600 font-medium" type="number" min={"0"} max={"100"} step={"1"} {...field} />
                  
                  </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ontime"
          render={({ field }) => (
            <FormItem className="flex items-center gap-3 mb-1">
              <FormLabel className="text-base font-normal w-40 text-slate-500">Being on time (%) </FormLabel>
          
                  <FormControl className="relative ">
                  <Input className="w-24 h-8 pl-8 text-base bg-gray-200 text-slate-600 font-medium" type="number" min={"0"} max={"100"} step={"1"} {...field} />
                  
                  </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="communication"
          render={({ field }) => (
           <FormItem className="flex items-center gap-3 mb-1">
              <FormLabel className="text-base font-normal w-40 text-slate-500">Communication (%) </FormLabel>
          
                  <FormControl className="relative ">
                  <Input className="w-24 h-8 pl-8 text-base bg-gray-200 text-slate-600 font-medium" type="number" min={"0"} max={"100"} step={"1"} {...field} />
                  
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
                Next
              </Button>
            </div>
      </form>
    </Form>
  )
}

export default PersonalReview
