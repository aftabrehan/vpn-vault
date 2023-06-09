/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { useMemo } from 'react';
import { motion } from 'framer-motion';

import AnimationWrapper from '../../layout/AnimationWrapper';
import Button from '../button';

import getScrollAnimation from '../../utili/getScrollAnimation';

const Hero = () => {
  const listUser = [
    {
      name: 'Users',
      number: '390',
      icon: '/assets/icon/heroicons_sm-user.svg',
    },
    {
      name: 'Locations',
      number: '20',
      icon: '/assets/icon/gridicons_location.svg',
    },
    {
      name: 'Server',
      number: '50',
      icon: '/assets/icon/bx_bxs-server.svg',
    },
  ];

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <AnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col gap-8 justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Want anything to be easy with
              <span className="font-bold">VPNVault.</span>
            </h1>
            <p className="text-gray-400 mt-4 mb-6">
              Provide a network for all your needs with ease and fun using VPN
              Vault discover interesting features from us.
            </p>
            <Button type="primary">Get Started</Button>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/hero.png"
                alt="VPN Hero Image"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimationWrapper>
      <div className="relative w-full flex">
        <AnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10 hover:shadow-sm">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-primary-200 w-12 h-12 mr-6 rounded-full hover:shadow-sm">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number + 1}
                  </p>
                  <p className="text-lg text-gray-400">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: 'blur(114px)' }}
        />
      </div>
    </div>
  );
};

export default Hero;
