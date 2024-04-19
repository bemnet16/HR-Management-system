import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import RecurimentForm from "./recuriment-form";
import JobType from "./job-type";

interface descriptionFormProps {
  onClicked: (next: number) => void;
}

const JobDescription = ({ onClicked }: descriptionFormProps) => {
  return (
    <div className="w-auto flex flex-col justify-between p-5  rounded-lg border-gray-100 border-2 shadow-sm bg-white">
      <div className="w-full mb-4">
        <h1 className="font-normal text-lg text-slate-700 px-2">
          Job position
        </h1>
        <div className="border-2 pr-12 py-1 px-2 bg-[#F6F6F6] w-2/5 my-3 text-slate-500">
          <h1 className="text-lg">Developer</h1>
        </div>
      </div>

      <div className="w-full">
        <Tabs defaultValue="description" className="w-full ">
          <TabsList className=" bg-white flex gap-x-4 justify-start mt-4">
            <TabsTrigger
              value="description"
              className="px-6 rounded-full font-normal text-slate-500 border-2 border-stone-300 data-[state=active]:bg-[#F6F6F6] data-[state=active]:border-[#6750A4] data-[state=active]:text-[#6750A4]"
            >
              Job type
            </TabsTrigger>
            <TabsTrigger
              value="requirement"
              className="px-6 rounded-full font-normal text-slate-500 border-2 border-stone-300 data-[state=active]:bg-[#F6F6F6] data-[state=active]:border-[#6750A4] data-[state=active]:text-[#6750A4]"
            >
              Requirement
            </TabsTrigger>
          </TabsList>

          <div className="w-full h-0.5 my-2 mb-4 bg-gray-100" />

          <TabsContent value="description">
            <JobType />
          </TabsContent>

          <TabsContent className="w-full" value="requirement">
            <RecurimentForm onClicked={onClicked} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default JobDescription;
