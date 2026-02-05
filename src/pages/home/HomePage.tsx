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
        <div key={cat.title } style={{paddingTop: "80px"}}
        >
          <SlideProduct
            title={cat.title.replace("-", " ")}
            description={cat.description} />
        </div>))

      }
    </Layout>
  )
}
