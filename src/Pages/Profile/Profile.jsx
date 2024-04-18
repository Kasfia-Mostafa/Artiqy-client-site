import PostSide from "../../Components/PostSide/PostSide"
import ProfileCard from "../../Components/ProfileCard/ProfileCard"
import ProfileLeft from "../../Components/ProfileLeft/Profile"
import RightSide from "../../Components/RightSide/RightSide"

const Profile = () => {
    return (
      <div className="relative grid grid-cols-5 gap-4 h-[100vh]">
          <ProfileLeft></ProfileLeft>
          <div className="col-span-3">
              <ProfileCard></ProfileCard>
              <PostSide></PostSide>
          </div>
          <div>
              {/* <RightSide></RightSide> */}
          </div>
      </div>
    )
  }
  
  export default Profile