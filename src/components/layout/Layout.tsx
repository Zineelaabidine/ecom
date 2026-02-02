import { TopHeader } from "./TopHeader";
import {BtmHeader} from "./BtmHeader"
import { Footer } from "./Footer";

export const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div>
         <header><TopHeader/> <BtmHeader /></header>

      <main>
        {children}
      </main>

      <footer><Footer/></footer>
    </div>
  )
}
