import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const AppraisalCard = () => {
  return (
    <Link to="/appraisal/1">
    <div className="w-fit h-16 bg-gray-100 rounded-xl flex gap-2 items-center">
      <div className="flex gap-2 items-center px-2 min-w-56">
        <Avatar className="w-9 h-9 ">
          <AvatarImage src="https://d2kf8ptlxcina8.cloudfront.net/YH5TFCE1QY-preview.png" />
        </Avatar>
        <div className="w-full">
          <h1 className="text-base font-semibold text-slate-500">
            Bemnet Adugnaw
          </h1>
          <p className="text-sm text-[#484747]/50 font-medium">
            Software engineer
          </p>
        </div>
      </div>

      <div className="font-medium text-slate-700 text-center min-w-36">SE18 6WP</div>
      <div className="font-medium text-slate-700 text-center min-w-36">post & plan</div>
      <div className="w-6 h-6 mx-auto rounded-full flex items-center justify-center min-w-36">
        <Check className="w-5 h-5 p-[1px] text-white bg-green-500 rounded-full" />
      </div>
    </div>
    </Link>
  );
};

export default AppraisalCard;
