import user from "../../data/user.json";
import Card from "./Card";
import StatsList from "./StatsList";

const Profile = () => {
  //console.log(user);
  return (
    <>
      <div className="profile">
        <div className="description">
          <Card
            name={user.name}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
          />
        </div>
        <StatsList stats={user.stats} />
      </div>
    </>
  );
};

export default Profile;
