import { Link } from "react-router-dom"
import { FaRegHeart, FaSearch } from "react-icons/fa"
import logo from '../../assets/logo.png'
import { TiShoppingCart } from "react-icons/ti"

export const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="container">
        <div className="w-40"><Link to="/"><img src={logo} alt="Logo" /></Link></div>
        <form action="" className="search-box">
          <input type="text" className="search" id="search" placeholder="Search For Products" />
          <button type="submit" className=""><FaSearch /></button>
        </form>
        <div className="header-icons flex gap-7.5">
          <div className="icon">
            <FaRegHeart />
            <span className="count">0</span>
          </div>
          <div className="icon">
            <TiShoppingCart/>
            <span className="count">0</span>
          </div>
        </div>
      </div>
    </div>
  )
}
