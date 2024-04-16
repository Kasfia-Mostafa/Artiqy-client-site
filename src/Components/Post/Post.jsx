import { FaHeart, FaRegCommentDots } from "react-icons/fa";
import Share from "../Buttons/Share/Share";

const Post = ({ post }) => {
  return (
    <div className="flex flex-col gap-4 bg-sky-100 p-2">
      <img
        className="w-full max-h-96 object-fit rounded-md"
        src={post.img}
        alt=""
      />

      <div className="flex gap-4 items-start justify-around">
        <FaHeart className="text-2xl text-blue-700 hover:text-teal-600" />
        <FaRegCommentDots className="text-2xl text-blue-700 hover:text-teal-600" />
        <div>
        <Share />
        </div>
      </div>

      <span>
        <b>{post.likes} likes</b>
      </span>
      <div>
        <span>
          <b>{post.name} </b>
        </span>
        <span>{post.desc}</span>
      </div>
    </div>
  );
};

export default Post;
