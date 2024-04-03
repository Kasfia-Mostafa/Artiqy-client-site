import { Followers } from "../../Data/Data";
const FollowersCard = () => {
  return (
    <div className="w-5/6 rounded-md gap-4 flex justify-center flex-col p-4">
      <div>
        <h3 className="font-bold text-lg text-sky-700">
          Who is following you ?
        </h3>
        <hr className="my-3" />
        {Followers.map((follower, id) => {
          return (
            <div key={follower.id} className="flex justify-between">
              <div className="flex gap-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={follower.img}
                  alt="follower Image"
                />
                <div className="grid grid-row-1">
                  <span className="font-semibold">{follower.name}</span>
                  <span>@{follower.username}</span>
                </div>
              </div>
              <button className="border-2 w-20 h-8 text-white bg-teal-400 hover:bg-teal-600 rounded-md">
                Follow
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FollowersCard;
