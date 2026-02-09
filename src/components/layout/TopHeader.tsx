import { useState } from "react"
import { Link } from "react-router-dom"
import { FaRegHeart, FaSearch } from "react-icons/fa"
import { TiShoppingCart } from "react-icons/ti"
import logo from "../../assets/logo.png"
import { CartPanel } from "./CartPanel"

export const TopHeader = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)

  return (
    <div className="top-header relative">
      <div className="container">
        <div className="w-40">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>

        <form className="search-box">
          <input
            type="text"
            className="search"
            placeholder="Search For Products"
          />
          <button type="submit"><FaSearch /></button>
        </form>

        <div className="header-icons flex gap-7.5">
          <div className="icon">
            <FaRegHeart />
            <span className="count">0</span>
          </div>

          {/* Cart icon */}
          <div
            className="icon cursor-pointer"
            onClick={() => setIsCartOpen(true)}
          >
            <TiShoppingCart />
            <span className="count">0</span>
          </div>
        </div>
      </div>

      {/* Cart Panel */}
      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}
