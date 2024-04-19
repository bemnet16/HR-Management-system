
import { Avatar, AvatarImage } from "@/components/ui/avatar";

import TimeCard from "./time-card";

const AttendanceCard = () => {
  // const [moCheckIn, setMoCheckIn] = useState<string>("");

  return (
    <div className="w-fit h-24 py-3 bg-gray-100/30 rounded-xl flex gap-1">
      <div className="flex gap-1 items-center px-2 min-w-56">
        <Avatar className="w-9 h-9 ">
          <AvatarImage src="https://d2kf8ptlxcina8.cloudfront.net/YH5TFCE1QY-preview.png" />
        </Avatar>
        <div className="w-full">
          <h1 className="text-sm font-semibold text-slate-500">
            Bemnet Adugnaw
          </h1>
          <p className="text-xs text-cyan-700 font-medium">Software engineer</p>
        </div>
      </div>

      <div className="flex items-center justify-around gap-5 rounded-md  min-w-44">
        <TimeCard />
        <TimeCard />
      </div>

      <div className="flex items-center justify-around gap-5 rounded-md min-w-44">
        <TimeCard />
        <TimeCard />
      </div>

      <div className="flex items-center justify-around gap-5 rounded-md min-w-44">
      <TimeCard />
      </div>
    </div>
  );
};

export default AttendanceCard;
