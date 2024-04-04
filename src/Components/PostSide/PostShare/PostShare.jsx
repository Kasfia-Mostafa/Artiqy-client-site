import { useContext } from "react";
import { AuthContext } from "../../../Utility/Providers/AuthProviders";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
const PostShare = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex gap-4 bg-[#e6f2fc] p-4 rounded-md">
      <div>
        <img className="rounded-full w-10" src={user?.photoURL} alt="" />
      </div>
      <div className="w-full space-y-4">
        <input
          className="outline-none w-full rounded-lg p-2 bg-gray-200 "
          type="text"
          placeholder="Share your imaginations..."
        />
        <div className="flex justify-around">
          <div className="flex justify-center items-center gap-2">
            <UilScenery className="text-teal-600" />
            Photo
          </div>
          <div className="flex justify-center items-center gap-2">
            <UilPlayCircle className="text-sky-600" />
            Video
          </div>
          <div className="flex justify-center items-center gap-2">
            <UilLocationPoint className="text-teal-600" />
            Location
          </div>
          <div className="flex justify-center items-center gap-2">
            <UilSchedule className="text-sky-600" />
            Schedule
          </div>
          <button className="group relative z-10 h-8 w-20 overflow-hidden rounded-md bg-sky-700 text-sm text-white">
            <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span>
            <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-700 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span>
            <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-900 transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span>
            <span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">
              Share
            </span>
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostShare;
