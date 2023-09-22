import { Input } from "./input";
import SearchCommand from "@/components/SearchCommand";

export function Search() {
  return (
    <div>
      {/* <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      /> */}
      <SearchCommand />
    </div>
  );
}
