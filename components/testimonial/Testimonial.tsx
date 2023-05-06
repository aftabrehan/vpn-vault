/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
// import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

import Stars from '../../public/assets/icon/stars.svg';
import ArrowBack from '../../public/assets/icon/arrow-back-fill.svg';
import ArrowNext from '../../public/assets/icon/arrow-next-fill.svg';

const Testimonial = ({
  listTestimoni = [
    {
      name: 'Viezh Robert',
      image: '/assets/people-1.png',
      city: 'Warsaw',
      country: 'Poland',
      rating: '4.5',
      testimoni:
        'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. VPN Vault always the best.',
    },
    {
      name: 'Yessica Christy',
      image: '/assets/people-2.png',
      city: 'Shanxi',
      country: 'China',
      rating: '4.5',
      testimoni:
        'I like it because I like to travel far and still can connect with high speed.',
    },
    {
      name: 'Kim Young Jou',
      image: '/assets/people-3.png',
      city: 'Seoul',
      country: 'South Korea',
      rating: '4.5',
      testimoni:
        'This is very unusual for my business that currently requires a virtual private network that has high security.',
    },
    {
      name: 'Yessica Christy',
      image: '/assets/people-2.png',
      city: 'Shanxi',
      country: 'China',
      rating: '4.5',
      testimoni:
        'I like it because I like to travel far and still can connect with high speed.',
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: () => (
      <a className="">
        <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all " />
      </a>
    ),
    dotsClass: 'slick-dots w-max absolute mt-20  ',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const [sliderRef, setSliderRef] = useState(null);

  let sliderRef: any = null;

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={(component: Slider | null) => {
          sliderRef = component;
        }}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="flex justify-center p-4" key={index}>
            <div className="shadow hover:shadow-lg transition-all rounded-lg p-8 flex flex-col h-[288px]">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-gray-400 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-primary-400 border hover:bg-primary-400 hover:text-white-500 transition-all text-primary-400 cursor-pointer"
            onClick={() => sliderRef?.slickPrev()}
            onKeyDown={(e) => e.key === 'ArrowLeft' && sliderRef?.slickPrev()}
            role="button"
            tabIndex={-1}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-primary-400 border hover:bg-primary-400 hover:text-white-500 transition-all text-primary-400 cursor-pointer"
            onClick={() => sliderRef?.slickNext()}
            onKeyDown={(e) => e.key === 'ArrowRight' && sliderRef?.slickNext()}
            role="button"
            tabIndex={-2}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
