import { columns } from "./columns"
import { Datecolumns } from "./columns copy"
import { DataTable } from "./data-table"
import { DateDataTable } from "./data-table copy"
import { SelectEmployeeType, SelectMonth } from "./select-months"


const MonthlyAttendance = () => {
  return (
    <div className="p-2 md:p-4 mt-12  rounded-md">
        <div className="w-full flex flex-col md:flex-row items-start md:justify-between md:items-center mb-2 mt-12">
          <h1 className="text-lg font-medium">
            Attendance
          </h1>
          {/* <Button
            type="submit"
            className="bg-[#1570EF] rounded-sm font-normal hover:bg-blue-500"
          >
            Add supplier
          </Button> */}
          <div className="flex justify-center items-center gap-3">
          <SelectEmployeeType />
          <SelectMonth />
          </div>
        </div>


<div className="flex justify-start items-center w-full overflow-auto relative">
    <div className="hidden sm:block absolute z-40 bg-white top-0">
        <DataTable
          columns={columns}
          data={[
            {
              _id: "1",
              name: "Abebe Kebede",
              dates: ["a","b","c"]
            },
            {
              _id: "1",
              name: "Bemnet Adugnaw",
              dates: ["a","b","c"]
            },
            {
              _id: "1",
              name: "Derso Mulualem",
              dates: ["a","b","c"]
            },
            {
              _id: "1",
              name: "Abebe Kebede",
              dates: ["a","b","c"]
            },
            {
              _id: "1",
              name: "Bemnet Adugnaw",
              dates: ["a","b","c"]
            },
            {
              _id: "1",
              name: "Derso Mulualem",
              dates: ["a","b","c"]
            },
        ]}
        />
        </div>
        <div className="w-full ml-auto z-0">
        <DateDataTable
          columns={Datecolumns}
          data={[
               {
              _id: "1",
              name: "Abebe Kebede",
              dates: ["a","b","c"]
            },
            {
              _id: "1",
              name: "Bemnet Adugnaw",
              dates: ["a","b","c"]
            },
            {
              _id: "1",
              name: "Derso Mulualem",
              dates: ["a","b","c"]
            },
            {
              _id: "1",
              name: "Abebe Kebede",
              dates: ["a","b","c"]
            },
            {
              _id: "1",
              name: "Bemnet Adugnaw",
              dates: ["a","b","c"]
            },
            {
              _id: "1",
              name: "Derso Mulualem",
              dates: ["a","b","c"]
            },
        ]}
        />
        </div>
        </div>
      </div>    
  )
}

export default MonthlyAttendance