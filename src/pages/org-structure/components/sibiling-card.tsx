import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const SibilingCard = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="flex flex-col items-center min-h-56">
      <div className="w-[2px] bg-slate-300 h-8 top-0 " />
      <div className="flex flex-col justify-between items-center p-2 min-h-44 min-w-36 bg-white shadow-sm border-[1px] border-slate-100 rounded-xl">
        <h1 className="font-medium text-slate-700">Cody Fisher</h1>
        <Avatar className="w-11 h-11 ">
          <AvatarImage src="https://d2kf8ptlxcina8.cloudfront.net/YH5TFCE1QY-preview.png" />
        </Avatar>
        <h2 className="text-sm text-slate-400">Software engineer</h2>
      </div>
      <Button
        onClick={() => setIsShow(!isShow)}
        className=" m-[-16px] bg-white/0 hover:bg-white/0 rounded-full"
      >
        <ChevronDown className="text-slate-400 rounded-full hover:bg-gray-200" />
      </Button>

      <div className="flex gap-4 mt-2 border-t-2 border-slate-300">
        {isShow &&
          Array.from({ length: 2 }).map((_, idx) => (
            <SibilingCard key={idx}/>
          ))}
      </div>
    </div>
  );
};

export default SibilingCard;
