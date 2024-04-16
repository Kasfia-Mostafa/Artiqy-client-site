import Post from "../Post/Post"
import PostShare from "./PostShare/PostShare"

const PostSide = () => {
  return (
    <div className="flex flex-col gap-4 h-[100vh] overflow-auto">
      <PostShare></PostShare>
      <Post></Post>
    </div>
  )
}

export default PostSide
