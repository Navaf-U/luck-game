import './singleCard.css'
/* eslint-disable react/prop-types */

function SingleCards( { card , handlerChoices , flipped }) {
    const handleClick =()=>{
        handlerChoices(card)
    }
  return (
    <div className='card'>
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} className='front w-20 h-24 ' alt="card front" />                    
        <img src="/src/assets/cover.jpg" className='back w-20 h-24' alt="card back" onClick={handleClick} />
      </div>
</div>
  )
}

export default SingleCards
