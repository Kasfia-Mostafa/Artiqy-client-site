import ProfileSide from "../../Components/ProfileSide/ProfileSide"

const Home = () => {
  return (
    <div className="relative grid grid-cols-4 gap-4">
      <div className="col-span-1">
        <ProfileSide></ProfileSide>
      </div>



      <div className="col-span-2">Post</div>
      <div className="col-span-1">Right</div>
    </div>
  )
}

export default Home
