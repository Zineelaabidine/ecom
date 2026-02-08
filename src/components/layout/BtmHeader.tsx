import { IoMdMenu } from 'react-icons/io'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { useProductsCategories } from '../../hooks/useProductsCategories'
import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from 'react-icons/pi';
import { FaUserPlus } from "react-icons/fa";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

const Navlinks = [
  { title: "Home", link: "/" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },

]

export const BtmHeader = () => {
  const { categories, error, loading } = useProductsCategories();
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  return (
    <div className='btm-header'>
      <div className="container">
        <nav className="nav">
          <div className="category-nav" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
            <div className={`category-btn`}>
              <IoMdMenu />
              <span>Browse category</span>
              <MdOutlineArrowDropDown className={`${isCategoryOpen ? 'transition-transform duration-300 rotate-180' : ''}`} />
            </div>
            {isCategoryOpen && (<div className="category-nav-list z-10">
              {loading && <p>Loading...</p>}
              {error && <p>{error.message}</p>}
              {categories?.map(cat => <Link className='category-nav-link' to={`${cat.slug}`} key={`${cat.name}`}>{`${cat.name}`}</Link>)}
            </div>)}
          </div>
          <div className="nav-links ">
            {Navlinks.map(lnk => (<Link key={lnk.link} to={`${lnk.link}`} className={`nav-link ${location.pathname === lnk.link ? "active" : ""}`}>{lnk.title}</Link>))}
          </div>
          {/* mobile nav */}

        </nav>
        <div className="sign-regs-icon">
          <Link to="/signup"><PiSignInBold /></Link>
          <Link to="/login"><FaUserPlus /></Link>
        </div>
        <div className="close-button absolute text-white right-0 text-3xl mr-3 z-100 items-center lg:hidden">
          <div onClick={() => {setIsMobileMenuOpen(!isMobileMenuOpen)}}>{isMobileMenuOpen ? (<IoClose />) : (<IoMdMenu />)}</div>
          <div className="mobile-nav flex text-lg text-center w-[200px] pb-1 z-10 justify-self-end lg:hidden absolute right-[-12px] bg-main min-w-1/2 justify-center top">
            <div className={`mobile-nav-links flex flex-col gap-2 w-full ${!isMobileMenuOpen ? "hidden" : ""}`}>
              {Navlinks.map(lnk => (<Link key={lnk.link} to={`${lnk.link}`} style={{ color: "white" }} className={`mobile-nav-link border-b border-border last:border-b-0 hover:bg-blue-500 h-full py-2 ${location.pathname === lnk.link ? "active" : ""}`}>{lnk.title}</Link>))}
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}
