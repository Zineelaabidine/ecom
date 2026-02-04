import { Layout } from "../../components/layout/Layout"
import Hero from "./components/Hero"
import { SlideProduct } from "../../components/ui/SlideProduct"

export const HomePage: React.FC = () => {
 
  return (

    <Layout>
      
        <Hero />
        {/* products sliders */}
        <SlideProduct title='smartphones' description='add bestselling products to weekly line up'/>
        <SlideProduct title='smartphones' description='add bestselling products to weekly line up'/>
    
    </Layout>
  )
}
