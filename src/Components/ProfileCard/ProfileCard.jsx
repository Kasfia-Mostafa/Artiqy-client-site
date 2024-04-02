const ProfileCard = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[340px] md:w-[350px] bg-white my-5 p-6 md:p-8 shadow-md rounded-2xl space-y-5">
        {/* profile image & bg  */}
        <div className="relative">
          <img
            className="w-full h-full rounded-2xl bg-gray-500"
            src="https://i.ibb.co/ng6HcYM/one-piece-anime.jpg"
            alt="card navigate ui"
          />
          <img
            className="w-[100px] h-[100px] absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-gray-400 "
            src="https://i.ibb.co/qRL0kcB/The-Promised-Neverland.jpg"
            alt="card navigate ui"
          />
        </div>
        {/* profile name & role */}
        <div className="pt-8 text-center">
          <h1 className="text-xl md:text-2xl">Shiyam Sarker</h1>
          <p className="text-gray-400 text-sm">Product Designer</p>
        </div>
        {/* post , followers following  */}
        <hr />
        <div className="flex flex-wrap px-4 md:px-8 justify-between">
          <div className="text-center ">
            <h5 className="font-medium text-xl">17</h5>
            <p className="text-sm  text-gray-400">Post</p>
          </div>
          <div className="text-center">
            <h5 className="font-medium text-xl">9.7k</h5>
            <p className="text-sm  text-gray-400">Followers</p>
          </div>
          <div className="text-center">
            <h5 className="font-medium text-xl">217</h5>
            <p className="text-sm  text-gray-400">Following</p>
          </div>
          <button className="hover:bg-[#f0f8ff] hover:scale-95 font-medium hover:text-black w-[100%] py-2 rounded-xl hover:shadow-xl   text-black shadow-[0px_0px_10px_#E2DADA]  duration-500 mt-5">
            My Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;