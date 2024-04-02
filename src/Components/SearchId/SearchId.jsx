import { IoSearchOutline } from "react-icons/io5";
import Artiqy from "../../assets/Artiqy.png";
const SearchId = () => {
  return (
    <div>
      <div className="flex gap-4">
      <img src={Artiqy} className="w-28 rounded-tr-3xl rounded-bl-3xl" alt="" />
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-56 h-8 p-2 mt-1 border rounded-md"
          />
        </div>
        <div className="flex items-center absolute left-80 top-4">
          <IoSearchOutline className="text-teal-500 font-semibold hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SearchId;
