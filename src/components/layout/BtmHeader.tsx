import { IoMdMenu } from 'react-icons/io'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { useProductsCategories } from '../../hooks/useProductsCategories'
import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from 'react-icons/pi';
import { FaUserPlus } from "react-icons/fa";
import { useState } from 'react';

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
          <div className="nav-links">
            {Navlinks.map(lnk => (<Link key={lnk.link} to={`${lnk.link}`} className={`nav-link ${location.pathname === lnk.link ? "active" : ""}`}>{lnk.title}</Link>))}
          </div>
        </nav>
        <div className="sign-regs-icon">
          <Link to="/signup"><PiSignInBold /></Link>
          <Link to="/login"><FaUserPlus /></Link>
        </div>
      </div>


    </div>
  )
}
