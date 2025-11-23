import Link from 'next/link';
export default function RegistrationLink() {
  return (
    <div className=" flex items-end justify-end h-[50px] w-1/2 md:w-[319px] md:h-6 md:mt-14">
      <Link
        href="/register"
        className="font-lato text-mainColor px-4  underline text-sm md:text-[16px] md:px-8"
      >
        Register as a Provider
      </Link>
    </div>
  );
}
