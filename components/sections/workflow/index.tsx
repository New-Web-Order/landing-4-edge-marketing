'use client';
import React from 'react';
import NextImage from 'next/image';
import Button from '@/components/ui/button';
import WorkflowImage from '@/public/assets/images/workflow.webp';
import WorkflowCard from '@/components/ui/workflow-card';
import data from '@/dictionaries/en.json';


const Workflow = () => {
  return (
    <section className='w-full flex items-center justify-center px-4 md:px-0 py-9 lg:py-16 lg:px-16 2xl:px-0' aria-label='Workflow-Steps-Section' id='workflow' >
      <div className='w-fit lg:w-full lg:max-w-screen-xl flex items-center justify-between flex-col lg:flex-row gap-16 max-w-xl'>
        <div className='flex flex-1 items-center justify-center max-w-wfull'>
          <div className='flex flex-col-reverse items-start gap-8 '>
            <div className='flex flex-col items-start w-full gap-8'>
            <p className='text-lg font-semibold text-fg-text-contrast'>{data.workFlow.tag}</p>
            <h1 className='text-3xl font-bold text-fg-text-contrast lg:text-4xl xl:text-5xl'>{data.workFlow.heading}</h1>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button shape='filled'>
                {data.workFlow.buttonText}
              </Button>
            </a>
            </div>
            <NextImage src={WorkflowImage}
             alt='Workflow Image'
             
            />
          </div>

        </div>
        <div className='flex flex-1 flex-col items-start justify-start max-w-wfull gap-4'>
        {data.workFlow.cardInfo.map((option, index) => (
            <WorkflowCard
              key={index}
              title={option.title}
              description={option.description}
              number={option.number}
            />
          ))}

        </div>
      </div>



    </section>
  );
};

export default Workflow;