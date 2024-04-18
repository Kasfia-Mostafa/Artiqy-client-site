import FollowersCard from "../FollowersCard/FollowersCard"
import InfoCard from "../InfoCard.jsx/InfoCard"
import SearchId from "../SearchId/SearchId"

const ProfileLeft = () => {
  return (
    <div className=''>
        <SearchId></SearchId>
        <InfoCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileLeft

