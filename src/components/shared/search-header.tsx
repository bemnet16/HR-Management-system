import { Search } from "lucide-react"
import { Input } from "../ui/input"

const SearchHeader = () => {
  return (
    <div className="mb-5 sm:px-6 px-[2px] relative">
        <Input
          type="text"
          placeholder="Search ..."
          className="w-full md:h-12 text-lg bg-[#ECE6F0]  rounded-full p-4" />
          <Search className="absolute right-10 top-2 md:top-3"/>
    </div>
  )
}

export default SearchHeader