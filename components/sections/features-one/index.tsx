'use client';
import React from 'react';
import NextImage from 'next/image';
import Button from '@/components/ui/button';
import FeatureOneImage from '@/public/assets/images/features-one.webp';
import data from '@/dictionaries/en.json';


const FeatureOne = () => {
  return (
    <section className='w-full flex items-center justify-center px-4 lg:px-0 py-9 lg:py-16 lg:px-16 2xl:px-0' aria-label='Feature-One-Section' id='main' >
      <div className='w-fit lg:w-full lg:max-w-screen-xl flex items-center justify-between flex-col lg:flex-row gap-8 lg:gap-16 max-w-xl '>
        <div className='flex flex-1 items-center justify-center w-ful'>
        <NextImage src={FeatureOneImage}
        alt='Feature Image'
        />
        </div>
        <div className='flex flex-1 items-center justify-center w-wfull'>
            <div className='w-fit flex flex-col items-start gap-3.5 lg:gap-6 max-w-xl'>
                <p className='text-lg font-semibold text-fg-text-contrast'>{data.featureOne.tag}</p>
                <h1 className='text-3xl font-bold text-fg-text-contrast lg:text-4xl xl:text-5xl'>{data.featureOne.heading}</h1>
                <p className='text-base font-normal text-fg-text lg:text-lg font-medium'>{data.featureOne.subText}</p>
                <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button shape='filled'>
                {data.featureOne.buttonText}
              </Button>
            </a>
            </div>
        </div>
      </div>



    </section>
  );
};

export default FeatureOne;