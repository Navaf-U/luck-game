/* eslint-disable react-hooks/exhaustive-deps */
import FailedModal from "../modal/failedModal";
import SuccessModal from "../modal/successModal";
import "./card.css";
import NavBar from "./NavBar";
import SingleCards from "./SingleCards";
import { useEffect, useState } from "react";
import card1 from "../assets/card-1.jpg";
import card2 from "../assets/card-2.jpg";
import card3 from "../assets/card-3.jpg";
import card4 from "../assets/card-4.jpg";
import card5 from "../assets/card-5.jpg";
import card6 from "../assets/card-6.jpg";
function Cards() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [moves, setMoves] = useState(0);
  const [hasFailed, setHasFailed] = useState(false);
  const [success, setSuccess] = useState(false);

  const cardImages = [
    { src: card1, matched: false },
    { src: card2, matched: false },
    { src: card3, matched: false },
    { src: card4, matched: false },
    { src: card5, matched: false },
    { src: card6, matched: false },
  ];

  const shuffleCards = () => {
    const suffledCard = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(suffledCard);
    setMoves(0);
  };

  const handlerChoices = (card) => {
    setMoves((prev) => prev + 1);
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
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5).map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setMoves(0);
    setHasFailed(false);
  };

  return (
    <div className="bg-[#060621] min-h-screen overflow-hidden h-screen mt-4">
      <div className="fixed top-0 w-full left-0 z-10">
        <NavBar retryForFailed={retryForFailed} />
      </div>
      <div className="cursor-not-allowed  mt-56 hidden bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-xl p-3 shadow-lg border border-blue-400 border-opacity-30 animate-pulse  sm:flex flex-col items-center absolute top-5 right-5 w-[220px]">
        <p className="text-center font-semibold">Moves</p>
        <p className="text-center text-2xl font-bold">{moves}</p>
      </div>

      <div
        onClick={retryForFailed}
        className="mt-56 cursor-pointer hidden sm:flex flex-col items-center absolute top-5 left-16 text-white rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg transition-all duration-300 transform hover:scale-105  p-4 w-[220px] bg-[#c70039]"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" />
        </svg>

        Play Again
      </div>

      <div className=" grid grid-cols-3 gap-3 sm:grid-cols-4 xs:grid-cols-1 px-4 py-8 max-w-screen-lg mx-auto sm:w-[550px] sm:h-auto">
        {cards.map((card) => (
          <SingleCards
            handlerChoices={handlerChoices}
            key={card.id}
            card={card}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>

      <p className="sm:hidden w-full text-white font-semibold text-center absolute bottom-[-10px] border border-white mb-3 shadow-lg">
        Moves: {moves}
      </p>

      {showModal && hasFailed && (
        <FailedModal moves={moves} retryForFailed={retryForFailed} />
      )}
      {showModal && success && (
        <SuccessModal successor={successor} moves={moves} />
      )}
    </div>
  );
}

export default Cards;
