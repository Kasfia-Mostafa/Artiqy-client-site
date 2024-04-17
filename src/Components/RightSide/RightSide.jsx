import { BiSolidCommentDots, BiSolidHomeHeart } from "react-icons/bi";

import { HiMiniBellAlert } from "react-icons/hi2";
import { RiSettings3Fill } from "react-icons/ri";
import TrendCard from "../TrendCard/TrendCard";

const RightSide = () => {
  return (
    <div className="flex flex-col gap-2 mx-4">
      <div className="mt-4 flex justify-between">
        <BiSolidHomeHeart className="text-3xl text-blue-500 hover:text-teal-600 cursor-pointer" />
        <HiMiniBellAlert className="text-3xl text-blue-500 hover:text-teal-600 cursor-pointer" />
        <BiSolidCommentDots className="text-3xl text-blue-500 hover:text-teal-600 cursor-pointer" />
        <RiSettings3Fill className="text-3xl text-blue-500 hover:text-teal-600 cursor-pointer" />
      </div>

      <TrendCard></TrendCard>
      <button>Share</button>
    </div>
  );
};

export default RightSide;
