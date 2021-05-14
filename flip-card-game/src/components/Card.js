import "./Card.css";

const Card = (props) => {
  const { front, back, flipped, onClick } = props;
  const img = flipped ? front : back;
  return (
    <div className="Card" onClick={onClick}>
      <img src={img} alt="card on gameboard" />
    </div>
  );
};

export default Card;
