import { Component1, LearningHooks, Component2, Component3, Component4, Component5 } from "../../Components/Archive/LearningHooks/LearningHooks"
import { BoxStatic } from "../../Components/BoxStatic/BoxStatic"
import { Carousel } from "../../Components/Carousel/Carousel"
import { CarouselProducts } from "../../Components/CarouselProducts/CarouselProducts"
import { data } from '../../constants/constants'

export const Home = () => {

  const { CONTENT: { BOX_STATIC_CONTENT, PRODUCTS } } = data;

  return (
    <>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <LearningHooks />
      <BoxStatic elems={BOX_STATIC_CONTENT} />
      <Carousel />
      <CarouselProducts products={PRODUCTS} />
    </>
  )
} 