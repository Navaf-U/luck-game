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
        setMoves((prev) => prev + 1);
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
    setMoves((prev) => prev + 1);
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
    <div className="bg-[#060621] h-screen">
      <div className="fixed top-0 w-full  left-0">
        <NavBar />
      </div>
      <div className="text-center">
        <h1 className="text-[30px] font-[600] text-white">Magic</h1>
      </div>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCards
            handlerChoices={handlerChoices}
            key={card.id}
            card={card}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
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
