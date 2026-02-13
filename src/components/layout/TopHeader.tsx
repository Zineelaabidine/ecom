import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaRegHeart, FaSearch } from "react-icons/fa"
import { TiShoppingCart } from "react-icons/ti"
import logo from "../../assets/logo.png"
import { CartPanel } from "./CartPanel"
import { useCart } from "../../context/cart/useCart"
import { useNavigate } from "react-router-dom"
import { generatePath } from "../../routes/config"
import { useSearchForProd } from "../../features/product/hooks/useSearchForProd"
export const TopHeader = () => {

  const [isSearchResultListOpen, setIsSearchResultOpen] = useState(false)
  // Search state for the form input
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");
  const navigate = useNavigate()
  // Cart state
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false)
  const { cartItems } = useCart();
  //fetching product with the costum hook & debouncedQuery
  // Search params in the URL

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(generatePath.search(searchQuery))
  }
  +
    // debounced fetching
    useEffect(() => {
      const timerId = setTimeout(() => {
        setDebouncedQuery(searchQuery)
      }, 1000);
      return () => clearTimeout(timerId)
    }, [searchQuery])

  const { products, loading, error } = useSearchForProd(debouncedQuery)

  return (
    <div className="top-header relative ">
      <div className="container">
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
              const value = e.target.value;
              setSearchQuery(value);

              if (value.trim()) {
                setIsSearchResultOpen(true);
              } else {
                setIsSearchResultOpen(false); 
              }
            }}
          />
          <button type="submit"><FaSearch /></button>
          {(isSearchResultListOpen && products.length > 0) && <>
          <div className={`search-results z-200 bg-whitee
             border border-border absolute top-full left-0 right-0
             rounded-lg ${(products.length > 0 || searchQuery.trim() !== "") ? "" : "hidden"}`}>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {products.length > 0 && products?.slice(0, 5).map(prod => (
              <Link
              onClick={() => { setIsSearchResultOpen(false); setSearchQuery("") }}
              to={generatePath.productDetails(prod.id)} className="search-row p-1 flex items-center  gap-1 border-b border-b-border rounded-t-lg hover:bg-border">
                <div className="img w-12 h-auto">
                  <img src={prod.thumbnail} alt={prod.title} />
                </div>
                <h2 className="text-main">{prod.title}</h2>
              </Link>
            ))}
          </div>
                <span onClick={()=> setIsSearchResultOpen(false)} className='fixed inset-0 cursor-default'/>
            </>
          }
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
