import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';


interface reviewCardProps{
    name:string;
    imageSrc:string;
    text:string;
    stars:number;
}

const ReviewCard = ({name,imageSrc,text,stars}:reviewCardProps) => {
  return (
    <div className='w-64 h-40 flex flex-col bg-stone-800 rounded-xl gap-y-2 px-4 py-6 mr-4'>
      <div className='flex justify-between items-center text-xs'>
            <div className='flex items-center justify-center gap-4'>
                <Image src={imageSrc} alt='client' width={35} height={35} className='rounded-full'/>
                <span>{name}</span>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <FaStar/>
                <span>{stars}</span>
            </div>
      </div>
      <p className='text-slate-200 text-xs'>{text}</p>
    </div>
  )
}

export default ReviewCard
