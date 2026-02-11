import { TopHeader } from "./TopHeader";
import { BtmHeader } from "./BtmHeader"
import { Footer } from "./Footer";
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const handleScroll = () => {
    console.log("scrolling")
  }
  window.addEventListener('scroll', handleScroll);

  return (
    <div>
      <header className="sticky top-0 z-50"><TopHeader /> <BtmHeader /></header>
      <main>
        <Outlet />
      </main>

      <footer><Footer /></footer>
    </div>
  )
}
