'use client';
import React from 'react';
import NextImage from 'next/image';
import Button from '@/components/ui/button';
import FeatureTwoImage from '@/public/assets/images/features-two-a.webp';
import FeatureTwoImageTwo from '@/public/assets/images/features-two-b.webp';
import data from '@/dictionaries/en.json';


const FeatureTwo = () => {
  return (
    <section className='w-full flex items-center justify-center px-4 lg:px-0 py-9 lg:py-16 lg:px-16 2xl:px-0' aria-label='Feature-Two-Section' id='features' >
      <div className='w-fit lg:w-full lg:max-w-screen-xl flex items-center justify-between flex-col lg:flex-row gap-8 lg:gap-16 max-w-xl'>
      <div className='w-full flex flex-1 items-center justify-start h-full'>
            <div className='w-fit flex flex-col items-start gap-3.5 lg:gap-6 max-w-xl'>
                <p className='text-lg font-semibold text-fg-text-contrast'>{data.featureTwo.tag}</p>
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
        <div className='flex flex-1 items-center justify-center relative h-full'>
          <div className='flex items-center justify-center w-full '></div>
        <NextImage src={FeatureTwoImage}
        alt='Feature Image'
        className='w-[90%] md:w-full'
        />
        <NextImage src={FeatureTwoImageTwo}
        alt='Feature Image'
        className='absolute left-0 md:-left-16 -bottom-10 max-w-48 sm:max-w-56 md:max-w-72 lg:max-w-full '
        />
        </div>

      </div>



    </section>
  );
};

export default FeatureTwo;