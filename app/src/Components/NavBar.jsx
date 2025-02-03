import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-purple-700 fixed w-full top-0 z-10">
      <div className="flex items-center justify-between p-4">
        <NavLink to="/" className="text-white text-xl font-bold">
          Memory Game
        </NavLink>
        <IoMdMenu onClick={handleMenuToggle}/>
        {isMenuOpen && (
          <div className="absolute top-16 right-0 rounded-lg shadow-lg p-4 w-40">
            <button
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
