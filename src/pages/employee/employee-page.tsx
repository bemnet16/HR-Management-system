import { Separator } from "@/components/ui/separator";
import { Reports } from "./components/reports";

const EmployeePage = () => {
  return (
    <div className="md:p-6">
      <div className="bg-white p-4  rounded-lg mb-8">
        <h1 className="text-[18px] text-slate-700 font-medium mb-8">
          Employee Detail
        </h1>
        <p className="font-medium text-slate-500 p-1">profile</p>
        <div className="flex items-center w-full overflow-hidden mb-4">
          <Separator className="px-6 w-16 h-[2.5px] bg-blue-500" />
          <Separator className="px-6" />
        </div>

        <div className="flex">
          <div className="flex flex-col w-full">
            <div className="p-5 w-full">
              <h1 className="text-[16px] font-semibold text-[#48505E] pb-6">
                Personal Info.
              </h1>
              <div className="w-3/4 pb-5 flex justify-center items-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7meA5D2zTuj9AECjEQR6lv9C0PTa5BU4k4IkxNxOFg&s"
                  alt="profile"
                  className="w-20 h-20 rounded-full"
                />
              </div>

              <div className="w-full p-4 flex flex-col gap-5">
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Full Name :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    Abebe Kebde
                  </h2>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Email :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    AbebKebde@gmail.com
                  </h2>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Phone No :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    +2519-624532234
                  </h2>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Gender :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    Male
                  </h2>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Address :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    Addis Ababa
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-7 w-full">
              <h1 className="text-[16px] font-semibold text-[#48505E] pb-6">
                Work Information
              </h1>

              <div className="w-full p-4 flex flex-col gap-5">
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Job title :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    Full-stack developer
                  </h2>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Department :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    Software Engineering
                  </h2>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Branch/Office :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    Bole, Addis Ababa
                  </h2>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Employee ID :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    23d-23452232
                  </h2>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Start date :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    oct 21,2021
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <Separator orientation="vertical" className="h-screen" />

          <div className="flex flex-col w-full">
            <div className="p-5 w-full">
              <h1 className="text-[16px] font-semibold text-[#48505E] pb-6">
                Department Details:
              </h1>

              <div className="w-full p-4 flex flex-col gap-5">
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Location :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    Bole, Addis Ababa
                  </h2>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Building :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    Bemnet Mole
                  </h2>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Office No :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    2nd floor/ 454
                  </h2>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Assigned project :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    some project
                  </h2>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Gender :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    Male
                  </h2>
                </div>
              </div>
            </div>

            <div className="p-7 w-full">
              <h1 className="text-[16px] font-semibold text-[#48505E] pb-6">
                Additional Info.
              </h1>

              <div className="w-full p-4 flex flex-col gap-5">
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Full Name :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    Abebe Kebde
                  </h2>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Email :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    AbebKebde@gmail.com
                  </h2>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Phone No :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    +2519-624532234
                  </h2>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Gender :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    Male
                  </h2>
                </div>
                <div className="flex flex-col items-start sm:flex-row sm:items-center md:flex-col md:items-start lg:flex-row lg:items-center justify-start">
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2 ">
                    Address :
                  </h2>
                  <h2 className="text-[14px] text-[#858D9D] font-[500] w-1/2">
                    Addis Ababa
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4  rounded-lg">
        <h1 className="text-[18px] text-slate-700 font-medium mb-8">Reports</h1>
        <p className="font-medium text-slate-500 p-1">overview</p>
        <div className="flex items-center w-full overflow-hidden mb-4">
          <Separator className="px-6 w-20 h-[2.5px] bg-blue-500" />
          <Separator className="px-6" />
        </div>
        <div>
          <Reports />
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
