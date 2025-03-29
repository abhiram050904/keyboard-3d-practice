'use client'
import React, { useState } from 'react'
import Catlog, { ProductType } from './Catlog'
import Preview from './Preview'

const Products = () => {
  const [selectedProduct,setSelectedProduct]=useState(  {
    id: "1",
    imgSrc: "/assets/keyboard1.png",
    title: "Magic Keyboard",
    price: 79.99,
    modelSrc: "/assets/keyboard.glb", 
  })

  const handleProductClick=(product: ProductType)=>{
    setSelectedProduct(product)
  }

  return (
    <div className='max-w-[1536px] flex flex-col mx-auto pt-8'>
      <Catlog selectedProduct={selectedProduct} onProductClick={handleProductClick} />
      <Preview selectedProduct={selectedProduct} />
    </div>
  )
}

export default Products
