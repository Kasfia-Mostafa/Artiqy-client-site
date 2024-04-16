import { CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

const Post = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-col gap-4 bg-blue-400 gap-4">
      <img
        className="w-full max-h-80 object-fit rounded-md"
        // src={post.img}
        alt=""
      />

      <div className="flex gap-2 item-start">
        <CiHeart />
        <FaRegCommentDots />
        <IoMdShare />
      </div>

      <span>
        {/* <b>{post.likes} likes</b> */}
      </span>
      <div>
        <span>
          {/* <b>{post.name}</b> */}
        </span>
        {/* <span>{post.des}</span> */}
      </div>
    </div>
  );
};

export default Post;
