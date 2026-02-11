import { IoMdMenu } from 'react-icons/io'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { useProductsCategories } from '../../hooks/useProductsCategories'
import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from 'react-icons/pi';
import { FaUserPlus } from "react-icons/fa";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { generatePath } from '../../routes/config';

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
              {isCategoryOpen &&
                <span className='fixed inset-0 cursor-default'/>
              }
            </div>
            {isCategoryOpen && (<div className="category-nav-list z-10">
              {loading && <p>Loading...</p>}
              {error && <p>{error.message}</p>}
              {categories?.map(cat => <Link className='category-nav-link' to={generatePath.productsByCategory(cat.slug)} key={`${cat.name}`}>{`${cat.name}`}</Link>)}
            </div>)}
          </div>
          <div className="nav-links ">
            {Navlinks.map(lnk => (<Link key={lnk.link} to={`${lnk.link}`} className={`nav-link ${location.pathname === lnk.link ? "active" : ""}`}>{lnk.title}</Link>))}
          </div>

        </nav>
        <div className="sign-regs-icon">
          <Link to="/signup"><PiSignInBold /></Link>
          <Link to="/login"><FaUserPlus /></Link>
        </div>
        <div className="close-button absolute right-0 mr-3 z-100 flex items-center text-white text-3xl lg:hidden">

          {/* Toggle button */}
          <div onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <IoClose /> : <IoMdMenu />}
          </div>

          {/* Mobile Menu */}
          <div
            className={`
                      absolute right-[24px] top-full
                      w-[200px] rounded-2xl
                        bg-blue-600/50                     
                      flex flex-col items-center
                      transition-all duration-500 ease-in-out
                      ${isMobileMenuOpen
                ? "max-h-[500px] opacity-100 scale-y-100"
                : "max-h-0 opacity-0 scale-y-95 h-0"
              }
                    `}
          >
            {/* Links */}
            <div className="flex flex-col gap-2 w-[80%] text-lg text-center py-2">
              {Navlinks.map((lnk) => (
                <Link
                  style={{ color: "white" }}
                  key={lnk.link}
                  to={lnk.link}
                  className={`${isMobileMenuOpen ? "" : "hidden "} mobile-nav-link border-b border-border py-2`}
                >
                  {lnk.title}
                </Link>
              ))}
            </div>

            {/* Auth buttons */}
            <div
              className={`
                          flex flex-col gap-2 text-2xl w-full items-center pb-3
                          transition-opacity duration-300
                          ${isMobileMenuOpen ? "opacity-100" : "opacity-0 hidden"}
                        `}
            >
              <Link
                to="/signup"
                className="border-b border-border w-[80%] flex justify-center py-2"
              >
                <PiSignInBold className='text-whitee' />
              </Link>

              <Link to="/login">
                <FaUserPlus className='text-whitee' />
              </Link>
            </div>
          </div>
        </div>


      </div>


    </div>
  )
}
