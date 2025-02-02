import './singleCard.css'
/* eslint-disable react/prop-types */

function SingleCards( { card , handlerChoices , flipped }) {
    const handleClick =()=>{
        handlerChoices(card)
    }
  return (
    <div className='card'>
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} className='front h-full object-cover' alt="card front" />                    
        <img src="/src/assets/coverCard.jpg" className='back h-full ' alt="card back" onClick={handleClick} />
      </div>
</div>
  )
}

export default SingleCards
