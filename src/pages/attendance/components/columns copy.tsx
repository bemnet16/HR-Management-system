import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ColumnDef } from "@tanstack/react-table"
import { Link } from "react-router-dom"
// import {  Pencil } from "lucide-react"

// import { DropdownMenu,DropdownMenuContent ,DropdownMenuTrigger,DropdownMenuItem } from "@/components/ui/dropdown-menu"
// import { Link } from "react-router-dom"

export type productType = {
    _id: string,
    name: string,
    dates: string[]
    
}

export const Datecolumns: ColumnDef<productType>[] = [
   {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="h-[100px] p-5"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      )
    },
    cell: ({ row }) => {
        return(<div className="flex justify-between w-[170px]"><Link to={`/employee/${row.original._id}`}>
            {row.getValue("name")}
          </Link> <span>(65%)</span></div> )
    }
  },
 
  
  {
    accessorKey: "dates",
    header: () => {
      return(
       <div className="flex justify-between items-center w-full ">
        {Array.from({length: 30}).map((_,i) => {
          return(
            <p key={i} className="text-xs w-12 -rotate-90">
              {i + 1}/02/2024
            </p>
          )
        })}
       </div>
      )
    },
    cell: () => {
      // const d: string[] = row.getValue("dates")
      return(
        <div className="flex justify-between items-center w-full">
        {Array.from({length: 30}).map((_,i) => {
          return(
           <div key={i} className="w-10">
            <Checkbox  />
           </div>
          )
        })}
       </div>
      )
    }
  }

 
//  {
//     accessorKey: "email",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           Email
//           {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
//         </Button>
//       )
//     },
//   },


  

 
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
