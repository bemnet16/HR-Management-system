import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useGoogleLogin } from "@react-oauth/google";

// import { toast } from "@/components/ui/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "incorrect email" }),
  password: z.string().min(8, { message: "must be at least 8 character" }),
  name: z.string(),
});

const SignUPPage = () => {
  // const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    form.reset();
  };

  return (
    <div className="flex flex-col gap-1 text-center">
      <div className="flex flex-col text-center mb-3">
        <p className="font-semibold text-[30px] leading-[38px] text-[#2b2f38] py-2">
          Create an account
        </p>
        <p className="text-slate-400 text-[16px] leading-[24px] ">
          Start your 30-day free trial.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-3 text-slate-500 w-[250px] sm:w-[370px]"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className=" text-start">
                <FormLabel className="text-slate-500">Name*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    className="focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent border border-sky-200 text-[16px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-600 font-normal" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className=" text-start">
                <FormLabel className="text-slate-500">Email*</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent border border-sky-200 text-[16px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-600 font-normal" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="text-start">
                <FormLabel className="text-slate-500">Password*</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="create a password"
                    className="focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent border border-sky-200 text-[16px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-600 font-normal" />
              </FormItem>
            )}
          />
         
          <Button type="submit" className="bg-blue-600 rounded-sm hover:bg-blue-700">
            {/* {(isSigningIn || isUserLoading) ? (
              <span className="flex items-center">
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Loading...
              </span>
            ) : (
              <>Log In</>
            )} */}
            <>Get started</>
          </Button>

          <Button onClick={() => login()} className="bg-white hover:bg-white text-slate-700 border-2"> <img src="/assets/google.svg" alt="google icon" className="w-5 h-5 mr-2" /> Sign up with Google</Button>

          <p className="text-zinc-500 text-sm text-center ml-1">
            Already have an account?
            <Link to={"/sign-in"} className="text-blue-600 font-semibold ml-1">
              Log In
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default SignUPPage;
