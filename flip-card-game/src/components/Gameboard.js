import { useState, useEffect } from "react";
import Card from "./Card";
import "./Gameboard.css";

const Gameboard = (props) => {
  let cardsOnBoard = props.cards;
  const [cards, setCards] = useState(cardsOnBoard);
  const [openCardChecker, setOpenCardChecker] = useState([]);
  const [checkCompleted, setCheckCompleted] = useState([]);
  const onCardClick = (card) => () => {
    if (
      checkerFull(openCardChecker) ||
      cardAlreadyInCheckers(openCardChecker, card)
    )
      return;
    const newCheckers = [...openCardChecker, card];
    setOpenCardChecker(newCheckers);
    const cardsInCheckersMatched = validateCheckers(newCheckers);
    if (cardsInCheckersMatched) {
      setCheckCompleted([...checkCompleted, newCheckers[0].type]);
    }
    if (checkerFull(newCheckers)) {
      resetCheckersAfter(1000);
    }
    function validateCheckers(checkers) {
      return checkers.length === 2 && checkers[0].type === checkers[1].type;
    }
    function cardAlreadyInCheckers(checkers, card) {
      return checkers.length === 1 && checkers[0].id === card.id;
    }
    function checkerFull(checkers) {
      return checkers.length === 2;
    }
    function resetCheckersAfter(time) {
      setTimeout(() => {
        setOpenCardChecker([]);
      }, time);
    }
  };

  useEffect(() => {
    const newCards = cardsOnBoard.map((card) => ({
      ...card,
      flipped:
        openCardChecker.find((curr) => curr.id === card.id) ||
        checkCompleted.includes(card.type),
    }));
    setCards(newCards);
  }, [cardsOnBoard, openCardChecker, checkCompleted]);

  return (
    <div className="Gameboard">
      {cards.map((card) => (
        <Card {...card} onClick={onCardClick(card)} key={card.id} />
      ))}
    </div>
  );
};

export default Gameboard;
