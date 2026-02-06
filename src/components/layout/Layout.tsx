import { TopHeader } from "./TopHeader";
import {BtmHeader} from "./BtmHeader"
import { Footer } from "./Footer";
import { Outlet } from 'react-router-dom';  

export const Layout = () => {
  return (
    <div>
         <header><TopHeader/> <BtmHeader /></header>

      <main>
        <Outlet/>
      </main>

      <footer><Footer/></footer>
    </div>
  )
}
