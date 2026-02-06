 import Hero from "./components/Hero"
import { SlideProduct } from "../../components/ui/SlideProduct"
import categories from "../../data/categoryList.json"
export const HomePage: React.FC = () => {

  return (

    <>

      <Hero />
      {/* products sliders */}
      {categories?.map(cat => (
        <div key={cat.title } style={{paddingTop: "80px"}}
        >
          <SlideProduct
            title={cat.title}
            description={cat.description} />
        </div>))

      }
    </>
  )
}
