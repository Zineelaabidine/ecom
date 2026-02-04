import { Layout } from "../../components/layout/Layout"
import Hero from "./components/Hero"
import { SlideProduct } from "../../components/ui/SlideProduct"
import categories from "../../data/categoryList.json"
export const HomePage: React.FC = () => {

  return (

    <Layout>

      <Hero />
      {/* products sliders */}
      {categories?.map(cat => (<SlideProduct key={cat.title} title={cat.title} description={cat.description} />))

      }
    </Layout>
  )
}
