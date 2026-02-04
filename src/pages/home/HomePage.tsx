import { Layout } from "../../components/layout/Layout"
import Hero from "./components/Hero"
import { SlideProduct } from "../../components/ui/SlideProduct"
import categories from "../../data/categoryList.json"
export const HomePage: React.FC = () => {

  return (

    <Layout>

      <Hero />
      {/* products sliders */}
      {categories?.map(cat => (
        <div style={{paddingTop: "50px"}}>
          <SlideProduct
            key={cat.title}
            title={cat.title}
            description={cat.description} />
        </div>))

      }
    </Layout>
  )
}
