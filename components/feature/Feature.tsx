import Image from 'next/image';
import { useMemo } from 'react';
import { motion } from 'framer-motion';

import AnimationWrapper from '../../layout/AnimationWrapper';

import getScrollAnimation from '../../utili/getScrollAnimation';

const features = [
  'Powerfull online protection.',
  'Internet without borders.',
  'Supercharged VPN',
  'No specific time limits.',
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <AnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/feature-image.png"
              alt="VPN Features Image"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </AnimationWrapper>
        <AnimationWrapper>
          <motion.div
            className="flex flex-col gap-5 items-end justify-center ml-auto w-full lg:w-9/12"
            variants={scrollAnimation}
          >
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              We Provide Many Features You Can Use
            </h3>
            <p className="my-2 text-gray-400">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <ul className="text-gray-400 self-start list-inside ml-8 flex flex-col gap-4">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
