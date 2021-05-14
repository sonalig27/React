import Gameboard from "./components/Gameboard";
import "./App.css";
import back from "./assets/purple_back.png";
import king_black from "./assets/KC.png";
import queen_red from "./assets/QH.png";
import ace_black from "./assets/AS.png";
import three_red from "./assets/3D.png";
import five_black from "./assets/5C.png";
import seven_red from "./assets/7H.png";
// import { useState } from "react";
// import nine_black from "./assets/9S.png";
// import jack_red from "./assets/JD.png";

function cardsOnBoard() {
  let id = 0;
  const images = {
    king_black,
    queen_red,
    ace_black,
    three_red,
    five_black,
    seven_red,
    // nine_black,
    // jack_red,
  };
  const cards = Object.keys(images).reduce((result, item) => {
    const createCard = () => ({
      id: id++,
      type: item,
      back,
      front: images[item],
      flipped: false,
    });
    return [...result, createCard(), createCard()];
  }, []);
  return shuffleCards(cards);
}

function shuffleCards(arr) {
  var currentIndex = arr.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temporaryValue;
  }

  return arr;
}

function App() {
  const cards = cardsOnBoard();
  // const [resetBoard, setResetBoard] = useState(false);

  // const resetBoardHandler = () => {
  //   setResetBoard(true);
  // };

  // if (resetBoard) {
  //   shuffleCards(cards);
  //   setResetBoard(false);
  // }
  return (
    <div className="App">
      <header>
        <h1>Flip Card Game</h1>
      </header>
      <Gameboard cards={cards} shuffleCards={shuffleCards} />
    </div>
  );
}

export default App;
