import Image from 'next/image';
import google from '@/public/google-play-image.svg';
import apple from '@/public/apple-img.svg';
import DownLoapApp from '@/app/_components/DownLoadApp';
import Link from 'next/link';
import whatsappImg from '@/public/hero-whatsapp.svg';
import heroImageOne from '@/public/assets/hero-img-1.svg';
import heroImageTwo from '@/public/assets/hero-img-2.svg';
import heroImageThree from '@/public/assets/hero-img-3.svg';
import heroImageFour from '@/public/assets/hero-img-4.svg';

export default function HeroSection() {
  return (
    // <section className="bg-linear-to-b from-white to-greyColor px-[43px] py-8 relative md:px-[125px] md:py-[100px]">
    <section className=" bg-linear-to-b from-white to-greyColor px-[43px] py-8 relative md:pl-[127px] md:pr-[127px]  md:py-[100px]">
      <div className="flex flex-col items-center justify-center md:mt-2 ">
        <p className="font-instrument-serif text-2xl italic leading-0 text-center font-normal capitalize pt-[50px] mb-6 text-[#545454] md:mx-2 md:text-[40px] md:mb-8">
          Save time, save Energy
        </p>
        <h1 className="font-lato text-4xl text-[#000000]  text-center w-[312px] font-extrabold leading-10 mb-4 md:w-6xl md:mb-8 md:text-[64px] md:leading-[100%]">
          Always your help in need
        </h1>
        <p className="w-[324px] text-center mb-8 font-lato text-lg leading-6 text-[#545454] md:w-xl md:text-[28px] md:mb-12 md:-tracking-[1%] md:leading-[100%]">
          Instant access to trusted professional service providers anytime you
          need them
        </p>
      </div>
      <div className="hidden md:flex md:justify-center">
        <DownLoapApp
          playStore={{ icon: google, alt: 'Google Play Icon', size: 20 }}
          appStore={{ icon: apple, alt: 'Google Play Icon', size: 20 }}
        />
      </div>

      {/* Image layout */}
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="relative w-full h-[300px]">
          <Image
            src={heroImageOne}
            quality={100}
            alt="Hero image one"
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="w-full">
          <Image
            src={heroImageOne}
            quality={100}
            width={279}
            height={267}
            unoptimized={false}
            alt="Hero image one"
            placeholder="empty"
            sizes="(max-width: 768px) 100vw 1200px"
            className="w-full"
          />
        </div>
        <div className="w-full">
          <Image
            src={heroImageTwo}
            quality={100}
            width={279}
            height={267}
            unoptimized={false}
            alt="Hero image one"
            placeholder="empty"
            sizes="(max-width: 768px) 100vw 1200px"
            className="w-full"
          />
        </div>
        <div className="w-full">
          <Image
            src={heroImageThree}
            quality={100}
            width={279}
            height={267}
            unoptimized={false}
            alt="Hero image one"
            placeholder="empty"
            sizes="(max-width: 768px) 100vw 1200px"
            className="w-full"
          />
        </div>
        <div className="w-full">
          <Image
            src={heroImageFour}
            quality={100}
            width={279}
            height={267}
            unoptimized={false}
            alt="Hero image one"
            placeholder="empty"
            sizes="(max-width: 768px) 100vw 1200px"
            className="w-full"
          />
        </div>
      </div>
      <Link
        href="https://wa.me/2348054648121"
        className="fixed z-50 bottom-4 right-0"
      >
        <Image
          src={whatsappImg}
          width={70}
          height={70}
          // quality={100}
          alt="Hero image one"
          className="w-20 h-20"
        />
      </Link>
    </section>
  );
}
