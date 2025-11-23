import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/logo-2.svg"
      alt="Logo"
      width={100}
      height={100}
      quality={100}
      unoptimized={true}
      className=" w-[89px] h-[50px] md:w-[146px] md:h-[77px]"
    />
    // <div className="overflow-hidden flex-1 flex items-start md:w-[317px]">
    // </div>
  );
}
