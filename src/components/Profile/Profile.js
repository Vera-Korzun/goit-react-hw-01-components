const Profile = (props) => {
  return (
    <>
      <img src={props.avatar} alt="Аватар пользователя" className="avatar" />
      <p class="name">{props.name}</p>
      <p class="tag">@{props.tag}</p>
      <p class="location">{props.location}</p>
    </>
  );
};

export default Profile;
