import user from "./data/user.json";
import Profile from "./Profile/Profile";
import StatsList from "./Profile/StatsList";

const App = () => {
  return (
    <>
      <div className="profile">
        <div className="description">
          <Profile
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

export default App;
