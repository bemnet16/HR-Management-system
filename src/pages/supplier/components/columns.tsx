import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
// import {  Pencil } from "lucide-react"

// import { DropdownMenu,DropdownMenuContent ,DropdownMenuTrigger,DropdownMenuItem } from "@/components/ui/dropdown-menu"
// import { Link } from "react-router-dom"

export type productType = {
    _id: string,
    product: string,
    supplierName: string,
    contactNumber: string,
    email: string,
    category: string,
    
}

export const columns: ColumnDef<productType>[] = [
   {
    accessorKey: "supplierName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          supplier Name
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      )
    },
    // cell: ({ row }) => {
    //     const supplierName = parseFloat(row.getValue("supplierName") || "0")
    //     const formattedsupplierName = Intl.NumberFormat("en-US",{
    //         style:"currency",
    //         currency:"USD"
    //     }).format(supplierName)

    //     return(<div className="">{formattedsupplierName}</div> )
    // }
  },
  {
    accessorKey: "product",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      )
    },
  },

   {
    accessorKey: "contactNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Contact Number
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      )
    },
  },
 
 {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      )
    },
  },

   {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      )
    },
    cell: ({ row }) => {
        const { category } = row.original

        return(
            <div className="text-[#5384e0]">{category}</div>
        )
    }
  },

  

 
  // {
  //   accessorKey: "action",
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //       >
  //         Action
  //         {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
  //       </Button>
  //     )
  //   },
  //   id: "actions",
  //   cell: ({ row }) => {
  //       const { _id } = row.original

  //       return(
  //           <DropdownMenu>
  //               <DropdownMenuTrigger asChild>
  //                   <Button variant="ghost" className="h-4 w-8 text-blue-700 p-0">
  //                       {/* <span className="sr-only"> */}
  //                           Open
  //                       {/* </span> */}
  //                       {/* <MoreHorizontal className="h-4 w-4"/> */}
  //                   </Button>
  //               </DropdownMenuTrigger>
  //               <DropdownMenuContent align="end">
  //                   <Link to={`/product/${_id}`}>
  //                   <DropdownMenuItem>
  //                       <Pencil className="h-4 w-4 mr-2" />
  //                       Edit
  //                   </DropdownMenuItem>
  //                   </Link>
  //               </DropdownMenuContent>
  //           </DropdownMenu>
  //       )
  //   }
  // }
]
