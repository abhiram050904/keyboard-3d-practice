import Image from 'next/image';
import React from 'react'
import { FaRupeeSign } from "react-icons/fa";
import AnimatedContainer from './AnimatedContainer';

interface ProductCardProps{
    index:number;
    imageSrc:string;
    title:string;
    price:number;
    isActive:boolean;
    onClick:()=>void
}

const ProductCard = ({index,imageSrc,title,price,isActive,onClick}:ProductCardProps) => {
  return (
    <div onClick={onClick} className={`hover:scale-105 ${isActive ? 'scale-105':''}`}>
      <AnimatedContainer delay={index*0.2} className={`w-80 h-32 flex flex-row gap-4 rounded-xl transition-all duration-300 cursor-pointer ${isActive ? 'bg-gradient' : 'bg-stone-800'}`}>
      <Image src={imageSrc} alt='product' width={128} height={128} unoptimized={true} className='rounded-xl' />
      <div className='flex flex-col justify-between px-4 py-6 text-slate-200'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <div className='flex flex-row items-center justify-between'>
            <p className='text-slate-400'><FaRupeeSign size={24}/>{price}</p>
            <div className='w-16 flex justify-center py-1 text-sm border rounded-xl hover:bg-stone-200 transition duration-300 hover:text-stone-800'>Buy</div>
        </div>
      </div>
      </AnimatedContainer>
    </div>
  )
}

export default ProductCard
