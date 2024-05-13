
'use client';
import React from 'react';
// import NextImage from 'next/image';
// import data from '@/dictionaries/en.json';


interface FaqCardProps {
    title: string;
    description: string;


}

const FaqCard: React.FC<FaqCardProps> = ({
    title,
    description


  }) => {
    return (

<div className='flex flex-col lg:flex-row items-start border-t border-fg-line'>
<div className='flex flex-1 items-center justify-start pt-6 '>
  <h1 className='text-lg font-bold text-fg-text-contrast'>{title}</h1>
  </div>
  <div className='flex flex-1 items-center justify-start pt-6 '>
  <p className='text-base lg:text-lg font-normal lg:font-medium text-fg-text'>{description}</p>
  </div>

</div>
    );
  };  


export default FaqCard;


