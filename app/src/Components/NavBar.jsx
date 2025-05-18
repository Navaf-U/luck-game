/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
function NavBar({ retryForFailed }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePlayAgain = () => {
    navigate("/cards")
    retryForFailed()
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-purple-700 fixed w-full top-0 z-10  ">
      <div className="flex items-center justify-between p-4 h-10 ">
        <NavLink to="/" className="text-white text-xl font-bold">
          Luck Game
        </NavLink>
        <IoMdMenu size={35} className="sm:hidden" onClick={handleMenuToggle} />
        {isMenuOpen && (
          <div className="absolute bg-black h-20 items-center flex top-10 right-0 rounded-lg shadow-lg p-4 w-40">
            <button onClick={handlePlayAgain}
              className="w-full text-white bg-[#c70039]"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
