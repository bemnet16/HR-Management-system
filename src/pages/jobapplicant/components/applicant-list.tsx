import { Link } from "react-router-dom";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

import { Hourglass, Paperclip } from "lucide-react";

const ApplicantList = () => {
  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 tablet:grid-cols-1 laptop-S:grid-cols-2">
      <div className="bg-[#d7cfcf]/50 w-fit rounded-lg m-2">
        <Link to="/applicantsdetail/1">
          <div className="flex gap-4 p-2">
            <Avatar>
              <AvatarImage src="https://media.glamourmagazine.co.uk/photos/6138d0dad22f06d735f79691/1:1/w_1920,h_1920,c_limit/Friends-Glamour-13Jul16-Alamy_square.jpg" />
            </Avatar>
            <div className="flex flex-col">
              <h1 className="font-semibold">Bemnet Adugnaw</h1>
              <p className="text-sm text-slate-400">bemnetadugna@gmail.com</p>
            </div>
          </div>
          <div className="w-full flex justify-end items-center pb-2 px-2 gap-4">
            <Hourglass className="w-5 h-5  text-[#0048FF]" />
            <Paperclip className="w-5 h-5  text-[#0048FF]" />
          </div>
        </Link>
      </div>
      <div className="bg-[#d7cfcf]/50 w-fit rounded-lg m-2">
        <Link to="/applicantsdetail/1">
          <div className="flex gap-4 p-2">
            <Avatar>
              <AvatarImage src="https://media.glamourmagazine.co.uk/photos/6138d0dad22f06d735f79691/1:1/w_1920,h_1920,c_limit/Friends-Glamour-13Jul16-Alamy_square.jpg" />
            </Avatar>
            <div className="flex flex-col">
              <h1 className="font-semibold">Bemnet Adugnaw</h1>
              <p className="text-sm text-slate-400">bemnetadugna@gmail.com</p>
            </div>
          </div>
          <div className="w-full flex justify-end items-center pb-2 px-2 gap-4">
            <Hourglass className="w-5 h-5  text-[#0048FF]" />
            <Paperclip className="w-5 h-5  text-[#0048FF]" />
          </div>
        </Link>
      </div>
      <div className="bg-[#d7cfcf]/50 w-fit rounded-lg m-2">
        <Link to="/applicantsdetail/1">
          <div className="flex gap-4 p-2">
            <Avatar>
              <AvatarImage src="https://media.glamourmagazine.co.uk/photos/6138d0dad22f06d735f79691/1:1/w_1920,h_1920,c_limit/Friends-Glamour-13Jul16-Alamy_square.jpg" />
            </Avatar>
            <div className="flex flex-col">
              <h1 className="font-semibold">Bemnet Adugnaw</h1>
              <p className="text-sm text-slate-400">bemnetadugna@gmail.com</p>
            </div>
          </div>
          <div className="w-full flex justify-end items-center pb-2 px-2 gap-4">
            <Hourglass className="w-5 h-5  text-[#0048FF]" />
            <Paperclip className="w-5 h-5  text-[#0048FF]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ApplicantList;
