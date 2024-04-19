import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import {  Pencil } from "lucide-react"

import { DropdownMenu,DropdownMenuContent ,DropdownMenuTrigger,DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

export type product = {
    _id: string,
    product: string,
    price: number,
    date: string,
    quantity: string,
    requestedby: string,
    
}

export const columns: ColumnDef<product>[] = [
  {
    accessorKey: "product",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Products
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      )
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Buying price
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      )
    },
    cell: ({ row }) => {
        const price = parseFloat(row.getValue("price") || "0")
        const formattedPrice = Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"USD"
        }).format(price)

        return(<div className="">{formattedPrice}</div> )
    }
  },
 {
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Quantity
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      )
    },
  },

   {
    accessorKey: "requestedby",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Requested By
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      )
    },
  },

   {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      )
    },
  },

 
  {
    accessorKey: "action",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Action
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      )
    },
    id: "actions",
    cell: ({ row }) => {
        const { _id } = row.original

        return(
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-4 w-8 text-blue-700 p-0">
                        {/* <span className="sr-only"> */}
                            Open
                        {/* </span> */}
                        {/* <MoreHorizontal className="h-4 w-4"/> */}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <Link to={`/product/${_id}`}>
                    <DropdownMenuItem>
                        <Pencil className="h-4 w-4 mr-2" />
                        Edit
                    </DropdownMenuItem>
                    </Link>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }
  }
]
