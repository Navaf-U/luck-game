import FailedModal from "../modal/failedModal";
import SuccessModal from "../modal/successModal";
import "./card.css";
import NavBar from "./NavBar";
import SingleCards from "./SingleCards";
import { useEffect, useState } from "react";

function Cards() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [moves, setMoves] = useState(0);
  const [hasFailed, setHasFailed] = useState(false);
  const [success, setSuccess] = useState(false);

  const cardImages = [
    { src: "/src/assets/card-1.jpg", matched: false },
    { src: "/src/assets/card-2.jpg", matched: false },
    { src: "/src/assets/card-3.jpg", matched: false },
    { src: "/src/assets/card-4.jpg", matched: false },
    { src: "src/assets/card-5.jpg", matched: false },
    { src: "/src/assets/card-6.jpg", matched: false },
  ];

  const shuffleCards = () => {
    const suffledCard = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(suffledCard);
    setMoves(0);
  };

  const handlerChoices = (card) => {
    setMoves((prev) => prev + 1); // Increment move for each card flip
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prev) =>
          prev.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => {
          setHasFailed(true);
          setShowModal(true);
        }, 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    if (cards.length && cards.every((card) => card.matched)) {
      setTimeout(() => {
        setShowModal(true);
        setSuccess(true);
      }, 500);
    }
  }, [cards]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const retryForFailed = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setMoves(0);
    setHasFailed(false);
  };

  const successor = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setMoves(0);
    setHasFailed(false);
    setShowModal(false);
  };

  return (
    <div className="bg-[#060621] min-h-screen overflow-hidden h-screen">
      <div className="fixed top-0 w-full left-0 z-10">
        <NavBar />
      </div>
      <div className="text-center mt-[-20px]">
        <h1 className="text-[30px] font-[600] text-white sm:text-[24px]">Magic</h1>
      </div>

      <div className="mt-56 hidden sm:flex flex-col items-center absolute top-5 right-5 bg-[#7f23cf] text-white rounded-xl p-2 shadow-lg w-[220px]">
        <p className="text-center font-semibold">Moves</p>
        <p className="text-center text-2xl font-bold">{moves}</p>
      </div>

      <div onClick={retryForFailed} className="mt-56 hidden sm:flex flex-col items-center absolute top-5 left-16 text-white rounded-xl p-4 shadow-lg w-[220px] bg-[#c70039]">
          Play Again
      </div>

      <div className="card-grid grid grid-cols-3 gap-4 sm:grid-cols-4 xs:grid-cols-1 px-4 py-8 max-w-screen-lg mx-auto sm:w-[550px] sm:h-auto">
        {cards.map((card) => (
          <SingleCards
            handlerChoices={handlerChoices}
            key={card.id}
            card={card}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>

      <p className="sm:hidden w-full text-white font-semibold text-center absolute bottom-[-10px] bg-gradient-to-r from-purple-600 to-[#7f23cf] rounded-xl p-2 shadow-lg">
        Moves: {moves}
      </p>

      {showModal && hasFailed && (
        <FailedModal retryForFailed={retryForFailed} />
      )}
      {showModal && success && (
        <SuccessModal successor={successor} moves={moves} />
      )}
    </div>
  );
}

export default Cards;
