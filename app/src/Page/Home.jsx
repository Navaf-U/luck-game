import { useNavigate } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import './Home.css'
function Home() {
  const navigate = useNavigate()
  return (
  <div className=''>
  <div className='fixed top-0 w-full left-0'>
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
      <h1 onClick={()=>navigate("/cards")} className='cursor-pointer mt-2 bg-blue-600 rounded-md px-3'>START</h1>
    </div>
  </div>
  )
}

export default Home
