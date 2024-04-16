import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'

const Posts = () => {

    console.log(PostsData)
  return (
    <div className="flex flex-col gap-4">
        {
            PostsData.map((post,id)=>{
                return <Post data={post} id={id} key={id}></Post>
            })
        }
    </div>
  )
}

export default Posts;