'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Data from '@/dictionaries/en.json';
import { FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ThemeToggle from '../next-theme-toggle';


const Footer = () => {
  const router = useRouter();

  return (
    <div className='w-full flex justify-center px-3.5 lg:px-6 py-16 lg:py-20 border-t border-fg-line'>
      <div className='w-full max-w-screen-xl flex flex-col  items-center gap-y-7 lg:gap-y-9'>
        <div className='w-full flex-col sm:flex-row flex justify-between items-start gap-y-8'>
      <div
                  onClick={() => router.push('/')}
                  className='w-fit flex cursor-pointer items-end gap-x-1.5'
                >
                  

                  <p className='font-semibold text-lg text-primary-text-contrast '>{Data.navbar.logoText}</p>

      </div>
      <div className='w-fit flex gap-8'>
        <p className='text-sm font-normal text-fg-text cursor-pointer hover:text-primary-text-contrast'>{Data.Footer[1]}</p>
        <p className='text-sm font-normal text-fg-text cursor-pointer hover:text-primary-text-contrast'>{Data.Footer[2]}</p>
        <p className='text-sm font-normal text-fg-text cursor-pointer hover:text-primary-text-contrast'>{Data.Footer[3]}</p>
      </div>
      <div className='w-fit flex items-center gap-3 text-bg-200'>
            {Data.Footer.SocialMediaLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-2xl text-primary-text-contrast hover:text-primary-text'
                aria-label={`Visit Edge Marketing on ${link.name}`}

              >
                {link.name === 'facebook' && <FaFacebook  aria-hidden='true' />}
                {link.name === 'instagram' && <FaInstagram  aria-hidden='true'/>}
                {link.name === 'twitter' && <FaXTwitter  aria-hidden='true'/>}
                {link.name === 'linkedin' && <FaLinkedin  aria-hidden='true'/>}
              </Link>
            ))}
    </div>
    </div>


        <div className='w-full border-t border-fg-line pt-8 flex flex-col md:flex-row items-start gap-3 justify-between'>
        <Link
        href={'https://www.newweborder.co/'}
        target='_blank'
        rel='noopener noreferrer'
        className='text-sm font-normal text-fg-text cursor-pointer'
        > 
        © 2023 newweborder. All rights reserved.
        </Link>
          
        <div className='w-full md:w-fit flex items-center justify-start gap-3 sm:gap-6'>
        <a className='text-sm font-normal text-fg-text cursor-pointer hover:text-primary-text-contrast'>{Data.Footer[4]}</a>
        <a className='text-sm font-normal text-fg-text cursor-pointer hover:text-primary-text-contrast'>{Data.Footer[5]}</a>
        <a className='text-sm font-normal text-fg-text cursor-pointer hover:text-primary-text-contrast'>{Data.Footer[6]}</a>
        </div>
        </div>
        <div className='flex justify-between items-center w-full'>
        <p className='text-sm font-normal text-fg-text cursor-pointer '>Realised by <a href='https://www.newweborder.co/' target='_blank' className='hover:cursor-pointer hover:bg-black/90 py-px rounded-sm hover:text-[#23FA4B] hover:transition-color ease-in-out duration-300'>◬ ɴᴇᴡ ᴡᴇʙ ᴏʀᴅᴇʀ_</a></p>

        <ThemeToggle/>    
        </div>
      </div>
    </div>
  );
};

export default Footer;