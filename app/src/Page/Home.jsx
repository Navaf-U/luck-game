import { useNavigate } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import './Home.css'
function Home() {
  const navigate = useNavigate()
  return (
  <div className='h-screen flex justify-center items-center'>
  <div className='fixed top-0 left-0'>
  <NavBar />
  </div>
    <div className="text-black flex flex-col justify-center items-center">
      <h1 className='text-white text-[35px] font-semibold'>Memory Game</h1>
      <div className='flex'>
      </div>
      <h1 onClick={()=>navigate("/cards")} className='cursor-pointer mt-2 bg-blue-600 rounded-md px-3 py-2 w-56 text-center font-semibold'>START</h1>
    </div>
  </div>
  )
}

export default Home
