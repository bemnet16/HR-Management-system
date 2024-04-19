import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";

const DashboardPage = () => {
  //* TODO: Fetch data from server and render.

  return (
    <div className="py-6 md:px-4">
      <div className="flex flex-col bg-white p-4 rounded-md mb-10">
        <h1 className="text-[#383E49] text-xl font-semibold mb-5">
          Overall inventory
        </h1>

        <div className="flex flex-1 flex-col lg:flex-row ">
          <div className="flex flex-1 flex-col sm:flex-row ">
            <div className="flex mr-7 pl-4 flex-col w-full justify-between items-start gap-2 border-r-2 border-slate-200 pb-8 sm:pb-4">
              <p className="text-[18px] text-[#1366d9] font-semibold">
                Categories
              </p>
              <div className="text-lg font-semibold text-slate-600">14</div>
              <div className="text-sm text-slate-500">Last 7 days</div>
            </div>

            <div className="flex mr-7 pl-4 flex-col w-full justify-between items-start gap-2 border-r-2 border-slate-200 pb-8 sm:pb-4">
              <p className="text-[18px] text-[#e18308] font-semibold">
                Total Products
              </p>
              <div className="text-lg font-semibold text-slate-600">14</div>
              <div className="text-sm text-slate-500">Last 7 days</div>
            </div>
          </div>

          <div className="flex flex-1 flex-col sm:flex-row ">
            <div className="flex mr-7 pl-4 flex-col w-full justify-between items-start gap-2 border-r-2 border-slate-200 pb-8 sm:pb-4">
              <p className="text-[18px] text-[#845EBC] font-semibold">
                Ordered Products
              </p>
              <div className="text-lg font-semibold text-slate-600">14</div>
              <div className="text-sm text-slate-500">Last 7 days</div>
            </div>

            <div className="flex mr-7 pl-4 flex-col w-full justify-between items-start gap-2 border-r-2 border-slate-200 pb-8 sm:pb-4 lg:border-none">
              <p className="text-[18px] text-[#da3e33] font-semibold">
                Low Stocks items
              </p>
              <div className="text-lg font-semibold text-slate-600">14</div>
              <div className="text-sm text-slate-500">Last 7 days</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-2 md:p-4 bg-white rounded-md">
        <div className="flex flex-col md:flex-row items-start md:justify-between md:items-center mb-2">
          <h1 className="text-[#383E49] text-xl font-semibold mb-5">
            Product Requests
          </h1>
          <div className="flex gap-2">
            <Button className=" bg-white border-2 border-slate-300 text-slate-600 text-[16px] font-[400] hover:bg-slate-100">
              <ListFilter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button className="bg-white border-2 border-slate-300 text-slate-600 text-[16px] font-[400] hover:bg-slate-100">
              Print list
            </Button>
          </div>
        </div>

        <DataTable
          columns={columns}
          data={[
            {
              _id: "1",
              price: 34,
              product: "Cemnet",
              requestedby: "Abebe K",
              quantity: "43 packet",
              date: "2/2/2024",
            },
            {
              _id: "1",
              price: 434,
              product: "Cemnet",
              requestedby: "Abebe K",
              quantity: "43 packet",
              date: "2/2/2024",
            },
            {
              _id: "1",
              price: 43,
              product: "Cemnet",
              requestedby: "Abebe K",
              quantity: "43 packet",
              date: "2/2/2024",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
