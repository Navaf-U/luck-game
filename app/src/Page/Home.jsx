import NavBar from '../Components/NavBar'
import './Home.css'
function Home() {
  return (
  <>
  <div className='fixed top-0 w-full left-0 '>
  <NavBar/>
  </div>
    <div className="text-black flex flex-col justify-center items-center">
      <h1>Memory Game</h1>
      <div className='flex'>
        <div className="card">🐱</div>
        <div className="card">🌟</div>
        <div className="card">🚀</div>
        <div className="card">🎉</div>
      </div>
    </div>
  </>
  )
}

export default Home
