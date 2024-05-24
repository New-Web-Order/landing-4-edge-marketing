'use client';
import React from 'react';
import NextImage from 'next/image';
import Divider from '@/public/assets/icons/divider.svg';
// import data from '@/dictionaries/en.json';


interface WorkflowCardProps {
    title: string;
    description: string;
    number:string


}

const WorkflowCard: React.FC<WorkflowCardProps> = ({
    title,
    description,
    number


  }) => {
    return (
<div className='w-full flex items-start justify-start gap-10'>
<div className='flex flex-col items-center gap-4'>
  <p className='text-5xl font-bold text-fg-border'>{number}</p>
  <NextImage src={Divider}
  alt='banner image'
  className='w-0.5 h-24'
  aria-label={`Divider`}
  
  />

</div>
<div className='flex flex-col items-start gap-3'>
  <h1 className='text-xl font-bold text-fg-text-contrast'>{title}</h1>
  <p className='text-base font-medium text-fg-text'>{description}</p>
</div>
</div> 
    );
  };  


export default WorkflowCard;


