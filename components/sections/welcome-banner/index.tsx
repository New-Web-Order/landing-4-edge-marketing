'use client';
import React from 'react';
import Button from '@/components/ui/button';
import NextImage from 'next/image';
import BannerImage from '@/public/assets/images/welcome-banner.webp';
import Input from '@/components/ui/input';
import data from '@/dictionaries/en.json';
import '@/styles/globals.css';

const WelcomeBanner = () => {
  return (
    <section className='w-full px-4 md:px-0 py-9 lg:py-0 lg:max-h-screen flex justify-center' aria-label='Welcome-Banner' id='banner'>
      <div className='w-fit lg:w-full flex flex-col items-center lg-w-full lg:flex-row justify-between gap-6 lg-gap-0 max-h-full'>
        <div className='flex flex-1 justify-start lg:justify-center items-center w-full max-w-full lg:ps-16'>
            <div className='flex flex-col justify-center gap-6 lg:gap-9 items-start w-fit max-w-xl xl:pb-20 2xl:pb-32'>
            <h1 className='font-bold text-4xl lg:text-5xl xl:text-6xl text-primary-text-contrast '>{data.banner.heading}</h1>
            <p className='font-medium text-base lg:text-lg text-fg-text'>{data.banner.subheading}</p>
            <div className='w-full items-center justify-center flex gap-2'>
                <Input/>
                <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button shape='filled'>
                {data.banner.buttonText}
              </Button>
            </a>
            </div>

            <p className='text-sm font-normal text-fg-text'>{data.banner.subText}</p>
            </div>

        </div>
        <div className='flex flex-1 justify-end items-center max-h-screen w-full'>
        <NextImage src={BannerImage}
        alt='banner image'
        className='w-full max-h-screen'/>
        </div>
      </div>  


    </section>
  );
};

export default WelcomeBanner;