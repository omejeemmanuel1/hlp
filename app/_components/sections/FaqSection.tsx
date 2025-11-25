import Image from 'next/image';
import DownLoapApp from '../DownLoadApp';
import FaqToggle from '@/app/_components/FaqToggle';
import apple from '@/public/apple-img.svg';
import google from '@/public/google-play-image.svg';
// import qrCode from '@/public/qrcode-img.png';
export default function FaqSection() {
  return (
    <section className="bg-[#FAF9F8] w-full py-[60px] md:py-[127px] md:px-[127px]">
      <div className="md:flex md:flex-row ">
        <div className=" md:flex flow-row items-center md:flex-col md:items-start ">
          <h2 className="text-center mb-6 leading-6 text-[28px] font-lato font-extrabold md:text-[64px] md:leading-[100%] md:text-left">
            You Have Questions ?
          </h2>
          <div className="">
            <p className="font-lato font-semibold text-xl -tracking-[1%] mb-10 md:text-[32px] md:leading-[100%] text-center">
              We have answers for you ...
            </p>
          </div>
          <div className="hidden md:block md:mb-2">
            <Image
              src="https://backend-api.helpappafrica.com/public/qrcode.png"
              alt="QR Code"
              width={130}
              height={130}
              className="border-[0.75px] border-[#E6E6E6] shadow-sm rounded-lg"
            />
          </div>
          <p className="hidden md:block md:text-base md:mt-2 font-lato font-bold italic text-mainColor ">
            Scan to download
          </p>
          <div className="flex justify-center my-10">
            <DownLoapApp
              playStore={{ icon: google, alt: 'Google Play Icon', size: 20 }}
              appStore={{ icon: apple, alt: 'Google Play Icon', size: 20 }}
            />
          </div>
        </div>
        {/* Foundation /primary /primary -300 */}
        <div className="bg-linear-to-b from-white to-[#EEECE8] w-full py-6 border border-[#E6E6E6] md:w-[776px] rounded-sm md:h-auto">
          <FaqToggle
            question="What is Help App all about ?"
            answer="Help App Africa is a platform that connects you with your nearest local service providers. Whether you need a plumber, electrician, cleaner, or any other professional, Help App Africa makes it easy to find and book reliable service providers."
            defaultOpen
          />

          <FaqToggle
            question="Is Help App currently in my city ?"
            answer="Help app is only available in Lagos state with plans of operating in other cities around Nigeria in the soonest time "
          />
          <FaqToggle
            question="How can i book a service provider ?"
            answer="Book a provider on help app by selecting their profile, choosing the service (s) that you need , make payment and get it delivered to you"
          />
          <FaqToggle
            question="Can i register as a provider on the platform ?"
            answer="Yes, you can … registration is free …"
          />
          <FaqToggle
            question="Is my safety guaranteed on help app when I book a provider ? "
            answer="Yes, we take strict measures within our application that is aimed at protecting both our clients and our service providers"
          />
        </div>
      </div>
    </section>
  );
}
