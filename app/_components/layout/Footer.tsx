import Image from 'next/image';
import Link from 'next/link';
import facebook from '@/public/facebook.svg';
import whatsapp from '@/public/whatsapp.svg';
import linkedInLogo from '@/public/linkedIn.svg';
export default function Footer() {
  return (
    <footer className="bg-[#42114A] py-10 px-4 md:py-20 md:px-[127px]">
      <div className="max-w-4xl md:mx-auto md:max-w-7xl md:flex md:justify-between">
        <div className="flex flex-col gap-10 md:justify-center">
          <p className="font-lato font-medium text-2xl italic text-white leading-[100%] md:text-[40px] md:font-medium md:leading-12">
            Always your <br /> Help in Need
          </p>
          <div className="flex gap-8 mb-12  md:items-center">
            <Link href="/">
              <Image
                src={facebook}
                alt="facebook logo"
                width={100}
                height={100}
                quality={100}
                className="w-[26px] h-[26px] md:w-10 md:h-10"
              />
            </Link>
            <Link href="/">
              <Image
                src={linkedInLogo}
                alt="LinkedIn logo"
                width={100}
                height={100}
                quality={100}
                className="w-[26px] h-[26px] md:w-10 md:h-10"
              />
            </Link>
            <Link href="https://wa.me/2348054648121">
              <Image
                src={whatsapp}
                alt="WhatSapp logo"
                width={100}
                height={100}
                quality={100}
                className="w-[26px] h-[26px] md:w-10 md:h-10"
              />
            </Link>
          </div>
        </div>
        <div className=" flex items-start flex-col gap-10 md:flex-row md:items-center md:justify-between md:pt-[100px]">
          <div className="flex flex-col gap-4 md:mb-6 ">
            <h4 className="font-lato font-semibold text-xl leading-[100%] text-white md:text-[24px]">
              United States
            </h4>
            <p className="flex flex-col font-lato font-semibold text-base text-[#D9D9D9]">
              <span>2321 Taylor, Park Dr. #1049</span>{' '}
              <span>Reynoldsburg OH, 43068</span>
            </p>
          </div>
          <div className="flex flex-col gap-4 md:mb-6">
            <h4 className="font-lato font-semibold text-xl leading-[100%] text-white md:text-[24px]">
              Lagos, Nigeria
            </h4>
            <p className="flex flex-col font-lato font-semibold text-base text-[#D9D9D9] md:text-[16px]">
              <span className="capitalize">Yaba , Lagos State</span>
              <span>+23408054648121</span>
            </p>
          </div>
          <div className="flex flex-col gap-4  md:mt-2">
            <h4 className="font-lato font-semibold text-xl leading-[100%] text-white md:text-[24px]">
              Subscribe to our newsletter
            </h4>
            <div className="flex w-full md:w-3/4">
              <input
                name="email"
                type="email"
                id="email"
                placeholder="Enter email here ..."
                className="text-white py-2.5 px-2 text-[16px] bg-transparent focus:outline-none focus:ring-0 border border-white"
              />

              <button className="bg-white text-mainColor font-lato font-bold text-base px-4 flex items-center justify-center">
                Subscribe
              </button>
            </div>
            <p className="font-lato font-medium leading-[100%] text-base text-white">
              Admin@Helpappafrica.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
