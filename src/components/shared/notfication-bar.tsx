import { Bell, ChevronDown, HandCoins, LogOut, Mail, Plus } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";

const NotficationBar = () => {
  return (
    <div className="w-full min-h-96 p-4 flex flex-col bg-[#ECE6F0] rounded-3xl">
      <div className="flex flex-col gap-y-8">
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZIG7rVkxZNSk9ahTmjKCe1jfRPqRS0NyFtQy8BoLjw&s"
            className="rounded-full w-9 h-9 mr-3"
            alt=""
          />
          <div className="flex flex-col gap-y-0">
            <h1 className="text-[16px] font-medium text-slate-900">
              Bemnet Adugnaw
            </h1>
            <p className="text-sm text-slate-500">Human Resourse</p>
          </div>
          <ChevronDown className="w-5 h-5 ml-auto hover:cursor-pointer" />
        </div>
        <div className="flex justify-center gap-x-8">
          <Mail className="w-5 h-5" />
          <Bell className="w-5 h-5" />
          <LogOut className="w-5 h-5" />
        </div>
      </div>
      <Separator className="my-4 h-[1px] bg-gray-100" />
      <div className="flex flex-col mt-3">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">You to -do list</h1>
          <span className="rounded-full p-2 bg-sky-500/30">
            <Plus className="w-4 h-4" />
          </span>
        </div>

        <div className="flex flex-col gap-y-3 p-2">
          <div className="flex items-center gap-x-3">
             <span className="rounded-xl p-2 bg-sky-500/30">
              <HandCoins className="w-5 h-5" />
            </span>
            <div className="flex flex-col gap-y-0">
              <h1 className="text-[15px] font-medium text-slate-900">
                    Run Payroll
              </h1>
              <p className="text-sm text-slate-500">on mar 24 8:00</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
             <span className="rounded-xl p-2 bg-sky-500/30">
              <HandCoins className="w-5 h-5" />
            </span>
            <div className="flex flex-col gap-y-0">
              <h1 className="text-[15px] font-medium text-slate-900">
                    Run Payroll
              </h1>
              <p className="text-sm text-slate-500">on mar 24 8:00</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
             <span className="rounded-xl p-2 bg-sky-500/30">
              <HandCoins className="w-5 h-5" />
            </span>
            <div className="flex flex-col gap-y-0">
              <h1 className="text-[15px] font-medium text-slate-900">
                    Check on Apprisal
              </h1>
              <p className="text-sm text-slate-500">on mar 24 8:00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="felx flex-col mt-6">
          <h1 className="text-lg font-semibold">Notfication</h1>
          <Separator className="my-4 h-[1px] bg-gray-100" />
          <div className="flex flex-col gap-y-3">
            <div className="bg-white relative p-2 rounded-lg">
                    <span className="absolute top-4 left-2 w-3 h-3 bg-green-400 rounded-full"></span>
                    <h1 className="text-[16px] pl-5 font-semibold">Board meeting </h1>
                    <h2 className="text-sm text-slate-500 pl-5">on april 1 2:00</h2>
                    <p className="pl-5 text-slate-800 text-[14px]">you have to attend board metting at meeting hall</p>
            </div>
            <div className="bg-white relative p-2 rounded-lg">
                    <span className="absolute top-4 left-2 w-3 h-3 bg-green-400 rounded-full"></span>
                    <h1 className="text-[16px] pl-5 font-semibold">Board meeting </h1>
                    <h2 className="text-sm text-slate-500 pl-5">on april 1 2:00</h2>
                    <p className="pl-5 text-slate-800 text-[14px]">you have to attend board metting at meeting hall</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default NotficationBar;
