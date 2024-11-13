import "./card.css";
import SingleCards from "./SingleCards";
import { useEffect, useState } from "react";

function Cards() {
  const [cards, setCards] = useState([]);
  const [, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  
  const cardImages = [
    { src: "/src/assets/CardDeath.jpg" , matched : false },
    { src: "/src/assets/CardDevil.jpg" ,matched : false },
    { src: "/src/assets/CardEmperor.jpg" ,matched : false },
    { src: "/src/assets/CardFool.jpg" , matched : false },
    { src: "src/assets/CardHermit.jpg", matched : false },
    { src: "/src/assets/CardQueen.jpg" ,matched : false },
  ];

  const shuffleCards = () => {
    const suffledCard = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(suffledCard);
    setTurns(0);
  };
  
//   handle the choices
  const handlerChoices = (card)=>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

//   camparing cards
useEffect(()=>{
if(choiceOne && choiceTwo){
    if(choiceOne.src === choiceTwo.src){   
        setCards(prev=>{
          return prev.map(card =>{
            if(card.src === choiceOne.src ){
              return {...card, matched : true}
            }else{
              return card
            }
          })
        })     
        resetTurn()
    }else{
        setTimeout(()=>resetTurn(),1000)
    }
}
},[choiceOne,choiceTwo])
console.log(cards)
//   handle the turns and choice
const resetTurn=()=>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prev => prev + 1)
}

  return (
    <div>
      <div className="text-center">
        <h1 className="text-[30px] font-[600] text-white">Magic</h1>
        <button onClick={shuffleCards} className="text-[30px] font-600 text-white">New game</button>
      </div>
      <div className="card-grid">
        {cards.map((card) => {
          return <SingleCards handlerChoices={handlerChoices} key={card.id} card={card}
          flipped = {card === choiceOne || card === choiceTwo || card.matched}
          />;
        })}
      </div>
    </div>
  );
}

export default Cards;
