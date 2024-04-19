import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertOctagon, Plus } from "lucide-react";
import { useState } from "react";

const Compliment = () => {
  const [isAdd, setIsAdd] = useState(false);

  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="relative w-full pl-8 text-slate-600 mb-6">
          <AlertOctagon className="w-6 h-6 text-red-700 left-0 absolute" />
          <p className="w-full">
            Emplyoess <span className="italic font-bold">Kovács Lajos </span>{" "}
            with and ID <span className="italic font-bold">KT17 9NL</span> is
            being late for 2 consquetive days.
          </p>
          <div className="w-full flex flex-col mob-L:flex-row gap-y-4  my-5 mob-L:my-3">
            <p>
            From
            <span className="bg-indigo-200 px-3 py-[1px] border-2 border-indigo-400 rounded-full mx-2">
              Manager
            </span>
            </p>

            <p>
            Departemnt
            <span className="bg-indigo-200 px-3 py-[1px] border-2 border-indigo-400 rounded-full mx-2">
              Marketing
            </span>
            </p>
          </div>
        </div>
      ))}

      {!isAdd && (
        <div className="flex justify-start gap-3 items-center my-6">
          <Button
            onClick={() => setIsAdd(!isAdd)}
            className="rounded-full p-2 bg-sky-500/80"
          >
            <Plus className="w-6 h-6 cursor-pointer" />
          </Button>
          <h1 className="text-lg font-semibold">Add your Complanint</h1>
        </div>
      )}

      {isAdd && (
        <div>
          <Textarea className="bg-slate-50" />
          <div className="flex justify-end mt-4 gap-4">
            <Button onClick={() => setIsAdd(!isAdd)} variant={"ghost"}>
              {" "}
              cancel{" "}
            </Button>
            <Button className="bg-sky-600">Submit</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Compliment;
