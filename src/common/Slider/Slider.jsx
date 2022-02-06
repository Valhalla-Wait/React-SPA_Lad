import React from "react";
import style from './Slider.module.scss'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";

const Carousel = ({children}) => {

  const ITEM_WIDTH = 530

  const [offset, setOffset] = useState(0)

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + ITEM_WIDTH
      return Math.min(newOffset, 0)
    })
  }
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - ITEM_WIDTH
      return Math.max(newOffset, -1500)

    })
  }



  return (
    <div className={style.slider__conteiner}>
      <FiChevronLeft className={style.slider__arrow} onClick={handleLeftArrowClick}/>
      <div className={style.slider__window}>
        <div className={style.slider__items_conteiner}
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {children}
        </div>
      </div>
      <FiChevronRight  className={style.slider__arrow} onClick={handleRightArrowClick}/>
    </div>
  )
}

export default Carousel