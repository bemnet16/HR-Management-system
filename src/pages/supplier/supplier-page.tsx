import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { Addsupplier } from "./components/addsupplier";
// import { Button } from "@/components/ui/button";

const SupplierPage = () => {
  return (
    <div className="py-8 px-4">
      <div className="p-2 md:p-4 bg-white rounded-md">
        <div className="flex flex-col md:flex-row items-start md:justify-between md:items-center mb-2">
          <h1 className="text-[#383E49] text-xl font-semibold mb-5">
            Suppliers
          </h1>
          {/* <Button
            type="submit"
            className="bg-[#1570EF] rounded-sm font-normal hover:bg-blue-500"
          >
            Add supplier
          </Button> */}
          <Addsupplier />
        </div>

        <DataTable
          columns={columns}
          data={[
            {
              _id: "1",
              product: "Cemnet",
              supplierName: "Abebe K",
              email: "bemnetadugnaw@gmail.com",
              category: "Structure",
              contactNumber: "0912345678",
            },
            {
              _id: "1",
              product: "Cemnet",
              supplierName: "Abebe K",
              email: "bemnetadugnaw@gmail.com",
              category: "Structure",
              contactNumber: "0912345678",
            },
            {
              _id: "1",
              product: "Cemnet",
              supplierName: "Abebe K",
              email: "bemnetadugnaw@gmail.com",
              category: "Structure",
              contactNumber: "0912345678",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default SupplierPage;
