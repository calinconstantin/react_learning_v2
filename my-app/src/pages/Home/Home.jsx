import { BoxStatic } from "../../Components/BoxStatic/BoxStatic"
import { Carousel } from "../../Components/Carousel/Carousel"
import { CarouselProducts } from "../../Components/CarouselProducts/CarouselProducts"
import { data } from '../../constants/constants'

export const Home = () => {

  const { CONTENT: { BOX_STATIC_CONTENT, PRODUCTS } } = data;

  return (
    <>
      <BoxStatic elems={BOX_STATIC_CONTENT} />
      <Carousel />
      <CarouselProducts products={PRODUCTS} />
    </>
  )
} 