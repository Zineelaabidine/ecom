import { useState } from "react"
import { Link } from "react-router-dom"
import { FaRegHeart, FaSearch } from "react-icons/fa"
import { TiShoppingCart } from "react-icons/ti"
import logo from "../../assets/logo.png"
import { CartPanel } from "./CartPanel"
import { useCart } from "../../context/cart/useCart"
// import { useSearchForProd } from "../../features/product/hooks/useSearchForProd"
// import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { generatePath } from "../../routes/config"

export const TopHeader = () => {
  // Search state for the form input
  const [searchQuery, setSearchQuery] = useState<string>("")
  const navigate = useNavigate()
  // Cart state
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const { cartItems } = useCart();
  // Search params in the URL





  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(generatePath.search(searchQuery))
  }

  return (
    <div className="top-header relative ">
      <div className="container backdrop-blur-sm">
        <div className="w-40">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>

        <form className="search-box" onSubmit={(e) => handelSubmit(e)}>
          <input
            autoComplete="off"
            type="text"
            className="search"
            placeholder="Search For Products"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);

            }}
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
            <span className="count">{cartItems.length}</span>
          </div>
        </div>
      </div>

      {/* Cart Panel */}
      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}
