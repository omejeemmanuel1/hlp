'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
export interface StoreIcon {
  icon: StaticImageData | string;
  alt: string;
  size?: number;
}

interface DownloadAppButtonProps {
  label?: string;
  arrowIcon?: string | StaticImageData;
  playStore: StoreIcon;
  appStore: StoreIcon;
}

export default function DownLoapApp({
  label = 'Download App',
  arrowIcon = '/arrow-1.svg',
  playStore,
  appStore,
}: DownloadAppButtonProps) {
  return (
    <div className="flex w-[300px] px-[17px] py-2.5 items-center gap-4 justify-center mb-8 bg-[#FFFFFF] md:w-[350px] md:px-[25px] md:py-[15px] rounded-full border border-[#E6E6E6]">
      <div className="flex items-center justify-center gap-2.5 max-w-2xl h-[19px]">
        <Link
          href="/"
          className="text-sm font-extrabold text-mainColor italic md:text-[20px]"
        >
          {label}
        </Link>
        <Image
          src={arrowIcon}
          alt="App image"
          width={20}
          height={20}
          className="h-4 w-4"
        />
      </div>
      <div className="flex items-center gap-2 max-w-2xl">
        <Link
          href="https://play.google.com/store/apps/details?id=com.helpappafrica.helpapp"
          className=" p-2 border border-[#E6E6E6] rounded-full h-10 w-10 flex items-center justify-center"
        >
          <div className="">
            <Image
              src={playStore.icon}
              alt={playStore.alt}
              height={playStore.size ?? 20}
              quality={100}
              unoptimized={true}
              width={playStore.size ?? 20}
              className=""
            />
          </div>
        </Link>
        {/* </div> */}
        <div className="h-6 w-px bg-gray-300"></div>
        <Link
          href="https://apps.apple.com/gb/app/help-app-africa/id6737198514"
          className=" border border-[#E6E6E6] rounded-full h-10 w-10 flex items-center justify-center"
        >
          <Image
            src={appStore.icon}
            alt={appStore.alt}
            height={appStore.size ?? 20}
            quality={100}
            width={appStore.size ?? 20}
            unoptimized={true}
            className=""
          />
        </Link>
      </div>
    </div>
  );
}
