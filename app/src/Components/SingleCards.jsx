import './singleCard.css'
/* eslint-disable react/prop-types */

function SingleCards( { card , handlerChoices , flipped }) {
    const handleClick =()=>{
        handlerChoices(card)
    }
  return (
    <div className='card'>
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} className='front w-36 h-56 object-fill ' alt="card front" />                    
        <img src="/src/assets/coverCard.jpg" className='back w-36 h-56 object-cover' alt="card back" onClick={handleClick} />
      </div>
</div>
  )
}

export default SingleCards
