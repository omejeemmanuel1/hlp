'use client';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
interface FaqToggleProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}
export default function FaqToggle({
  question,
  answer,
  defaultOpen = false,
}: FaqToggleProps) {
  const [open, setOpen] = useState<boolean>(defaultOpen);

  return (
    <section className="px-4 md:px-10">
      {/* Toggle Header */}
      <div className=" flex items-center gap-2 w-full mb-6 ">
        <div className=" w-auto px-4 py-3 h-auto text-base font-lato font-bold leading-[100%] bg-[#FFFFFF] border-2 border-[#E6E6E6]  rounded-4xl md:text-[24px]">
          <p className="">{question}</p>
        </div>
        <div>
          <button
            onClick={() => setOpen(prev => !prev)}
            className="bg-[#FFFFFF] border-2 border-[#E6E6E6] rounded-full p-2 h-12 w-12 md:w-14  md:h-14 flex items-center justify-center"
          >
            {open ? (
              <Minus
                className="h-5 w-5 md:h-10 md:w-10 text-black"
                strokeWidth={2}
              />
            ) : (
              <Plus
                className="h-5 w-5 md:h-10 md:w-10 font-lato font-extrabold  text-black"
                strokeWidth={2}
              />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      {open && (
        <div className="flex items-center justify-center w-full ">
          <p className="text-[#545454] leading-5 tracking-tight px-2 pl-6 pr-10 font-lato font-bold text-sm p-4 md:px-2 bg-[#F6F7F9] border mb-4 w-full border-[#E6E6E6] md:text-[20px] md:leading-6">
            {answer}
          </p>
        </div>
      )}
    </section>
  );
}
