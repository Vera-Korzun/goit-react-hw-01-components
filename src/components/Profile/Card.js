const Card = (props) => {
  return (
    <>
      <img src={props.avatar} alt="Аватар пользователя" className="avatar" />
      <p className="name">{props.name}</p>
      <p className="tag">@{props.tag}</p>
      <p className="location">{props.location}</p>
    </>
  );
};

export default Card;
