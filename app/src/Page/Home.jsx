/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import './Home.css'
import homeHero from '../assets/homeHero.png'

const Clover = ({ style }) => {
  return (
    <div 
      className="absolute pointer-events-none"
      style={style}
    >
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-green-500">
        <path 
          d="M50,15 C42,15 35,22 35,30 C35,38 42,45 50,45 C58,45 65,38 65,30 C65,22 58,15 50,15 Z
             M35,50 C27,50 20,57 20,65 C20,73 27,80 35,80 C43,80 50,73 50,65 C50,57 43,50 35,50 Z
             M65,50 C57,50 50,57 50,65 C50,73 57,80 65,80 C73,80 80,73 80,65 C80,57 73,50 65,50 Z
             M50,55 C42,55 35,62 35,70 C35,78 42,85 50,85 C58,85 65,78 65,70 C65,62 58,55 50,55 Z" 
          fill="currentColor" 
          fillOpacity="0.7"
        />
      </svg>
    </div>
  )
}

const LuckStar = ({ style }) => {
  return (
    <div 
      className="absolute pointer-events-none"
      style={style}
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-yellow-300">
        <path 
          d="M12,1 L15,9 L23,9 L17,14 L19,22 L12,17 L5,22 L7,14 L1,9 L9,9 Z" 
          fill="currentColor" 
          fillOpacity="0.8"
        />
      </svg>
    </div>
  )
}

const HorseShoe = ({ style }) => {
  return (
    <div 
      className="absolute pointer-events-none"
      style={style}
    >
      <svg viewBox="0 0 100 100" className="w-10 h-10 text-gray-400">
        <path 
          d="M25,20 C15,30 10,50 15,70 C20,85 30,90 40,90 C45,90 47,85 47,80 C47,75 45,70 40,70 C35,70 30,65 25,55 C20,45 25,30 30,25 Z
             M75,20 C85,30 90,50 85,70 C80,85 70,90 60,90 C55,90 53,85 53,80 C53,75 55,70 60,70 C65,70 70,65 75,55 C80,45 75,30 70,25 Z" 
          fill="currentColor" 
          fillOpacity="0.7"
          stroke="currentColor"
          strokeWidth="3"
        />
      </svg>
    </div>
  )
}

function Home() {
  const navigate = useNavigate()
  const [animations, setAnimations] = useState([])
  
  useEffect(() => {
    const elements = []
    
    for (let i = 0; i < 12; i++) {
      const delay = Math.random() * 10
      const duration = 7 + Math.random() * 10
      const startX = Math.random() * 100
      const endX = startX + (Math.random() * 30 - 15)
      
      elements.push({
        type: 'clover',
        style: {
          left: `${startX}vw`,
          top: '120vh',
          opacity: 0.1 + Math.random() * 0.6,
          transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`,
          animation: `float ${duration}s linear ${delay}s infinite`,
          '--end-x': `${endX}vw`,
        }
      })
    }
    
  
    for (let i = 0; i < 8; i++) {
      const delay = Math.random() * 15
      const duration = 5 + Math.random() * 12
      const startX = Math.random() * 100
      const endX = startX + (Math.random() * 40 - 20)
      
      elements.push({
        type: 'star',
        style: {
          left: `${startX}vw`,
          top: '120vh',
          opacity: 0.2 + Math.random() * 0.8,
          transform: `rotate(${Math.random() * 360}deg)`,
          animation: `floatStar ${duration}s linear ${delay}s infinite`,
          '--end-x': `${endX}vw`,
        }
      })
    }
    
  
    for (let i = 0; i < 5; i++) {
      const delay = Math.random() * 12
      const duration = 10 + Math.random() * 12
      const startX = Math.random() * 100
      const endX = startX + (Math.random() * 30 - 15)
      
      elements.push({
        type: 'horseshoe',
        style: {
          left: `${startX}vw`,
          top: '120vh',
          opacity: 0.2 + Math.random() * 0.6,
          transform: `rotate(${Math.random() * 360}deg) scale(${0.6 + Math.random() * 0.7})`,
          animation: `floatHorseshoe ${duration}s linear ${delay}s infinite`,
          '--end-x': `${endX}vw`,
        }
      })
    }
    
    setAnimations(elements)
  }, [])
  
  return (
    <div className="h-screen flex justify-center items-center overflow-hidden relative">
      <img src={homeHero} alt="" className="w-full h-full absolute z-[-1] blur-sm" />
      
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0) rotate(0deg); opacity: 0; }
              10% { opacity: 0.7; }
              90% { opacity: 0.7; }
              100% { transform: translateY(-120vh) translateX(calc(var(--end-x) - left)) rotate(360deg); opacity: 0; }
            }
            
            @keyframes floatStar {
              0% { transform: translateY(0) scale(0.1); opacity: 0; }
              10% { opacity: 1; transform: translateY(-20vh) scale(0.8); }
              70% { opacity: 1; transform: translateY(-80vh) scale(1.2); }
              100% { transform: translateY(-120vh) translateX(calc(var(--end-x) - left)) scale(0.4); opacity: 0; }
            }
            
            @keyframes floatHorseshoe {
              0% { transform: translateY(0) rotate(0deg); opacity: 0; }
              10% { opacity: 0.6; transform: rotate(20deg); }
              90% { opacity: 0.6; transform: translateY(-100vh) translateX(calc(var(--end-x) - left)) rotate(340deg); }
              100% { transform: translateY(-120vh) translateX(calc(var(--end-x) - left)) rotate(360deg); opacity: 0; }
            }
            
            @keyframes pulseGlow {
              0% { box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.3); }
              50% { box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.5); }
              100% { box-shadow: 0 0 10px 5px rgba(255, 255, 255, 0.3); }
            }
          `}
        </style>
        
        {animations.map((item, index) => {
          if (item.type === 'clover') {
            return <Clover key={`clover-${index}`} style={item.style} />
          } else if (item.type === 'star') {
            return <LuckStar key={`star-${index}`} style={item.style} />
          } else {
            return <HorseShoe key={`horseshoe-${index}`} style={item.style} />
          }
        })}
      </div>
      
      <div className="fixed top-0 left-0">
        <NavBar />
      </div>
      
      <div className="text-black flex flex-col justify-center items-center shadow-lg shadow-black h-56 w-72 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg relative z-10 border border-white border-opacity-20">
        <h1 className="text-white text-[35px] font-semibold">Luck Game</h1>
        
        <h1 
          onClick={() => navigate("/cards")} 
          className="cursor-pointer mt-6 bg-blue-600 hover:bg-blue-700 rounded-md px-3 py-2 w-56 text-center font-semibold text-white transition-all duration-300"
          style={{animation: "pulseGlow 2s infinite"}}
        >
          START
        </h1>
      </div>
    </div>
  )
}

export default Home