import SearchId from "../SearchId/SearchId";
import ProfileCard from "../ProfileCard/ProfileCard";
import FollowersCard from "../FollowersCard/FollowersCard";
const ProfileSide = () => {
  return (
    <div>
      <SearchId></SearchId>
      <ProfileCard></ProfileCard>
      <FollowersCard></FollowersCard>
    </div>
  );
};

export default ProfileSide;
