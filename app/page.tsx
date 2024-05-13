import React from 'react';
import WelcomeBanner from '@/components/sections/welcome-banner';
import FeatureOne from '@/components/sections/features-one';
import Workflow from '@/components/sections/workflow';
import FeatureTwo from '@/components/sections/features-two';
import FAQS from '@/components/sections/faqs';
// import Links from '@/components/sections/links';

const Homepage = () => {
  return (
    <main className='flex flex-col w-screen items-center'>
      <WelcomeBanner />
      <FeatureOne />
      <Workflow />
      <FeatureTwo />
      <FAQS/>
    </main>
  );
};
export default Homepage;
