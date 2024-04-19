import SearchHeader from "@/components/shared/search-header";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import SibilingList from "./components/sibiling-list";


const OrgStructurePage = () => {
  return (
    <div className="py-4 md:px-4">
      <SearchHeader />
      <div className="p-2">
        <div className="flex flex-col md:flex-row items-start md:justify-between md:items-center">
          <h1 className="text-[#383E49] text-base mob-L:text-xl font-semibold mb-5">
            Human Resource
            <span className="text-[#6750A4]/80"> {">"} Org Structure </span>
          </h1>
        </div>
        {/* <FilterBadge /> */}
      </div>

      <div className="h-[2px] bg-slate-400/15 mb-6" />

      <div className="w-full flex justify-center">
        <Avatar className="w-11 h-11 ">
          <AvatarImage src="https://d2kf8ptlxcina8.cloudfront.net/YH5TFCE1QY-preview.png" />
        </Avatar>
      </div>

      <div className="flex flex-col items-center">
        <SibilingList />       
      </div>
    </div>
  );
};

export default OrgStructurePage;
