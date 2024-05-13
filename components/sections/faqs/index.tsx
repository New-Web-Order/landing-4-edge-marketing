'use client';
import React from 'react';
import data from '@/dictionaries/en.json';
import FaqCard from '@/components/ui/faq-card';
import Button from '@/components/ui/button';

const FAQS = () => {
  return (
    <section className='w-full flex justify-center items-center py-9 lg:py-16 lg:px-16 2xl:px-0' aria-label='Faqs-Section' id='faqs' >
        <div className='w-full lg:max-w-screen-xl flex flex-col items-start px-4 gap-8 lg:gap-16 max-w-xl'>
        <div className='w-full flex flex-col items-start gap-6 max-w-3xl'>
            <h1 className='text-3xl font-bold text-fg-text-contrast lg:text-4xl xl:text-5xl'>{data.faqs.heading}</h1>
            <p className='text-base font-normal text-fg-text lg:text-lg font-medium'>{data.faqs.subText}</p>
        </div>

          <div className='w-full flex flex-col items-start gap-9 lg:gap-16'>
          {data.faqs.cardInfo.map((option, index) => (
            <FaqCard
              key={index}
              title={option.title}
              description={option.description}
            />
          ))}
          </div>

          <div className='w-full flex flex-col items-start gap-6 '>
            <h1 className='text-3xl lg:text-4xl text-fg-text-contrast font-bold'>{data.faqs.contactHeadding}</h1>
            <p className='text-base lg:text-lg text-fg-text font-medium'>{data.faqs.contactSubHeading}</p>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button shape='filled'>
                {data.faqs.buttonText}
              </Button>
            </a>
          </div>
          
        </div>
        </section>
  );
};

export default FAQS;