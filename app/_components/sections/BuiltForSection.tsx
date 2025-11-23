import Card from '../Card';

export default function BuitForSection() {
  return (
    <section className="flex items-center justify-center flex-col pb-4 md:flex-row md:block py-[60px] pr-4 md:px-[127] md:py-[100] ">
      <div className="md:flex md:justify-between md:items-end md:mb-[100px]">
        <div className="flex items-center md:items-start  md:justify-between flex-col mb-10 md:mb-0">
          <h3 className="font-lato font-extrabold md:text-[64px] text-[28px] text-[#000000] leading-[100%] mb-[20]">
            Built For
          </h3>
          <div className="flex items-center justify-center flex-col gap-[16] md:items-start">
            <p className="italic capitalize font-instrument-serif md:text-[40px] text-[24px]">
              Connection
            </p>
            <p className="italic capitalize font-instrument-serif md:text-[40px] text-[24px]">
              Convenience
            </p>
            <p className="italic capitalize font-instrument-serif md:text-[40px] text-[24px]">
              Soft Life
            </p>
          </div>
        </div>

        <div className=" md:py-0 ">
          <p
            className="w-[361]
          md:items-end md:text-start
          text-black text-center font-lato font-semibold text-xl leading-6
           -tracking-wide mb-12  md:mb-[10] md:w-[450px] md:text-[32px] md:leading-8"
          >
            Help App is built with{' '}
            <span className="font-lato italic text-black/50">
              partnership, Seamless connection, User autonomy, Safety & Trust
            </span>{' '}
            in mind ....
          </p>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row md:w-full
        md: gap-11"
      >
        <Card
          number={1}
          title="Service Request Autonomy"
          description="Post your job on your terms and decide who works with you, how much you pay, and when the job gets done"
        />

        <Card
          number={2}
          title="Safety - Trust guaranteed"
          description="Every of our provider is properly verified, so you can book with confidence knowing your safety comes first"
        />

        <Card
          number={3}
          title="High Quality of Service"
          description="From start to finish, expect excellence, attention to detail, and reliable service delivery from our professionals"
        />
      </div>
    </section>
  );
}
