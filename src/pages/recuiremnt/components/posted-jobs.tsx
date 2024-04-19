import { PlusCircle, Settings } from "lucide-react";
import { Link } from "react-router-dom";

interface jobPostionProps {
  onClicked: (next: number) => void;
}

const PostedJobs = ({ onClicked }: jobPostionProps) => {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">
      <button
        onClick={() => onClicked(1)}
        className="flex flex-col gap-2 justify-center items-center min-w-56 min-h-44 rounded-lg border-gray-200 border-2 hover:cursor-pointer"
      >
        <PlusCircle className="w-14 h-14" />
        <p className="text-center text-lg">
          Create Job <br />
          position
        </p>
      </button>

      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col justify-between p-3 min-w-56 min-h-48 rounded-lg border-gray-200 border-2"
        >
          <div className="w-full  flex justify-between mb-3">
            <div>
              <h1 className="font-semibold text-lg">Developer</h1>
              <p className="text-sm">developer@gmail.com</p>
            </div>
            <span className="bg-[#6750A4] rounded-full w-fit h-fit flex justify-center items-center p-2">
              <Settings className="w-4 h-4 text-white" />
            </span>
          </div>
          <div className="flex items-center text-slate-700 my-2 w-full">
            <p className="text-lg">0 Application</p>
            <div className="w-[2px] h-4/5 mx-2 bg-black/70" />
            <p className="text-lg">1 to Recuiret</p>
          </div>
          <Link to="/jobapplicant">
            <div className="bg-[#6750A4] py-1 flex items-center text-[14px] px-6 w-fit rounded-full hover:cursor-pointer">
              <p className="text-white">1 Applilcation</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostedJobs;
