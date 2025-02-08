import './singleCard.css'
/* eslint-disable react/prop-types */
import coverPhoto from '../assets/coverCard.jpg'
function SingleCards( { card , handlerChoices , flipped }) {
    const handleClick =()=>{
        handlerChoices(card)
    }
  return (
    <div className='card'>
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} className='front h-full object-cover' alt="card front" />                    
        <img src={coverPhoto} className='back h-full ' alt="card back" onClick={handleClick} />
      </div>
</div>
  )
}

export default SingleCards
