import Link from 'next/link';
import Logo from '@/app/_components/Logo';
import RegistrationLink from '@/app/_components/RegistrationLink';
export default function Header() {
  return (
    <header className="bg-white px-3.5 py-[33px] fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-gray-200 md:border-b-2 md:px-[100px] md:py-[30px]">
      <div className=" flex items-center justify-between">
        <Link href="/" className="">
          <Logo />
        </Link>
        <RegistrationLink />
      </div>
    </header>
  );
}
