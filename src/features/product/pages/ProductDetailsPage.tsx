import { useParams } from 'react-router-dom'
import { useProductById } from '../hooks/useProductById';
import { useEffect, useState } from 'react';
import { SlideProduct } from '../../../components/ui/SlideProduct';
import { renderStars } from '../../../utils/renderStars';
import { TiShoppingCart } from 'react-icons/ti';
import { FaRegHeart } from 'react-icons/fa';
export const ProductDetailsPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState<string>();
  // const [images, setImages] = useState<string[]>();
  const { product, images, error, loading } = useProductById(Number(id));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  useEffect(() => {
    if (images) {
      setSelectedImage(images[0])
    }
  }, [loading])

  const handlMiniImageClick = (image: string) => {
    setSelectedImage(image)
  };


  console.log(product)
  if (loading) {
    return <div className='h-screen'>
      Loading...
    </div>
  }
  if (error) {
    return <div>
      Error
    </div>
  }
  return (<div className='container justify-self-center'>
    <div className='h-auto flex-col md:flex md:flex-row justify-around'>
      {!images ? <div className='w-full md:w-[30%]'>loading images...</div> :
        <div className='images'>
          <div className="main-img h-[70%] flex">
            <img src={selectedImage} alt="" />
          </div>
          <div className="mini-imgs h-[30%] flex  justify-evenly">
            {
              images.map((img, i) => (
                <button key={i} className={`img cursor-pointer w-[24%] h-auto ${img === selectedImage ? " hidden" : ""}`} onClick={() => handlMiniImageClick(img)}>
                  <img src={img} alt="" className='w-auto h-auto' />
                </button>))
            }
          </div>
        </div>
      }
      <div className='product-details text-justify mt-30 min-w-[60%] px-10 md:px-0'>
        <h3 className='text-3xl font-bold text-main mb-6 '>{product?.title}</h3>
        <div className='flex text-2xl text-[#f5a623] mb-5'>{renderStars(product?.rating as number)}</div>
        <div className="mb-5">
          <span className='font-bold text-2xl'>${product?.price}</span>
          <span className='line-through text-xl ml-6 text-gray-500'>${product?.discountPercentage}</span>
        </div>
        <div className='flex mb-5'>Availability: <span className='text-main font-bold'>{product?.availabilityStatus}</span></div>
        <div className='mb-5'>Brand: <span className='text-main font-bold'>{product?.brand}</span></div>
        <p className='mb-5'>{product?.description}</p>
        <h4 className='font-bold text-xl text-main'>Only {product?.stock} products left in stock.</h4>
          <div className="buttons mt-5 flex items-center gap-5">
            <button className='main-btn border-0 rounded-sm'>
            Add to cart <TiShoppingCart className='text-xl'/>
          </button>
          <button className='sec-btn w-35.75 h-11 rounded-sm'>
            Favorite <FaRegHeart/>
          </button>
          </div>
      </div>
    </div>

    <div className='mt-20'>
      <SlideProduct title={product?.category || ''} description="Similare Products" />
    </div>

  </div>

  )
}
